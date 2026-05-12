# Deploy โปรเจกต์นี้บน Vercel (โฮสต์ฟรี)

โปรเจกต์นี้รองรับการ deploy บน [Vercel](https://vercel.com) แล้ว

---

## สิ่งที่ต้องมี

1. บัญชี [Vercel](https://vercel.com) (สมัครฟรี)
2. โค้ดอยู่ใน **GitHub / GitLab / Bitbucket** (ถ้ายังไม่มี ให้ push โปรเจกต์ขึ้นไปก่อน)
3. ค่า **Environment variables** สำหรับส่งอีเมล (Resend) ตามด้านล่าง

---

## ขั้นตอน Deploy

### 1. Push โปรเจกต์ขึ้น Git (ถ้ายังไม่ได้ทำ)

```bash
git init
git add .
git commit -m "Initial commit"
# สร้าง repo บน GitHub แล้ว
git remote add origin https://github.com/username/website-order-system.git
git push -u origin main
```

### 2. เชื่อมโปรเจกต์กับ Vercel

1. เข้า [vercel.com](https://vercel.com) แล้วล็อกอิน
2. กด **Add New…** → **Project**
3. เลือก **Import** จาก GitHub/GitLab/Bitbucket แล้วเลือก repo ของโปรเจกต์นี้
4. ตั้งค่าโปรเจกต์:
   - **Framework Preset**: Vercel จะ detect เป็น Nuxt อัตโนมัติ
   - **Root Directory**: ว่างไว้ (ใช้ root ของ repo)
   - **Build Command**: `nuxt build` (ค่าเริ่มต้น)
   - **Output Directory**: ใช้ค่าเริ่มต้นของ Nuxt

### 3. ตั้งค่า Environment Variables

ก่อนกด Deploy ให้เพิ่มตัวแปรสภาพแวดล้อมใน Vercel:

ไปที่ **Settings** → **Environment Variables** ของโปรเจกต์ แล้วเพิ่ม:

| Name | Value | หมายเหตุ |
|------|--------|----------|
| `NUXT_RESEND_API_KEY` | `re_xxxx...` | API Key จาก [Resend](https://resend.com) |
| `NUXT_EMAIL_TO` | `your@gmail.com` | อีเมลที่ต้องการรับแจ้ง (ฟอร์มติดต่อ + ออเดอร์) |
| `NUXT_EMAIL_FROM` | `noreply@yourdomain.com` | **ต้องใช้โดเมนที่ verify ใน Resend** (ถ้าใช้ `onboarding@resend.dev` จะส่งไป Gmail จริงไม่ได้) |

- ใส่ค่าจริง ไม่ใส่เครื่องหมายคำพูด
- เลือก **Production**, **Preview**, **Development** ตามที่ต้องการ (อย่างน้อยเลือก Production)

### 4. Deploy

กด **Deploy** แล้วรอ build จนเสร็จ จะได้ URL เช่น `https://your-project.vercel.app`

---

## ข้อควรรู้เมื่อใช้ Vercel

### การเก็บข้อมูล (contacts / orders)

- บน Vercel เป็น **serverless** ไม่มีไฟล์ระบบถาวร
- ข้อมูลที่เคยบันทึกใน `data/contacts.json` และ `data/orders.json` **จะไม่ถูกเก็บบน Vercel** (เขียนไฟล์ไม่ได้)
- **การส่งอีเมลยังทำงานปกติ** — ฟอร์มติดต่อและฟอร์มสั่งซื้อจะส่งเมลไปที่ `NUXT_EMAIL_TO` ตามที่ตั้งไว้
- ถ้าต้องการเก็บรายการ contact/order ในระบบ ต้องต่อกับฐานข้อมูลหรือ storage อื่น (เช่น Vercel KV, Vercel Postgres, Supabase) ในขั้นตอนถัดไป

### อีเมล (Resend)

- ต้อง **verify โดเมน** ใน Resend แล้วใช้ `NUXT_EMAIL_FROM` เป็นอีเมลบนโดเมนนั้น ถึงจะส่งไป Gmail / อีเมลจริงได้
- ถ้าใช้ `onboarding@resend.dev` จะส่งไปอีเมลนอก Resend ไม่ได้

### โดเมนของตัวเอง (ถ้ามี)

- หลัง deploy แล้ว: **Settings** → **Domains** → เพิ่มโดเมนแล้วตามขั้นตอนของ Vercel (เช่น แก้ DNS)

---

## สรุปสั้นๆ

1. Push โค้ดขึ้น Git
2. Import โปรเจกต์ใน Vercel จาก repo
3. ตั้ง `NUXT_RESEND_API_KEY`, `NUXT_EMAIL_TO`, `NUXT_EMAIL_FROM` (โดเมนที่ verify แล้ว)
4. กด Deploy

หลัง deploy แล้ว ฟอร์มบนเว็บจะส่งอีเมลไปที่อีเมลที่ตั้งไว้ได้ตามปกติ
