# J Double O

ระบบรับออเดอร์สำหรับบริการพัฒนาเว็บไซต์และเว็บแอปพลิเคชัน สร้างด้วย Nuxt 4 และ Nuxt UI 4

## คุณสมบัติ

- 🎨 **UI สวยงาม** - ใช้ Nuxt UI 4 สำหรับ UI ที่สวยงามและทันสมัย
- 📱 **Responsive Design** - รองรับทุกอุปกรณ์
- 📝 **ฟอร์มรับออเดอร์** - ระบบฟอร์มที่ครบถ้วนสำหรับรับออเดอร์
- 📊 **จัดการออเดอร์** - หน้าจัดการออเดอร์สำหรับดูและจัดการออเดอร์ทั้งหมด
- 🌙 **Dark Mode** - รองรับโหมดมืด/สว่าง
- ⚡ **Fast & Modern** - ใช้ Nuxt 4 สำหรับประสิทธิภาพสูงสุด

## หน้าเว็บไซต์

- **หน้าแรก** (`/`) - หน้าหลักพร้อมฟอร์มรับออเดอร์
- **บริการ** (`/services`) - ดูบริการทั้งหมด
- **ติดต่อ** (`/contact`) - ข้อมูลติดต่อและฟอร์มติดต่อ
- **จัดการออเดอร์** (`/admin/orders`) - ดูและจัดการออเดอร์ทั้งหมด

## Quick Start

### ติดตั้ง Dependencies

```bash
npm install
```

### รัน Development Server

```bash
npm run dev
```

เว็บไซต์จะรันที่ `http://localhost:3000`

### Build สำหรับ Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## โครงสร้างโปรเจกต์

```
j-double-o/
├── app/
│   ├── components/      # Vue Components
│   │   ├── OrderForm.vue
│   │   └── ...
│   ├── pages/          # Pages (File-based routing)
│   │   ├── index.vue
│   │   ├── services.vue
│   │   ├── contact.vue
│   │   └── admin/
│   │       └── orders.vue
│   ├── server/
│   │   └── api/        # API Routes
│   │       ├── contact.post.ts
│   │       ├── orders.get.ts
│   │       └── orders.post.ts
│   └── app.vue
├── data/               # ข้อมูลออเดอร์และติดต่อ (auto-generated: orders.json, contacts.json)
└── ...
```

## รายการเช็คก่อน Deploy (พร้อมขาย)

| รายการ | สถานะ | หมายเหตุ |
|--------|--------|----------|
| ฟอร์มสั่งซื้อ (Order) | ✅ พร้อม | บันทึกลง `data/orders.json` |
| ฟอร์มติดต่อ (Contact) | ✅ พร้อม | บันทึกลง `data/contacts.json` (มี API แล้ว) |
| หน้าราคา/ทำไมต้องเลือกเรา | ✅ พร้อม | หน้า services + หน้าแรก |
| พอร์ตโฟลิโอ + รูป | ✅ พร้อม | โปรเจกต์ครบ ใช้รูปในโฟลเดอร์ |
| SEO พื้นฐาน | ✅ มี | title/description ใน app.vue และ portfolio |
| **Deploy** | ⚠️ ตรวจ | โฮสต์แบบ serverless (Vercel ฯลฯ) จะไม่เขียนไฟล์ได้ — ต้องใช้ DB หรือส่งอีเมลแทน `data/*.json` |
| **ข้อมูลติดต่อบนเว็บ** | ⚠️ ตรวจ | แก้เบอร์/อีเมล/ที่อยู่จริงในหน้าติดต่อ |
| **ส่งอีเมลแจ้งเตือน** | ✅ พร้อม | ตั้งค่า Resend ตามด้านล่าง |

---

## ส่งอีเมลเมื่อมีคนส่งฟอร์ม

เมื่อมีคนส่ง **ฟอร์มติดต่อ** หรือ **ฟอร์มสั่งซื้อ** ระบบจะส่งอีเมลแจ้งไปยังอีเมลที่คุณตั้งไว้ (และ reply-to เป็นอีเมลลูกค้า เพื่อให้กดตอบกลับได้เลย)

### ขั้นตอนตั้งค่า

1. **ลงทะเบียน Resend** (ฟรี 100 ฉบับ/วัน): https://resend.com  
2. สร้าง **API Key** ใน Dashboard  
3. สร้างไฟล์ `.env` ที่ root โปรเจกต์ (คัดลอกจาก `.env.example`) แล้วกรอก:

   ```env
   NUXT_RESEND_API_KEY=re_xxxxxxxxxxxx
   NUXT_EMAIL_TO=your-email@example.com
   ```

4. รัน `npm run dev` ใหม่ — เมื่อมีคนส่งฟอร์ม คุณจะได้รับอีเมล

**หมายเหตุ:** ถ้าไม่ตั้ง `NUXT_RESEND_API_KEY` ระบบจะยังบันทึกข้อมูลลง `data/contacts.json` และ `data/orders.json` ตามเดิม แค่ไม่ส่งอีเมล (เหมาะกับตอน dev)

---

## API Endpoints

### POST `/api/contact`
บันทึกข้อความจากฟอร์มติดต่อ (หน้าแรก + หน้า contact)

**Request Body:** `name`, `email`, `phone`, `serviceType`, `subject`, `projectDetails`, `message`, `createdAt`

ข้อมูลบันทึกลง `data/contacts.json` และส่งอีเมลแจ้งไปยัง `NUXT_EMAIL_TO` (ถ้าตั้ง Resend แล้ว)

### POST `/api/orders`
สร้างออเดอร์ใหม่ (บันทึกลง `data/orders.json` และส่งอีเมลแจ้งไปยัง `NUXT_EMAIL_TO` ถ้าตั้ง Resend แล้ว)

**Request Body:**
```json
{
  "customerName": "ชื่อ-นามสกุล",
  "email": "email@example.com",
  "phone": "08X-XXX-XXXX",
  "serviceType": "website|webapp|both",
  "projectDescription": "รายละเอียดโปรเจกต์",
  "budget": "under-10k|10k-50k|50k-100k|over-100k",
  "deadline": "2025-12-31",
  "additionalNotes": "หมายเหตุเพิ่มเติม"
}
```

### GET `/api/orders`
ดึงรายการออเดอร์ทั้งหมด

**Response:**
```json
{
  "success": true,
  "orders": [...],
  "total": 10
}
```

## เทคโนโลยีที่ใช้

- **Nuxt 4** - Vue.js Framework
- **Nuxt UI 4** - UI Component Library
- **TypeScript** - Type Safety
- **Tailwind CSS 4** - Styling
- **Vue 3** - Frontend Framework

## License

MIT
