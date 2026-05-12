import { Resend } from 'resend'

export interface SendEmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

/**
 * ส่งอีเมลผ่าน Resend (ใช้ได้ใน server เท่านั้น)
 * ต้องตั้ง NUXT_RESEND_API_KEY และ NUXT_EMAIL_TO ใน .env
 * ถ้าไม่มี API key จะไม่ส่งอีเมล (ไม่ error) เพื่อให้ dev ทำงานได้
 */
export async function sendEmail(options: SendEmailOptions): Promise<{ ok: boolean, error?: string }> {
  const config = useRuntimeConfig()
  const apiKey = config.resendApiKey as string
  const from = (config.emailFrom as string) || 'onboarding@resend.dev'

  const emailTo = config.emailTo as string
  if (!apiKey || !apiKey.trim()) {
    console.warn('[sendEmail] NUXT_RESEND_API_KEY ไม่ได้ตั้งค่า — ข้ามการส่งอีเมล')
    return { ok: false, error: 'RESEND_API_KEY not set' }
  }
  if (!emailTo || !emailTo.trim()) {
    console.warn('[sendEmail] NUXT_EMAIL_TO ไม่ได้ตั้งค่า — ข้ามการส่งอีเมล')
    return { ok: false, error: 'EMAIL_TO not set' }
  }

  try {
    const resend = new Resend(apiKey)
    const to = options.to || emailTo
    const { error } = await resend.emails.send({
      from,
      to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo
    })
    if (error) {
      console.error('[sendEmail] Resend error:', error)
      return { ok: false, error: error.message }
    }
    console.log('[sendEmail] ส่งสำเร็จ →', to)
    return { ok: true }
  } catch (e) {
    const err = e as Error
    console.error('[sendEmail] Exception:', err)
    return { ok: false, error: err.message }
  }
}
