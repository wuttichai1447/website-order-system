<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
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

async function onSubmit() {
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = false

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...form.value,
        createdAt: new Date().toISOString()
      }
    })

    submitSuccess.value = true

    // Reset form
    form.value = {
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
</script>

<template>
  <div>
    <UPageHero
      title="ติดต่อเรา"
      description="เราพร้อมให้คำปรึกษาและตอบคำถามทุกข้อสงสัย"
    />

    <UPageSection>
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <!-- Contact Information -->
          <div class="lg:col-span-2">
            <div class="sticky top-8">
              <div class="mb-8">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <UIcon
                    name="i-lucide-info"
                    class="w-4 h-4 text-primary"
                  />
                  <span class="text-sm font-medium text-primary">ข้อมูลติดต่อ</span>
                </div>
                <h2 class="text-3xl font-bold mb-3">
                  ติดต่อเรา
                </h2>
                <p class="text-muted text-lg">
                  เราพร้อมให้คำปรึกษาและตอบคำถามทุกข้อสงสัย ติดต่อเราผ่านช่องทางต่างๆ ด้านล่าง
                </p>
              </div>

              <div class="space-y-4">
                <!-- Phone -->
                <UCard class="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                  <div class="flex items-start gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <UIcon
                        name="i-lucide-phone"
                        class="w-7 h-7 text-primary"
                      />
                    </div>
                    <div class="flex-1">
                      <h3 class="font-bold text-lg mb-2">
                        โทรศัพท์
                      </h3>
                      <a
                        href="tel:0800065609"
                        class="text-muted hover:text-primary transition-colors block mb-1"
                      >
                        080-006-5609
                      </a>
                      <a
                        href="tel:0845285354"
                        class="text-muted hover:text-primary transition-colors block"
                      >
                        084-528-5354
                      </a>
                    </div>
                  </div>
                </UCard>

                <!-- Email -->
                <UCard class="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                  <div class="flex items-start gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <UIcon
                        name="i-lucide-mail"
                        class="w-7 h-7 text-primary"
                      />
                    </div>
                    <div class="flex-1">
                      <h3 class="font-bold text-lg mb-2">
                        อีเมล
                      </h3>
                      <a
                        href="mailto:wuttichai14472@gmail.com"
                        class="text-muted hover:text-primary transition-colors block"
                      >
                        wuttichai14472@gmail.com
                      </a>
                    </div>
                  </div>
                </UCard>

                <!-- Address -->
                <UCard class="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                  <div class="flex items-start gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <UIcon
                        name="i-lucide-map-pin"
                        class="w-7 h-7 text-primary"
                      />
                    </div>
                    <div class="flex-1">
                      <h3 class="font-bold text-lg mb-2">
                        ที่อยู่
                      </h3>
                      <p class="text-muted mb-1">
                        แจ้งวัฒนะ ซอย 10 แขวงทุ่งสองห้อง เขตหลักสี่
                      </p>
                      <p class="text-muted">
                        กรุงเทพมหานคร 10210, ประเทศไทย
                      </p>
                    </div>
                  </div>
                </UCard>

                <!-- Business Hours -->
                <UCard class="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                  <div class="flex items-start gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <UIcon
                        name="i-lucide-clock"
                        class="w-7 h-7 text-primary"
                      />
                    </div>
                    <div class="flex-1">
                      <h3 class="font-bold text-lg mb-2">
                        เวลาทำการ
                      </h3>
                      <p class="text-muted mb-1">
                        จันทร์ - ศุกร์: 09:00 - 18:00
                      </p>
                      <p class="text-muted mb-1">
                        เสาร์: 09:00 - 12:00
                      </p>
                      <p class="text-muted">
                        อาทิตย์: ปิดทำการ
                      </p>
                    </div>
                  </div>
                </UCard>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <UCard class="overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-800">
              <template #header>
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
                  <div class="relative text-center py-6">
                    <div class="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <UIcon
                        name="i-lucide-send"
                        class="w-10 h-10 text-white"
                      />
                    </div>
                    <h2
                      class="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                    >
                      ส่งข้อความ
                    </h2>
                    <p class="text-muted text-lg">
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
                class="space-y-6"
                :state="form"
                @submit="onSubmit"
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
                        v-model="form.name"
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
                        v-model="form.email"
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
                      v-model="form.phone"
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
                      v-model="form.serviceType"
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
                      v-model="form.subject"
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
                      v-model="form.projectDetails"
                      placeholder="อธิบายรายละเอียดโปรเจกต์ที่ต้องการ เช่น ฟีเจอร์ที่ต้องการ, กลุ่มเป้าหมาย, วัตถุประสงค์, ความยาววิดีโอ, สไตล์ที่ต้องการ, จำนวนรูปภาพ..."
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
                      v-model="form.message"
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
      </div>
    </UPageSection>
  </div>
</template>
