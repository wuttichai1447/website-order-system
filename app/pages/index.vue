<script setup lang="ts">
const { projects } = useProjects()

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  subject: '',
  projectDetails: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const serviceTypes = [
  { label: 'เว็บไซต์', value: 'website' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'เว็บแอปพลิเคชัน', value: 'webapp' },
  { label: 'ระบบ E-Commerce', value: 'ecommerce' },
  { label: 'ตัดต่อวิดีโอและรูปภาพ', value: 'video-photo-editing' },
  { label: 'Motion Graphics', value: 'motion-graphics' },
  { label: 'ออกแบบกราฟิก', value: 'graphic-design' },
  { label: 'ระบบจัดการข้อมูล', value: 'data-management' },
  { label: 'อื่นๆ', value: 'other' }
]

async function onSubmitContact() {
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = false

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...contactForm.value,
        createdAt: new Date().toISOString()
      }
    })

    submitSuccess.value = true

    // Reset form
    contactForm.value = {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      subject: '',
      projectDetails: '',
      message: ''
    }

    // Reset success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error: unknown) {
    const err = error as { data?: { message?: string } }
    submitError.value = err.data?.message || 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง'
  } finally {
    isSubmitting.value = false
  }
}

const featuredProjects = computed(() => {
  return projects.value.filter(project => project.featured).slice(0, 6)
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      title="รับทำเว็บไซต์ เว็บแอปพลิเคชัน ตัดต่อวิดีโอ และรูปภาพ"
      description="บริการออกแบบและพัฒนาเว็บไซต์คุณภาพสูง พร้อมเว็บแอปพลิเคชันที่ทันสมัย บริการตัดต่อวิดีโอและรูปภาพครบวงจร ตอบโจทย์ทุกความต้องการ"
      :links="[{
        label: 'ดูผลงาน',
        to: '/portfolio',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'ดูบริการทั้งหมด',
        to: '/services',
        size: 'xl',
        color: 'neutral',
        variant: 'outline'
      }]"
    />

    <!-- Services Overview -->
    <UPageSection
      id="services"
      title="บริการของเรา"
      description="เรามีบริการครบวงจรสำหรับการพัฒนาเว็บไซต์ เว็บแอปพลิเคชัน การตัดต่อวิดีโอและรูปภาพ"
      :features="[{
        icon: 'i-lucide-globe',
        title: 'เว็บไซต์',
        description: 'ออกแบบและพัฒนาเว็บไซต์ที่สวยงาม รองรับทุกอุปกรณ์ และ SEO-friendly'
      }, {
        icon: 'i-lucide-layout',
        title: 'WordPress',
        description: 'เว็บบริษัท ข่าว บล็อก โปรโมท ใช้งานง่าย แก้ไขเนื้อหาเองได้ ราคาเข้าถึงได้'
      }, {
        icon: 'i-lucide-smartphone',
        title: 'เว็บแอปพลิเคชัน',
        description: 'พัฒนาเว็บแอปพลิเคชันที่ทันสมัย มีประสิทธิภาพ และใช้งานง่าย'
      }, {
        icon: 'i-lucide-shopping-cart',
        title: 'ระบบ E-Commerce',
        description: 'สร้างร้านค้าออนไลน์ที่ครบวงจร พร้อมระบบชำระเงินและจัดการสินค้า'
      }, {
        icon: 'i-lucide-video',
        title: 'ตัดต่อวิดีโอและรูปภาพ',
        description: 'บริการตัดต่อวิดีโอคุณภาพสูง และตัดต่อ/ปรับแต่งรูปภาพ Retouch, Color Correction สำหรับโฆษณา, Content และงานต่างๆ'
      }, {
        icon: 'i-lucide-film',
        title: 'Motion Graphics',
        description: 'สร้าง Motion Graphics และ Animation ที่สวยงามและน่าสนใจ'
      }, {
        icon: 'i-lucide-image',
        title: 'ออกแบบกราฟิก',
        description: 'ออกแบบกราฟิก, Logo, Banner และสื่อโฆษณาต่างๆ'
      }, {
        icon: 'i-lucide-database',
        title: 'ระบบจัดการข้อมูล',
        description: 'พัฒนาแอปพลิเคชันสำหรับจัดการข้อมูลและรายงานที่ซับซ้อน'
      }, {
        icon: 'i-lucide-settings',
        title: 'บำรุงรักษา',
        description: 'บริการบำรุงรักษา อัปเดต และสนับสนุนหลังการขาย'
      }]"
    />

    <!-- Portfolio Section -->
    <UPageSection
      id="portfolio"
      title="ผลงานของเรา"
      description="ชมผลงานการพัฒนาเว็บไซต์และเว็บแอปพลิเคชันที่เราภาคภูมิใจ"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="project in featuredProjects"
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
              >
                ดูรายละเอียด
              </UButton>
            </NuxtLink>
          </div>
        </UCard>
      </div>

      <div class="mt-8 text-center">
        <UButton
          to="/portfolio"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
        >
          ดูผลงานทั้งหมด
        </UButton>
      </div>
    </UPageSection>

    <!-- Why Choose Us -->
    <UPageSection
      id="why-us"
      title="ทำไมต้องเลือกเรา"
      description="เราเน้นคุณภาพ ส่งงานตรงเวลา มีผลงานจริง และดูแลหลังขาย"
    >
      <template #body>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">
          <div
            v-for="item in [
              { icon: 'i-lucide-award', title: 'คุณภาพสูง', desc: 'ใช้เทคโนโลยีล่าสุดและมาตรฐานการพัฒนาที่ดี มีผลงานให้ดูจริง' },
              { icon: 'i-lucide-clock', title: 'ส่งงานตรงเวลา', desc: 'มุ่งมั่นส่งงานตามกำหนดและคุณภาพที่ตกลงกัน' },
              { icon: 'i-lucide-headphones', title: 'บริการหลังการขาย', desc: 'สนับสนุนและบำรุงรักษาหลังส่งมอบ ไม่ทิ้งงาน' },
              { icon: 'i-lucide-badge-check', title: 'ราคาชัดเจน', desc: 'เสนอราคาตาม scope งาน ไม่มีค่าใช้จ่ายแอบแฝง' }
            ]"
            :key="item.title"
            class="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-gray-50/50 dark:bg-gray-800/30 hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 min-h-[180px]"
          >
            <div class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 shrink-0">
              <UIcon :name="item.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-bold text-lg mb-2">{{ item.title }}</h3>
            <p class="text-sm text-muted leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Contact Form Section -->
    <UPageSection id="contact">
      <div class="max-w-6xl mx-auto">
        <!-- 2 คอลัมน์บน PC, 1 คอลัมน์บนมือถือ -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- คอลัมน์ซ้าย: ข้อมูลติดต่อ -->
          <div class="space-y-6">
            <div class="mb-6">
              <h2 class="text-3xl font-bold mb-3">
                ติดต่อเรา
              </h2>
              <p class="text-muted text-lg">
                พร้อมให้คำปรึกษาและตอบคำถามทุกข้อสงสัย
              </p>
            </div>

            <!-- Phone -->
            <UCard class="hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-phone" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-bold mb-1">โทรศัพท์</h3>
                  <a href="tel:0800065609" class="text-muted hover:text-primary transition-colors block">
                    080-006-5609
                  </a>
                  <a href="tel:0845285354" class="text-muted hover:text-primary transition-colors block">
                    084-528-5354
                  </a>
                </div>
              </div>
            </UCard>

            <!-- Email -->
            <UCard class="hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-mail" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-bold mb-1">อีเมล</h3>
                  <a href="mailto:wuttichai14472@gmail.com" class="text-muted hover:text-primary transition-colors">
                    wuttichai14472@gmail.com
                  </a>
                </div>
              </div>
            </UCard>

            <!-- Business Hours -->
            <UCard class="hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-clock" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-bold mb-1">เวลาทำการ</h3>
                  <p class="text-muted text-sm">จันทร์ - ศุกร์: 09:00 - 18:00</p>
                  <p class="text-muted text-sm">เสาร์: 09:00 - 12:00</p>
                </div>
              </div>
            </UCard>

            <!-- Location -->
            <UCard class="hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-map-pin" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-bold mb-1">ที่อยู่</h3>
                  <p class="text-muted text-sm mb-0.5">แจ้งวัฒนะ ซอย 10 แขวงทุ่งสองห้อง เขตหลักสี่</p>
                  <p class="text-muted text-sm">กรุงเทพมหานคร 10210, ประเทศไทย</p>
                </div>
              </div>
            </UCard>
          </div>

          <!-- คอลัมน์ขวา: ฟอร์มติดต่อ -->
          <UCard class="overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-800">
            <template #header>
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
                <div class="relative text-center py-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <UIcon
                      name="i-lucide-send"
                      class="w-8 h-8 text-white"
                    />
                  </div>
                  <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    ส่งข้อความ
                  </h3>
                  <p class="text-muted">
                    กรอกแบบฟอร์มด้านล่างเพื่อติดต่อเรา
                  </p>
                </div>
              </div>
            </template>

            <UAlert
              v-if="submitSuccess"
              color="success"
              variant="soft"
              icon="i-lucide-check-circle"
              title="ส่งข้อความสำเร็จ!"
              description="เราจะติดต่อกลับภายใน 24 ชั่วโมง"
              class="mb-6"
            />

            <UAlert
              v-if="submitError"
              color="error"
              variant="soft"
              icon="i-lucide-alert-circle"
              :title="submitError"
              class="mb-6"
            />

            <UForm
              :state="contactForm"
              class="space-y-6"
              @submit="onSubmitContact"
            >
              <!-- ข้อมูลติดต่อ -->
              <div class="space-y-5">
                <div class="flex items-center gap-3 mb-4">
                  <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <span class="text-sm font-semibold text-primary uppercase tracking-wider">ข้อมูลติดต่อ</span>
                  <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <UFormField
                    label="ชื่อ-นามสกุล"
                    name="name"
                    required
                  >
                    <UInput
                      v-model="contactForm.name"
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                      icon="i-lucide-user"
                      size="lg"
                      required
                      class="focus:ring-2 focus:ring-primary/50"
                    />
                  </UFormField>

                  <UFormField
                    label="อีเมล"
                    name="email"
                    required
                  >
                    <UInput
                      v-model="contactForm.email"
                      type="email"
                      placeholder="example@email.com"
                      icon="i-lucide-mail"
                      size="lg"
                      required
                      class="focus:ring-2 focus:ring-primary/50"
                    />
                  </UFormField>
                </div>

                <UFormField
                  label="เบอร์โทรศัพท์"
                  name="phone"
                >
                  <UInput
                    v-model="contactForm.phone"
                    type="tel"
                    placeholder="080-006-5609 หรือ 084-528-5354"
                    icon="i-lucide-phone"
                    size="lg"
                    class="focus:ring-2 focus:ring-primary/50"
                  />
                </UFormField>
              </div>

              <USeparator class="my-6" />

              <!-- รายละเอียดโปรเจกต์ -->
              <div class="space-y-5">
                <div class="flex items-center gap-3 mb-4">
                  <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <span class="text-sm font-semibold text-primary uppercase tracking-wider">รายละเอียดโปรเจกต์</span>
                  <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>

                <UFormField
                  label="ประเภทบริการ"
                  name="serviceType"
                  required
                >
                  <USelect
                    v-model="contactForm.serviceType"
                    :items="serviceTypes"
                    placeholder="เลือกประเภทบริการที่ต้องการ"
                    icon="i-lucide-layers"
                    size="lg"
                    required
                    class="focus:ring-2 focus:ring-primary/50"
                  />
                </UFormField>

                <UFormField
                  label="หัวข้อ"
                  name="subject"
                  required
                >
                  <UInput
                    v-model="contactForm.subject"
                    placeholder="หัวข้อข้อความ"
                    icon="i-lucide-tag"
                    size="lg"
                    required
                    class="focus:ring-2 focus:ring-primary/50"
                  />
                </UFormField>

                <UFormField
                  label="รายละเอียดโปรเจกต์"
                  name="projectDetails"
                  required
                >
                  <UTextarea
                    v-model="contactForm.projectDetails"
                    placeholder="อธิบายรายละเอียดโปรเจกต์ที่ต้องการ..."
                    :rows="4"
                    size="lg"
                    required
                    class="focus:ring-2 focus:ring-primary/50"
                  />
                </UFormField>
              </div>

              <USeparator class="my-6" />

              <!-- ข้อความ -->
              <div class="space-y-5">
                <div class="flex items-center gap-3 mb-4">
                  <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <span class="text-sm font-semibold text-primary uppercase tracking-wider">ข้อความ</span>
                  <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>

                <UFormField
                  label="ข้อความ"
                  name="message"
                  required
                >
                  <UTextarea
                    v-model="contactForm.message"
                    placeholder="กรุณากรอกข้อความของคุณ..."
                    :rows="5"
                    size="lg"
                    required
                    class="focus:ring-2 focus:ring-primary/50"
                  />
                </UFormField>
              </div>

              <div class="pt-6">
                <UButton
                  type="submit"
                  :loading="isSubmitting"
                  size="xl"
                  block
                  icon="i-lucide-send"
                  class="font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span v-if="!isSubmitting">ส่งข้อความ</span>
                  <span v-else>กำลังส่ง...</span>
                </UButton>
                <div class="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
                  <UIcon
                    name="i-lucide-shield-check"
                    class="w-4 h-4 text-primary"
                  />
                  <span>ข้อมูลของคุณจะถูกเก็บเป็นความลับ</span>
                </div>
              </div>
            </UForm>
          </UCard>
        </div>
      </div>
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
