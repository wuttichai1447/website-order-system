/// <reference types="node" />
import { writeFile, readFile, mkdir } from 'fs/promises'
import { join } from 'path'

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

const ORDERS_FILE = join(process.cwd(), 'data', 'orders.json')

async function ensureDataDirectory() {
  const dataDir = join(process.cwd(), 'data')
  try {
    await mkdir(dataDir, { recursive: true })
  } catch (error: unknown) {
    const err = error as { code?: string }
    if (err.code !== 'EEXIST') {
      throw error
    }
  }
}

async function readOrders(): Promise<Order[]> {
  try {
    await ensureDataDirectory()
    const data = await readFile(ORDERS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error: unknown) {
    const err = error as { code?: string }
    if (err.code === 'ENOENT') {
      return []
    }
    throw error
  }
}

async function writeOrders(orders: Order[]) {
  await ensureDataDirectory()
  await writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf-8')
}

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      message: 'Method not allowed'
    })
  }

  const body = await readBody(event)

  // Validate required fields
  const requiredFields = ['customerName', 'email', 'phone', 'serviceType', 'projectDescription', 'budget']
  for (const field of requiredFields) {
    if (!body[field]) {
      throw createError({
        statusCode: 400,
        message: `Field ${field} is required`
      })
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid email format'
    })
  }

  let orders: Order[] = []
  try {
    orders = await readOrders()
  } catch {
    orders = []
  }

  const newOrder: Order = {
    id: `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    customerName: body.customerName,
    email: body.email,
    phone: body.phone,
    serviceType: body.serviceType,
    projectDescription: body.projectDescription,
    budget: body.budget,
    deadline: body.deadline || undefined,
    additionalNotes: body.additionalNotes || undefined,
    createdAt: body.createdAt || new Date().toISOString(),
    status: 'pending'
  }

  orders.push(newOrder)
  try {
    await writeOrders(orders)
  } catch (e) {
    console.warn('[orders] บันทึกไฟล์ไม่สำเร็จ (บน Vercel/serverless ไม่มีไฟล์ถาวร):', (e as Error).message)
  }

  // ส่งอีเมลแจ้งเตือนเมื่อมีออเดอร์ใหม่ (ถ้าตั้ง NUXT_RESEND_API_KEY และ NUXT_EMAIL_TO แล้ว)
  const config = useRuntimeConfig()
  const emailTo = config.emailTo as string
  if (emailTo && config.resendApiKey) {
    const budgetLabels: Record<string, string> = {
      'under-10k': 'ต่ำกว่า 10,000 บาท',
      '10k-50k': '10,000 - 50,000 บาท',
      '50k-100k': '50,000 - 100,000 บาท',
      'over-100k': 'มากกว่า 100,000 บาท'
    }
    const serviceLabels: Record<string, string> = {
      website: 'เว็บไซต์',
      webapp: 'เว็บแอปพลิเคชัน',
      both: 'ทั้งเว็บไซต์และเว็บแอป'
    }
    const budgetText = budgetLabels[newOrder.budget] || newOrder.budget
    const serviceText = serviceLabels[newOrder.serviceType] || newOrder.serviceType
    const html = `
      <h2>มีออเดอร์ใหม่จากเว็บ</h2>
      <p><strong>ชื่อ:</strong> ${escapeHtml(newOrder.customerName)}</p>
      <p><strong>อีเมล:</strong> ${escapeHtml(newOrder.email)}</p>
      <p><strong>โทร:</strong> ${escapeHtml(newOrder.phone)}</p>
      <p><strong>ประเภทบริการ:</strong> ${escapeHtml(serviceText)}</p>
      <p><strong>งบประมาณ:</strong> ${escapeHtml(budgetText)}</p>
      ${newOrder.deadline ? `<p><strong>กำหนดส่ง:</strong> ${escapeHtml(newOrder.deadline)}</p>` : ''}
      <p><strong>รายละเอียดโปรเจกต์:</strong><br>${escapeHtml(newOrder.projectDescription)}</p>
      ${newOrder.additionalNotes ? `<p><strong>หมายเหตุ:</strong><br>${escapeHtml(newOrder.additionalNotes)}</p>` : ''}
      <p><em>ส่งเมื่อ ${new Date(newOrder.createdAt).toLocaleString('th-TH')}</em></p>
      <p>Order ID: ${escapeHtml(newOrder.id)}</p>
      <hr>
      <p>ตอบกลับได้ที่: <a href="mailto:${escapeHtml(newOrder.email)}">${escapeHtml(newOrder.email)}</a></p>
    `
    const emailResult = await sendEmail({
      to: emailTo,
      subject: `[ออเดอร์ใหม่] ${newOrder.customerName} — ${serviceText}`,
      html,
      replyTo: newOrder.email
    })
    if (!emailResult.ok) {
      console.error('[orders] ส่งอีเมลไม่สำเร็จ:', emailResult.error)
      throw createError({
        statusCode: 502,
        message: 'บันทึกออเดอร์แล้ว แต่ส่งอีเมลแจ้งเตือนไม่สำเร็จ: ' + (emailResult.error || 'Unknown error')
      })
    }
  }

  return {
    success: true,
    order: newOrder
  }
})

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
