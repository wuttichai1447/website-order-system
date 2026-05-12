<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

// กำหนด page meta สำหรับ dynamic route
definePageMeta({
  key: route => route.fullPath
})

const route = useRoute()
const { projects, getProjectById } = useProjects()

// รับค่า ID จาก route parameter
const projectId = computed(() => {
  const id = route.params.id
  return Array.isArray(id) ? id[0] : String(id || '')
})

// หาโปรเจกต์จาก ID - ใช้ computed เพื่อให้ reactive ต่อการเปลี่ยนแปลง route
const project = computed<Project | null>(() => {
  if (!projectId.value) return null
  return getProjectById(projectId.value) || null
})

// Loading state - แค่ตรวจสอบว่ามีข้อมูลหรือยัง
const isLoading = computed(() => {
  return projects.value.length === 0
})

// อัปเดต page title เมื่อ project เปลี่ยน
watch(project, (newProject) => {
  if (newProject) {
    useHead({
      title: `${newProject.title} - ผลงานของเรา`,
      meta: [
        { name: 'description', content: newProject.description }
      ]
    })
  }
}, { immediate: true })
</script>

<template>
  <div>
    <!-- Back Button -->
    <div class="max-w-7xl mx-auto px-4 py-6">
      <UButton
        to="/portfolio"
        variant="ghost"
        icon="i-lucide-arrow-left"
      >
        กลับไปผลงานทั้งหมด
      </UButton>
    </div>

    <!-- Loading State -->
    <div
      v-if="isLoading"
      class="max-w-5xl mx-auto px-4 py-12 text-center"
    >
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
      <p class="text-muted">
        กำลังโหลดข้อมูลโปรเจกต์...
      </p>
    </div>

    <!-- Not Found State -->
    <div
      v-else-if="!project"
      class="max-w-5xl mx-auto px-4 py-12 text-center"
    >
      <UIcon
        name="i-lucide-alert-circle"
        class="w-16 h-16 text-red-500 mx-auto mb-4"
      />
      <h2 class="text-2xl font-bold mb-2">
        ไม่พบโปรเจกต์
      </h2>
      <p class="text-muted mb-4">
        ไม่พบโปรเจกต์ที่มี ID: <strong>{{ route.params.id }}</strong>
      </p>
      <UButton
        to="/portfolio"
      >
        กลับไปผลงานทั้งหมด
      </UButton>
    </div>

    <!-- Project Detail - แสดงแค่โปรเจกต์เดียวเท่านั้น -->
    <div
      v-else
      class="max-w-5xl mx-auto px-0 sm:px-4 pb-12"
    >
      <ProjectDetail
        :key="`project-${project.id}`"
        :project="project"
      />
    </div>
  </div>
</template>
