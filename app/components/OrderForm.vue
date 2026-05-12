<script setup lang="ts">
const form = ref({
  customerName: '',
  email: '',
  phone: '',
  serviceType: '',
  projectDescription: '',
  budget: '',
  deadline: '',
  additionalNotes: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const serviceTypes = [
  { label: 'เว็บไซต์', value: 'website' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'เว็บแอปพลิเคชัน', value: 'webapp' },
  { label: 'ทั้งสองอย่าง', value: 'both' }
]

const budgetRanges = [
  { label: 'ต่ำกว่า 10,000 บาท', value: 'under-10k' },
  { label: '10,000 - 50,000 บาท', value: '10k-50k' },
  { label: '50,000 - 100,000 บาท', value: '50k-100k' },
  { label: 'มากกว่า 100,000 บาท', value: 'over-100k' }
]

async function onSubmit() {
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = false

  try {
    await $fetch('/api/orders', {
      method: 'POST',
      body: {
        ...form.value,
        createdAt: new Date().toISOString()
      }
    })

    submitSuccess.value = true

    // Reset form
    form.value = {
      customerName: '',
      email: '',
      phone: '',
      serviceType: '',
      projectDescription: '',
      budget: '',
      deadline: '',
      additionalNotes: ''
    }

    // Reset success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error: unknown) {
    const err = error as { data?: { message?: string } }
    submitError.value = err.data?.message || 'เกิดข้อผิดพลาดในการส่งออเดอร์ กรุณาลองใหม่อีกครั้ง'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="relative">
    <!-- Success/Error Alerts -->
    <UAlert
      v-if="submitSuccess"
      color="success"
      variant="soft"
      icon="i-lucide-check-circle"
      title="ส่งออเดอร์สำเร็จ!"
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

    <UCard class="overflow-hidden">
      <template #header>
        <div class="text-center">
          <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UIcon name="i-lucide-shopping-cart" class="w-8 h-8 text-primary" />
          </div>
          <h2 class="text-3xl font-bold mb-2">
            ส่งคำสั่งซื้อ
          </h2>
          <p class="text-muted">
            กรุณากรอกข้อมูลให้ครบถ้วนเพื่อให้เราสามารถติดต่อกลับได้
          </p>
        </div>
      </template>

      <UForm
        class="space-y-6"
        :state="form"
        @submit="onSubmit"
      >
        <!-- ข้อมูลติดต่อ -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-1 h-6 bg-primary rounded-full" />
            <h3 class="text-lg font-semibold">
              ข้อมูลติดต่อ
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UFormField label="ชื่อ-นามสกุล" name="customerName" required>
              <UInput
                v-model="form.customerName"
                placeholder="กรุณากรอกชื่อ-นามสกุล"
                icon="i-lucide-user"
                size="lg"
                required
              />
            </UFormField>

            <UFormField label="อีเมล" name="email" required>
              <UInput
                v-model="form.email"
                type="email"
                placeholder="example@email.com"
                icon="i-lucide-mail"
                size="lg"
                required
              />
            </UFormField>
          </div>

          <UFormField label="เบอร์โทรศัพท์" name="phone" required>
            <UInput
              v-model="form.phone"
              type="tel"
              placeholder="080-006-5609 หรือ 084-528-5354"
              icon="i-lucide-phone"
              size="lg"
              required
            />
          </UFormField>
        </div>

        <USeparator />

        <!-- รายละเอียดโปรเจกต์ -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-1 h-6 bg-primary rounded-full" />
            <h3 class="text-lg font-semibold">
              รายละเอียดโปรเจกต์
            </h3>
          </div>

          <UFormField label="ประเภทบริการ" name="serviceType" required>
            <USelect
              v-model="form.serviceType"
              :items="serviceTypes"
              placeholder="เลือกประเภทบริการที่ต้องการ"
              icon="i-lucide-layers"
              size="lg"
              required
            />
          </UFormField>

          <UFormField label="รายละเอียดโปรเจกต์" name="projectDescription" required>
            <UTextarea
              v-model="form.projectDescription"
              placeholder="อธิบายรายละเอียดโปรเจกต์ที่ต้องการ เช่น ฟีเจอร์ที่ต้องการ, กลุ่มเป้าหมาย, วัตถุประสงค์..."
              :rows="5"
              size="lg"
              required
            />
          </UFormField>
        </div>

        <USeparator />

        <!-- งบประมาณและกำหนดเวลา -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-1 h-6 bg-primary rounded-full" />
            <h3 class="text-lg font-semibold">
              งบประมาณและกำหนดเวลา
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UFormField label="งบประมาณ" name="budget" required>
              <USelect
                v-model="form.budget"
                :items="budgetRanges"
                placeholder="เลือกช่วงงบประมาณ"
                icon="i-lucide-dollar-sign"
                size="lg"
                required
              />
            </UFormField>

            <UFormField label="กำหนดส่งงาน" name="deadline">
              <UInput
                v-model="form.deadline"
                type="date"
                icon="i-lucide-calendar"
                size="lg"
              />
            </UFormField>
          </div>
        </div>

        <USeparator />

        <!-- หมายเหตุเพิ่มเติม -->
        <UFormField label="หมายเหตุเพิ่มเติม" name="additionalNotes">
          <UTextarea
            v-model="form.additionalNotes"
            placeholder="หมายเหตุเพิ่มเติม เช่น ความต้องการพิเศษ, คำถามเพิ่มเติม..."
            :rows="3"
            size="lg"
          />
        </UFormField>

        <div class="pt-4">
          <UButton
            type="submit"
            :loading="isSubmitting"
            size="xl"
            block
            icon="i-lucide-send"
            class="font-semibold"
          >
            <span v-if="!isSubmitting">ส่งคำสั่งซื้อ</span>
            <span v-else>กำลังส่ง...</span>
          </UButton>
          <p class="text-center text-sm text-muted mt-3">
            <UIcon name="i-lucide-shield-check" class="w-4 h-4 inline mr-1" />
            ข้อมูลของคุณจะถูกเก็บเป็นความลับ
          </p>
        </div>
      </UForm>
    </UCard>
  </div>
</template>
