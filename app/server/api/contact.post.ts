/// <reference types="node" />
import { writeFile, readFile, mkdir } from 'fs/promises'
import { join } from 'path'

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  serviceType: string
  subject?: string
  projectDetails?: string
  message?: string
  createdAt: string
}

const CONTACTS_FILE = join(process.cwd(), 'data', 'contacts.json')

async function ensureDataDirectory() {
  const dataDir = join(process.cwd(), 'data')
  try {
    await mkdir(dataDir, { recursive: true })
  } catch (error: unknown) {
    const err = error as { code?: string }
    if (err.code !== 'EEXIST') throw error
  }
}

async function readContacts(): Promise<Contact[]> {
  try {
    await ensureDataDirectory()
    const data = await readFile(CONTACTS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error: unknown) {
    const err = error as { code?: string }
    if (err.code === 'ENOENT') return []
    throw error
  }
}

async function writeContacts(contacts: Contact[]) {
  await ensureDataDirectory()
  await writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8')
}

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, message: 'Method not allowed' })
  }

  const body = await readBody(event)

  if (!body.name || !body.email) {
    throw createError({
      statusCode: 400,
      message: 'กรุณากรอกชื่อและอีเมล'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'รูปแบบอีเมลไม่ถูกต้อง'
    })
  }

  let contacts: Contact[] = []
  try {
    contacts = await readContacts()
  } catch {
    contacts = []
  }

  const newContact: Contact = {
    id: `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    name: body.name || '',
    email: body.email || '',
    phone: body.phone || '',
    serviceType: body.serviceType || '',
    subject: body.subject || undefined,
    projectDetails: body.projectDetails || undefined,
    message: body.message || undefined,
    createdAt: body.createdAt || new Date().toISOString()
  }

  contacts.push(newContact)
  try {
    await writeContacts(contacts)
  } catch (e) {
    console.warn('[contact] บันทึกไฟล์ไม่สำเร็จ (บน Vercel/serverless ไม่มีไฟล์ถาวร):', (e as Error).message)
  }

  // ส่งอีเมลแจ้งเตือนไปยังเจ้าของเว็บ (ถ้าตั้ง NUXT_RESEND_API_KEY และ NUXT_EMAIL_TO แล้ว)
  const config = useRuntimeConfig()
  const emailTo = config.emailTo as string
  if (emailTo && config.resendApiKey) {
    const serviceLabels: Record<string, string> = {
      'website': 'เว็บไซต์',
      'wordpress': 'WordPress',
      'webapp': 'เว็บแอปพลิเคชัน',
      'ecommerce': 'ระบบ E-Commerce',
      'video-photo-editing': 'ตัดต่อวิดีโอและรูปภาพ',
      'video-editing': 'ตัดต่อวิดีโอ',
      'photo-editing': 'ตัดต่อรูปภาพ',
      'motion-graphics': 'Motion Graphics',
      'graphic-design': 'ออกแบบกราฟิก',
      'data-management': 'ระบบจัดการข้อมูล',
      'other': 'อื่นๆ'
    }
    const serviceText = serviceLabels[newContact.serviceType] || newContact.serviceType
    const html = `
      <h2>มีข้อความติดต่อใหม่จากเว็บ</h2>
      <p><strong>ชื่อ:</strong> ${escapeHtml(newContact.name)}</p>
      <p><strong>อีเมล:</strong> ${escapeHtml(newContact.email)}</p>
      <p><strong>โทร:</strong> ${escapeHtml(newContact.phone)}</p>
      <p><strong>ประเภทบริการ:</strong> ${escapeHtml(serviceText)}</p>
      ${newContact.subject ? `<p><strong>หัวข้อ:</strong> ${escapeHtml(newContact.subject)}</p>` : ''}
      ${newContact.projectDetails ? `<p><strong>รายละเอียดโปรเจกต์:</strong><br>${escapeHtml(newContact.projectDetails)}</p>` : ''}
      ${newContact.message ? `<p><strong>ข้อความ:</strong><br>${escapeHtml(newContact.message)}</p>` : ''}
      <p><em>ส่งเมื่อ ${new Date(newContact.createdAt).toLocaleString('th-TH')}</em></p>
      <hr>
      <p>ตอบกลับได้ที่: <a href="mailto:${escapeHtml(newContact.email)}">${escapeHtml(newContact.email)}</a></p>
    `
    const emailResult = await sendEmail({
      to: emailTo,
      subject: `[ติดต่อเว็บ] ${newContact.subject || newContact.name} — ${serviceText}`,
      html,
      replyTo: newContact.email
    })
    if (!emailResult.ok) {
      console.error('[contact] ส่งอีเมลไม่สำเร็จ:', emailResult.error)
      throw createError({
        statusCode: 502,
        message: 'บันทึกข้อความแล้ว แต่ส่งอีเมลแจ้งเตือนไม่สำเร็จ: ' + (emailResult.error || 'Unknown error')
      })
    }
  }

  return { success: true }
})

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
