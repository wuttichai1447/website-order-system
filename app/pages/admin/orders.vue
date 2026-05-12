<script setup lang="ts">
interface Order {
  id: string
  customerName: string
  email: string
  phone: string
  serviceType: string
  projectDescription: string
  budget: string
  deadline?: string
  additionalNotes?: string
  createdAt: string
  status?: 'pending' | 'in-progress' | 'completed' | 'cancelled'
}

const orders = ref<Order[]>([])
const isLoading = ref(true)
const error = ref('')

const statusColors: Record<string, 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'> = {
  'pending': 'warning',
  'in-progress': 'info',
  'completed': 'success',
  'cancelled': 'error'
}

const statusLabels = {
  'pending': 'รอดำเนินการ',
  'in-progress': 'กำลังดำเนินการ',
  'completed': 'เสร็จสิ้น',
  'cancelled': 'ยกเลิก'
}

const serviceTypeLabels = {
  website: 'เว็บไซต์',
  wordpress: 'WordPress',
  webapp: 'เว็บแอปพลิเคชัน',
  both: 'ทั้งสองอย่าง'
}

async function fetchOrders() {
  isLoading.value = true
  error.value = ''

  try {
    const response = await $fetch<{ success: boolean, orders: Order[], total: number }>('/api/orders')
    orders.value = response.orders
  } catch (err: unknown) {
    const e = err as { data?: { message?: string } }
    error.value = e.data?.message || 'เกิดข้อผิดพลาดในการโหลดข้อมูลออเดอร์'
    console.error('Error fetching orders:', err)
  } finally {
    isLoading.value = false
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  fetchOrders()
})
</script>

<template>
  <div>
    <UPageHero
      title="จัดการออเดอร์"
      description="ดูและจัดการออเดอร์ทั้งหมดที่เข้ามา"
    />

    <UPageSection>
      <div class="max-w-7xl mx-auto">
        <div class="mb-6 flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold">
              รายการออเดอร์
            </h2>
            <p class="text-muted">
              ทั้งหมด {{ orders.length }} ออเดอร์
            </p>
          </div>
          <UButton
            :loading="isLoading"
            icon="i-lucide-refresh-cw"
            @click="fetchOrders"
          >
            รีเฟรช
          </UButton>
        </div>

        <UAlert
          v-if="error"
          color="error"
          variant="soft"
          icon="i-lucide-alert-circle"
          :title="error"
          class="mb-4"
        />

        <div v-if="isLoading" class="flex justify-center items-center py-12">
          <UIcon name="i-lucide-loader-2" class="w-8 h-8 animate-spin text-primary" />
        </div>

        <div v-else-if="orders.length === 0" class="text-center py-12">
          <UIcon name="i-lucide-inbox" class="w-16 h-16 text-muted mx-auto mb-4" />
          <p class="text-muted text-lg">ยังไม่มีออเดอร์</p>
        </div>

        <div v-else class="space-y-4">
          <UCard
            v-for="order in orders"
            :key="order.id"
            class="hover:shadow-lg transition-shadow"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-bold">{{ order.customerName }}</h3>
                  <p class="text-sm text-muted">ID: {{ order.id }}</p>
                </div>
                <UBadge
                  :color="statusColors[order.status || 'pending']"
                  variant="soft"
                >
                  {{ statusLabels[order.status || 'pending'] }}
                </UBadge>
              </div>
            </template>

            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm font-semibold text-muted mb-1">อีเมล</p>
                  <p>{{ order.email }}</p>
                </div>
                <div>
                  <p class="text-sm font-semibold text-muted mb-1">เบอร์โทรศัพท์</p>
                  <p>{{ order.phone }}</p>
                </div>
                <div>
                  <p class="text-sm font-semibold text-muted mb-1">ประเภทบริการ</p>
                  <p>{{ serviceTypeLabels[order.serviceType as keyof typeof serviceTypeLabels] || order.serviceType }}</p>
                </div>
                <div>
                  <p class="text-sm font-semibold text-muted mb-1">งบประมาณ</p>
                  <p>{{ order.budget }}</p>
                </div>
                <div v-if="order.deadline">
                  <p class="text-sm font-semibold text-muted mb-1">กำหนดส่งงาน</p>
                  <p>{{ formatDate(order.deadline) }}</p>
                </div>
                <div>
                  <p class="text-sm font-semibold text-muted mb-1">วันที่ส่งออเดอร์</p>
                  <p>{{ formatDate(order.createdAt) }}</p>
                </div>
              </div>

              <div>
                <p class="text-sm font-semibold text-muted mb-1">รายละเอียดโปรเจกต์</p>
                <p class="text-muted">{{ order.projectDescription }}</p>
              </div>

              <div v-if="order.additionalNotes">
                <p class="text-sm font-semibold text-muted mb-1">หมายเหตุเพิ่มเติม</p>
                <p class="text-muted">{{ order.additionalNotes }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
