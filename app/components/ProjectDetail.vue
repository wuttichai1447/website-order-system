<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { Project } from '~/composables/useProjects'

interface Props {
  project: Project
}

const props = defineProps<Props>()

// รับแค่โปรเจกต์เดียวจาก props - ไม่มี array

// Get project ID - ensure it's always a string
const projectId = computed(() => {
  if (!props.project || !props.project.id) return ''
  return String(props.project.id)
})

// Check project ID - these will be reactive
const isProject1 = computed(() => projectId.value === '1')
const isProject2 = computed(() => projectId.value === '2')
const isProject5 = computed(() => projectId.value === '5')

// โปรเจกต์แอปพลิเคชัน → ใช้ layout พิเศษ (รูปใหญ่ กรอบชัด สัดส่วนมือถือ)
const isApp = computed(() => props.project?.category === 'แอปพลิเคชัน')

// Watch project changes - แค่โปรเจกต์เดียว
watch(() => props.project, (newProject) => {
  if (newProject) {
    // แสดงแค่โปรเจกต์เดียว
  }
}, { immediate: true })

// Gallery
const selectedImage = ref<string | null>(null)
const selectedImageIndex = ref(0)

const openLightbox = (image: string, index: number) => {
  selectedImage.value = image
  selectedImageIndex.value = index
}

const closeLightbox = () => {
  selectedImage.value = null
}

const nextImage = () => {
  if (props.project.gallery && selectedImageIndex.value < props.project.gallery.length - 1) {
    selectedImageIndex.value++
    selectedImage.value = props.project.gallery[selectedImageIndex.value] || null
  }
}

