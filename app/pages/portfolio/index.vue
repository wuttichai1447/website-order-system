<script setup lang="ts">
import { ref, computed } from 'vue'

const { projects } = useProjects()

const categories = ['ทั้งหมด', 'UX/UI', 'เว็บไซต์', 'เว็บแอปพลิเคชัน', 'แอปพลิเคชัน', 'Workflow Automation', 'วิดีโอ', 'รูปภาพ']
const selectedCategory = ref('ทั้งหมด')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'ทั้งหมด') {
    return projects.value
  }
  return projects.value.filter(project => project.category === selectedCategory.value)
})

const featuredProjects = computed(() => {
  return projects.value.filter(project => project.featured)
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      title="ผลงานของเรา"
      description="ชมผลงานการพัฒนาเว็บไซต์ เว็บแอปพลิเคชัน การตัดต่อวิดีโอและรูปภาพที่เราภาคภูมิใจ"
    />

    <!-- Featured Projects -->
    <UPageSection v-if="featuredProjects.length > 0">
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-2">
          ผลงานเด่น
        </h2>
        <p class="text-muted">
          ผลงานที่ได้รับความนิยมและเป็นที่ยอมรับ
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="(project, i) in featuredProjects"
          :key="project.id"
          class="group hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div
            class="relative overflow-hidden flex items-center justify-center"
            :class="project.category === 'แอปพลิเคชัน' ? 'h-56 bg-gray-100 dark:bg-gray-800' : 'h-48'"
          >
            <img
              :src="project.image"
              :alt="project.title"
              :loading="i < 2 ? 'eager' : 'lazy'"
              :fetchpriority="i === 0 ? 'high' : 'low'"
              decoding="async"
              class="transition-transform duration-300 group-hover:scale-105"
              :class="project.category === 'แอปพลิเคชัน' ? 'max-h-full w-auto object-contain' : 'w-full h-full object-cover group-hover:scale-110'"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div class="absolute bottom-4 left-4 right-4">
              <UBadge
                color="primary"
                variant="solid"
                class="mb-2"
              >
                {{ project.category }}
              </UBadge>
              <h3 class="text-white font-bold text-lg drop-shadow-md">
                {{ project.title }}
              </h3>
            </div>
          </div>

          <div class="p-4">
            <p class="text-muted text-sm mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <NuxtLink
              :to="`/portfolio/${project.id}`"
              class="block"
            >
              <UButton
                variant="outline"
                block
                trailing-icon="i-lucide-arrow-right"
                :aria-label="`ดูรายละเอียด ${project.title}`"
              >
                ดูรายละเอียด
              </UButton>
            </NuxtLink>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <!-- All Projects with Filter -->
    <UPageSection>
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-2">
          ผลงานทั้งหมด
        </h2>
        <p class="text-muted mb-6">
          ชมผลงานทั้งหมดที่เราพัฒนา
        </p>

        <!-- Category Filter -->
        <div class="flex flex-wrap gap-2 mb-8">
          <UButton
            v-for="category in categories"
            :key="category"
            :variant="selectedCategory === category ? 'solid' : 'outline'"
            :color="selectedCategory === category ? 'primary' : 'neutral'"
            @click="selectedCategory = category"
          >
            {{ category }}
          </UButton>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="project in filteredProjects"
          :key="project.id"
          class="group hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div
            class="relative overflow-hidden flex items-center justify-center"
            :class="project.category === 'แอปพลิเคชัน' ? 'h-56 bg-gray-100 dark:bg-gray-800' : 'h-48'"
          >
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              decoding="async"
              class="transition-transform duration-300 group-hover:scale-105"
              :class="project.category === 'แอปพลิเคชัน' ? 'max-h-full w-auto object-contain' : 'w-full h-full object-cover group-hover:scale-110'"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div class="absolute bottom-4 left-4 right-4">
              <UBadge
                color="primary"
                variant="solid"
                class="mb-2"
              >
                {{ project.category }}
              </UBadge>
              <h3 class="text-white font-bold text-lg drop-shadow-md">
                {{ project.title }}
              </h3>
            </div>
          </div>

          <div class="p-4">
            <p class="text-muted text-sm mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <div class="flex gap-2">
              <NuxtLink
                :to="`/portfolio/${project.id}`"
                class="flex-1"
              >
                <UButton
                  variant="outline"
                  block
                  trailing-icon="i-lucide-arrow-right"
                  :aria-label="`ดูรายละเอียด ${project.title}`"
                >
                  ดูรายละเอียด
                </UButton>
              </NuxtLink>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-12"
      >
        <UIcon
          name="i-lucide-folder-x"
          class="w-16 h-16 text-muted mx-auto mb-4"
        />
        <p class="text-muted text-lg">
          ไม่พบผลงานในหมวดหมู่นี้
        </p>
      </div>
    </UPageSection>

    <!-- CTA Section -->
    <UPageSection>
      <UPageCTA
        title="พร้อมเริ่มโปรเจกต์ของคุณแล้วหรือยัง?"
        description="ส่งคำสั่งซื้อตอนนี้และเราจะติดต่อกลับภายใน 24 ชั่วโมง"
        :links="[{
          label: 'ส่งคำสั่งซื้อ',
          to: '/#order',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'primary'
        }, {
          label: 'ติดต่อเรา',
          to: '/contact',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