const prevImage = () => {
  if (selectedImageIndex.value > 0) {
    selectedImageIndex.value--
    selectedImage.value = props.project.gallery?.[selectedImageIndex.value] || null
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (selectedImage.value) {
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowRight') {
      nextImage()
    } else if (e.key === 'ArrowLeft') {
      prevImage()
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    :key="`project-detail-${projectId}`"
    class="max-w-7xl mx-auto sm:mx-auto"
  >
    <UCard class="overflow-hidden rounded-none sm:rounded-lg">
      <!-- Hero Image -->
      <div class="relative h-[32rem] md:h-[40rem] overflow-hidden">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 md:p-12">
          <UBadge
            color="primary"
            variant="solid"
            size="lg"
            class="mb-4"
          >
            {{ project.category }}
          </UBadge>
          <h1 class="text-6xl md:text-7xl font-bold text-white mb-4">
            {{ project.title }}
          </h1>
        </div>
      </div>

      <!-- Content -->
      <div class="px-4 py-6 sm:px-6 sm:py-8 md:p-10 md:px-12">
        <!-- Project Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <UIcon
                name="i-lucide-building"
                class="w-5 h-5 text-primary"
              />
              <span class="text-base font-semibold text-muted">ลูกค้า</span>
            </div>
            <p class="text-xl font-semibold">
              {{ project.client || 'ไม่ระบุ' }}
            </p>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-2">
              <UIcon
                name="i-lucide-calendar"
                class="w-5 h-5 text-primary"
              />
              <span class="text-base font-semibold text-muted">ปีที่ทำ</span>
            </div>
            <p class="text-xl font-semibold">
              {{ project.year || 'ไม่ระบุ' }}
            </p>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-2">
              <UIcon
                name="i-lucide-clock"
                class="w-5 h-5 text-primary"
              />
              <span class="text-base font-semibold text-muted">ระยะเวลา</span>
            </div>
            <p class="text-xl font-semibold">
              {{ project.duration || 'ไม่ระบุ' }}
            </p>
          </div>
        </div>

        <!-- Description -->
        <div class="mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            เกี่ยวกับโปรเจกต์
          </h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-xl md:text-2xl text-muted leading-relaxed mb-4">
              {{ project.description }}
            </p>
            <p
              v-if="project.longDescription"
              class="text-base text-muted leading-relaxed"
            >
              {{ project.longDescription }}
            </p>
          </div>

          <!-- โปรเจกต์ E-Commerce: หัวข้อและ flow ก่อนรูป -->
          <template v-if="isProject1 && project.descriptionImages?.length">
            <h4 class="mt-8 text-lg font-bold text-primary">
              ส่วนประกอบหลักของระบบ
            </h4>
            <p class="mt-2 text-sm text-muted font-medium">
              Dashboard จัดการและรายงาน → หน้าร้าน/สินค้า → ชำระเงินและตะกร้า → จัดการออเดอร์และสต็อก
            </p>
          </template>

          <!-- รูปประกอบในส่วนอธิบาย (ถ้ามี) — แอป: ใหญ่ขึ้น + กรอบชัด + สัดส่วนมือถือ -->
          <div
            v-if="project.descriptionImages && project.descriptionImages.length > 0"
            :class="[isProject1 ? 'mt-4' : 'mt-8', isApp ? 'grid grid-cols-2 sm:grid-cols-3 gap-6' : 'grid grid-cols-1 sm:grid-cols-2 gap-6']"
          >
            <div
              v-for="(item, idx) in project.descriptionImages"
              :key="idx"
              class="rounded-2xl overflow-hidden border-2 bg-gray-100 dark:bg-gray-800/80 shadow-lg"
              :class="isApp ? 'border-gray-300 dark:border-gray-600 p-2 sm:p-3' : 'border-gray-200 dark:border-gray-700'"
            >
              <div
                v-if="isApp"
                class="aspect-[9/19] max-h-[420px] mx-auto rounded-xl overflow-hidden bg-white dark:bg-gray-900"
              >
                <img
                  :src="item.src"
                  :alt="item.caption || `รูปประกอบ ${idx + 1}`"
                  class="w-full h-full object-contain"
                >
              </div>
              <template v-else>
                <img
                  :src="item.src"
                  :alt="item.caption || `รูปประกอบ ${idx + 1}`"
                  class="w-full min-h-[280px] h-80 sm:h-56 object-cover object-top"
                >
              </template>
              <p
                v-if="item.caption"
                class="p-3 text-sm font-medium text-muted text-center"
                :class="isApp ? 'bg-gray-50/80 dark:bg-gray-800/80' : 'bg-gray-50 dark:bg-gray-900'"
              >
                {{ item.caption }}
              </p>
            </div>
          </div>
        </div>

        <!-- Custom Content for Project 1: E-Commerce Platform -->
        <div
          v-if="isProject1"
          class="mb-8 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div class="p-5 sm:p-6 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-bold mb-1 text-primary">
              ระบบ E-Commerce ครบวงจร
            </h3>
            <p class="text-sm text-muted">
              เว็บแอปพลิเคชันร้านค้าออนไลน์ ตั้งแต่หน้าร้าน จัดการสินค้า ตะกร้า ชำระเงิน ออเดอร์ และ Dashboard รายงานยอดขาย
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6">
            <div class="flex gap-4 p-4 bg-white dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700">
              <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <UIcon
                  name="i-lucide-store"
                  class="w-5 h-5 text-primary"
                />
              </div>
              <div>
                <h4 class="font-semibold mb-0.5">
                  หน้าร้านและสินค้า
                </h4>
                <p class="text-xs text-muted">
                  แสดงสินค้าตามหมวดหมู่ ค้นหา ฟิลเตอร์
                </p>
              </div>
            </div>
            <div class="flex gap-4 p-4 bg-white dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700">
              <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <UIcon
                  name="i-lucide-shopping-cart"
                  class="w-5 h-5 text-primary"
                />
              </div>
              <div>
                <h4 class="font-semibold mb-0.5">
                  ตะกร้าและ Checkout
                </h4>
                <p class="text-xs text-muted">
                  เพิ่มสินค้า สรุปคำสั่งซื้อ ก่อนชำระเงิน
                </p>
              </div>
            </div>
            <div class="flex gap-4 p-4 bg-white dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700">
              <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <UIcon
                  name="i-lucide-credit-card"
                  class="w-5 h-5 text-primary"
                />
              </div>
              <div>
                <h4 class="font-semibold mb-0.5">
                  ชำระเงินและออเดอร์
                </h4>
                <p class="text-xs text-muted">
                  หลายช่องทาง จัดการออเดอร์และสต็อก
                </p>
              </div>
            </div>
            <div class="flex gap-4 p-4 bg-white dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700">
              <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <UIcon
                  name="i-lucide-bar-chart-3"
                  class="w-5 h-5 text-primary"
                />
              </div>
              <div>
                <h4 class="font-semibold mb-0.5">
                  Dashboard และรายงาน
                </h4>
                <p class="text-xs text-muted">
                  ยอดขาย Real-time สำหรับผู้ดูแลระบบ
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Content for Project 2 -->
        <div
          v-if="isProject2"
          class="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border-2 border-blue-300 dark:border-blue-700"
        >
          <h3 class="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            🏢 Corporate Website พิเศษ
          </h3>
          <p class="text-muted mb-6 text-lg">
            เว็บไซต์บริษัทที่ออกแบบมาอย่างพิเศษ
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <UIcon
                name="i-lucide-search"
                class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
              />
              <div>
                <h4 class="font-semibold mb-1">
                  SEO Optimized
                </h4>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <UIcon
                name="i-lucide-file-text"
                class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
              />
              <div>
                <h4 class="font-semibold mb-1">
                  CMS System
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Content for Project 5 -->
        <div
          v-if="isProject5"
          class="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-2 border-green-300 dark:border-green-700"
        >
          <h3 class="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
            📱 Mobile Web App พิเศษ
          </h3>
          <p class="text-muted mb-6 text-lg">
            เว็บแอปพลิเคชันที่รองรับทุกอุปกรณ์
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <UIcon
                name="i-lucide-smartphone"
                class="w-8 h-8 text-green-600 dark:text-green-400 mb-2"
              />
              <h4 class="font-semibold mb-1">
                Responsive Design
              </h4>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <UIcon
                name="i-lucide-download"
                class="w-8 h-8 text-green-600 dark:text-green-400 mb-2"
              />
              <h4 class="font-semibold mb-1">
                PWA Support
              </h4>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div
          v-if="project.features && project.features.length > 0"
          class="mb-8"
        >
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            ฟีเจอร์หลัก
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div
              v-for="(feature, index) in project.features"
              :key="index"
              class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <UIcon
                name="i-lucide-check-circle"
                class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              />
              <span class="text-muted">{{ feature }}</span>
            </div>
          </div>
        </div>

        <!-- Gallery ภาพตัวอย่าง — แอป: รูปใหญ่ขึ้น + กรอบมือถือ + สัดส่วน 9:19 -->
        <div
          v-if="project.gallery && project.gallery.length > 0"
          class="mb-8"
        >
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            {{ isApp ? 'หน้าจอแอป' : 'ภาพตัวอย่าง' }}
          </h3>
          <div
            class="grid gap-4"
            :class="isApp ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6' : 'grid-cols-2 md:grid-cols-3 gap-4'"
          >
            <div
              v-for="(image, index) in project.gallery"
              :key="index"
              class="relative overflow-hidden rounded-2xl cursor-pointer group"
              :class="isApp ? 'border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/80 shadow-lg p-2 sm:p-3' : ''"
              @click="openLightbox(image, index)"
            >
              <div
                v-if="isApp"
                class="aspect-[9/19] rounded-xl overflow-hidden bg-white dark:bg-gray-900"
              >
                <img
                  :src="image"
                  :alt="`${project.title} - Image ${index + 1}`"
                  class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                >
              </div>
              <template v-else>
                <div class="aspect-video overflow-hidden rounded-lg">
                  <img
                    :src="image"
                    :alt="`${project.title} - Image ${index + 1}`"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  >
                </div>
              </template>
              <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none rounded-2xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-4">
          <UButton
            to="/portfolio"
            variant="outline"
            icon="i-lucide-arrow-left"
          >
            กลับไปผลงานทั้งหมด
          </UButton>
        </div>
      </div>
    </UCard>

    <!-- Lightbox: ใช้ #body เพื่อให้เนื้อหาอยู่ใน body ของ modal ไม่ไปอยู่ที่ trigger -->
    <UModal
      :open="!!selectedImage"
      :close="false"
      :ui="{ content: '!max-w-[95vw] w-[95vw] max-h-[90dvh] overflow-hidden sm:!max-w-[80vw] sm:w-[80vw] sm:max-h-[85dvh] sm:rounded-2xl sm:shadow-2xl sm:border sm:border-white/10 sm:overflow-hidden' }"
      @update:open="(open) => !open && (selectedImage = null)"
    >
      <template #body>
        <div
          v-if="selectedImage"
          class="relative flex flex-col items-center justify-center min-h-0 max-h-[90dvh] sm:max-h-[85dvh] p-2"
          @click.stop
        >
          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="solid"
            class="absolute top-4 right-4 z-10"
            @click="closeLightbox"
          />
          <img
            :src="selectedImage"
            :alt="`${project.title} - Image ${selectedImageIndex + 1}`"
            class="max-w-full max-h-[82dvh] sm:max-h-[78dvh] w-auto h-auto object-contain"
          >
          <div
            v-if="project.gallery && project.gallery.length > 1"
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
            @click.stop
          >
            <UButton
              icon="i-lucide-chevron-left"
              color="neutral"
              variant="solid"
              :disabled="selectedImageIndex === 0"
              @click.stop="prevImage"
            />
            <UButton
              icon="i-lucide-chevron-right"
              color="neutral"
              variant="solid"
              :disabled="selectedImageIndex === (project.gallery?.length || 0) - 1"
              @click.stop="nextImage"
            />
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>
