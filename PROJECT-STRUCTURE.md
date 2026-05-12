# 📁 โครงสร้างโปรเจกต์ทั้งหมด

## 🎯 ภาพรวมโปรเจกต์

**ชื่อโปรเจกต์:** J Double O - ระบบรับออเดอร์สำหรับบริการพัฒนาเว็บไซต์และเว็บแอปพลิเคชัน

**เทคโนโลยี:**
- **Framework:** Nuxt 4
- **UI Library:** Nuxt UI 4
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Icons:** Lucide Icons, Simple Icons

---

## 📂 โครงสร้างไฟล์และโฟลเดอร์

```
website-order-system/
├── app/                          # โฟลเดอร์หลักของแอปพลิเคชัน
│   ├── app.config.ts            # การตั้งค่าแอปพลิเคชัน
│   ├── app.vue                   # Root component หลัก
│   │
│   ├── assets/                   # ไฟล์ static assets
│   │   └── css/
│   │       └── main.css          # CSS หลัก
│   │
│   ├── components/               # Vue Components ที่ใช้ซ้ำได้
│   │   ├── AppLogo.vue          # Component Logo
│   │   ├── OrderForm.vue        # ฟอร์มรับออเดอร์
│   │   ├── ProjectDetail.vue   # Component แสดงรายละเอียดโปรเจกต์
│   │   └── TemplateMenu.vue    # เมนูเทมเพลต
│   │
│   ├── composables/              # Composable functions (Vue 3 Composition API)
│   │   └── useProjects.ts       # ข้อมูลและ logic ของโปรเจกต์ทั้งหมด
│   │
│   ├── pages/                    # หน้าเว็บไซต์ (File-based routing)
│   │   ├── index.vue            # หน้าหลัก (/)
│   │   ├── contact.vue          # หน้าติดต่อ (/contact)
│   │   ├── portfolio.vue        # หน้าผลงานทั้งหมด (/portfolio)
│   │   ├── services.vue         # หน้าบริการ (/services)
│   │   ├── portfolio/
│   │   │   └── [id].vue         # หน้ารายละเอียดโปรเจกต์ (/portfolio/:id)
│   │   └── admin/
│   │       └── orders.vue       # หน้าจัดการออเดอร์ (/admin/orders)
│   │
│   └── server/                   # Server-side code
│       └── api/
│           ├── orders.get.ts    # API endpoint: GET /api/orders
│           └── orders.post.ts   # API endpoint: POST /api/orders
│
├── public/                       # ไฟล์ static ที่เข้าถึงได้โดยตรง
│   └── favicon.ico               # Favicon
│
├── .github/                      # GitHub configuration
│   └── workflows/
│       └── ci.yml                # CI/CD workflow
│
├── nuxt.config.ts                # การตั้งค่า Nuxt
├── package.json                  # Dependencies และ scripts
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
├── README.md                     # เอกสารโปรเจกต์
└── PROJECT-STRUCTURE.md          # เอกสารนี้
```

---

## 📄 รายละเอียดไฟล์สำคัญ

### 🎨 **app/app.vue**
- Root component หลักของแอปพลิเคชัน
- กำหนด layout และ structure หลัก
- ใช้ `<NuxtPage />` เพื่อแสดงหน้าเว็บไซต์

### 📄 **Pages (File-based Routing)**

#### 1. **index.vue** (`/`)
- หน้าหลักของเว็บไซต์
- แสดงโปรเจกต์เด่น (Featured Projects)
- มีฟอร์มรับออเดอร์
- มีส่วน "ทำไมต้องเลือกเรา"
- มีส่วนติดต่อ

#### 2. **portfolio.vue** (`/portfolio`)
- หน้าผลงานทั้งหมด
- แสดงโปรเจกต์เด่น
- มี filter ตามหมวดหมู่
- แสดงผลงานทั้งหมดในรูปแบบ grid
- แต่ละโปรเจกต์มีปุ่ม "ดูรายละเอียด" → `/portfolio/:id`

#### 3. **portfolio/[id].vue** (`/portfolio/:id`)
- หน้ารายละเอียดโปรเจกต์แต่ละโปรเจกต์
- Dynamic route ตาม project ID
- ใช้ `ProjectDetail` component เพื่อแสดงรายละเอียด
- มี loading state และ error handling

#### 4. **contact.vue** (`/contact`)
- หน้าติดต่อ
- มีฟอร์มติดต่อ
- แสดงข้อมูลติดต่อ

#### 5. **services.vue** (`/services`)
- หน้าบริการ
- แสดงบริการทั้งหมด

#### 6. **admin/orders.vue** (`/admin/orders`)
- หน้าจัดการออเดอร์
- แสดงออเดอร์ทั้งหมด
- สำหรับผู้ดูแลระบบ

---

### 🧩 **Components**

#### 1. **ProjectDetail.vue**
- Component แสดงรายละเอียดโปรเจกต์
- **Props:** `project: Project`
- **Features:**
  - Hero Image
  - Project Info (ลูกค้า, ปีที่ทำ, ระยะเวลา)
  - Description
  - **Custom Content** (ตาม project ID):
    - Project 1: E-Commerce พิเศษ (สี primary)
    - Project 2: Corporate Website พิเศษ (สีน้ำเงิน)
    - Project 5: Mobile Web App พิเศษ (สีเขียว)
  - Features List
  - Technologies
  - Gallery with Lightbox
- **Key:** `project-detail-${projectId}` เพื่อ force re-render

#### 2. **OrderForm.vue**
- ฟอร์มรับออเดอร์
- ใช้ในหน้าแรกและหน้าติดต่อ

#### 3. **AppLogo.vue**
- Component Logo
- ใช้ใน navigation

#### 4. **TemplateMenu.vue**
- เมนูเทมเพลต
- ใช้ใน navigation

---

### 🔧 **Composables**

#### **useProjects.ts**
- **Export:** `Project` interface และ `useProjects()` function
- **Data:** ข้อมูลโปรเจกต์ทั้งหมด (31 โปรเจกต์)
- **Interface:**
  ```typescript
  interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    category: string
    image: string
    gallery?: string[]
    technologies: string[]
    features?: string[]
    link?: string
    featured: boolean
    client?: string
    year?: string
    duration?: string
    customContent?: {
      type: 'html' | 'component' | 'video' | 'timeline' | 'testimonials'
      data?: any
      html?: string
    }
  }
  ```
- **Usage:** `const { projects } = useProjects()`
- **Return:** `{ projects: Ref<Project[]> }`

---

### 🖥️ **Server API**

#### 1. **orders.get.ts** (`GET /api/orders`)
- ดึงข้อมูลออเดอร์ทั้งหมด
- สำหรับหน้า admin/orders

#### 2. **orders.post.ts** (`POST /api/orders`)
- สร้างออเดอร์ใหม่
- รับข้อมูลจากฟอร์ม OrderForm

---

## 🔄 Flow การทำงาน

### 1. **การนำทางไปหน้ารายละเอียดโปรเจกต์**

```
User กดปุ่ม "ดูรายละเอียด"
    ↓
NuxtLink navigate to `/portfolio/${project.id}`
    ↓
portfolio/[id].vue ถูกโหลด
    ↓
findProject() หา project จาก route.params.id
    ↓
ส่ง project ไปยัง ProjectDetail component
    ↓
ProjectDetail แสดงรายละเอียด + Custom Content (ถ้ามี)
```

### 2. **Custom Content Logic**

```typescript
// ใน ProjectDetail.vue
const projectId = computed(() => String(props.project.id || ''))
const isProject1 = computed(() => projectId.value === '1')
const isProject2 = computed(() => projectId.value === '2')
const isProject5 = computed(() => projectId.value === '5')

// ใน Template
<div v-if="isProject1">Custom Content for Project 1</div>
<div v-if="isProject2">Custom Content for Project 2</div>
<div v-if="isProject5">Custom Content for Project 5</div>
```

---

## 🎨 Custom Content สำหรับแต่ละโปรเจกต์

### **Project 1 (E-Commerce Platform)**
- **ID:** `'1'`
- **URL:** `/portfolio/1`
- **Custom Content:**
  - สี: Primary
  - Title: 🛒 ระบบ E-Commerce พิเศษ
  - 3 Cards: ตะกร้าสินค้า, ชำระเงิน, รายงาน

### **Project 2 (Corporate Website)**
- **ID:** `'2'`
- **URL:** `/portfolio/2`
- **Custom Content:**
  - สี: Blue/Indigo
  - Title: 🏢 Corporate Website พิเศษ
  - 2 Items: SEO Optimized, CMS System

### **Project 5 (Mobile Web App)**
- **ID:** `'5'`
- **URL:** `/portfolio/5`
- **Custom Content:**
  - สี: Green/Emerald
  - Title: 📱 Mobile Web App พิเศษ
  - 2 Cards: Responsive Design, PWA Support

---

## 🛠️ Scripts

```json
{
  "dev": "nuxt dev",           // รัน development server
  "build": "nuxt build",       // Build สำหรับ production
  "preview": "nuxt preview",   // Preview production build
  "lint": "eslint .",          // ตรวจสอบ code quality
  "typecheck": "nuxt typecheck" // ตรวจสอบ TypeScript
}
```

---

## 📦 Dependencies

### **Production:**
- `nuxt`: ^4.2.2 - Nuxt framework
- `@nuxt/ui`: ^4.4.0 - UI component library
- `tailwindcss`: ^4.1.18 - CSS framework
- `@iconify-json/lucide`: ^1.2.86 - Lucide icons
- `@iconify-json/simple-icons`: ^1.2.67 - Simple Icons

### **Development:**
- `typescript`: ^5.9.3 - TypeScript
- `@nuxt/eslint`: ^1.12.1 - ESLint configuration
- `eslint`: ^9.39.2 - Linter
- `vue-tsc`: ^3.2.2 - Vue TypeScript checker

---

## 🔑 Key Features

### 1. **File-based Routing**
- Nuxt ใช้โครงสร้างไฟล์ใน `pages/` เพื่อสร้าง routes อัตโนมัติ
- `portfolio/[id].vue` → `/portfolio/:id` (dynamic route)

### 2. **Auto-imports**
- Nuxt auto-imports components, composables, และ utilities
- ไม่ต้อง import `ref`, `computed`, `watch` จาก 'vue'
- ไม่ต้อง import `useRoute`, `useRouter` จาก Nuxt

### 3. **Composables Pattern**
- ใช้ `useProjects()` เพื่อจัดการข้อมูลโปรเจกต์
- Reactive data ด้วย Vue 3 Composition API

### 4. **Component Reusability**
- `ProjectDetail` component ใช้ซ้ำได้
- รับ props `project` และแสดงรายละเอียด

### 5. **Custom Content per Project**
- ใช้ computed properties เพื่อตรวจสอบ project ID
- แสดง custom content ตามแต่ละโปรเจกต์

---

## 🚀 การเริ่มต้นใช้งาน

### 1. **ติดตั้ง Dependencies**
```bash
npm install
```

### 2. **รัน Development Server**
```bash
npm run dev
```

### 3. **เปิดเบราว์เซอร์**
- ไปที่ `http://localhost:3000`

### 4. **ทดสอบ**
- หน้าแรก: `http://localhost:3000`
- ผลงานทั้งหมด: `http://localhost:3000/portfolio`
- รายละเอียดโปรเจกต์: `http://localhost:3000/portfolio/1`

---

## 📝 หมายเหตุ

- **Type Safety:** ใช้ TypeScript สำหรับ type safety
- **Code Quality:** ใช้ ESLint สำหรับตรวจสอบ code quality
- **Responsive:** รองรับทุกขนาดหน้าจอ
- **Dark Mode:** รองรับ dark mode ผ่าน Nuxt UI
- **Performance:** ใช้ Nuxt 4 สำหรับประสิทธิภาพสูงสุด

---

## 🔍 การ Debug

### Console Logs
- `[Portfolio Detail] Project found:` - เมื่อหา project สำเร็จ
- `[ProjectDetail] Project loaded:` - เมื่อ project โหลดใน component

### Key Binding
- `project-${project.id}` - Key ใน portfolio/[id].vue
- `project-detail-${projectId}` - Key ใน ProjectDetail.vue

---

## 📚 เอกสารเพิ่มเติม

- `README.md` - เอกสารโปรเจกต์หลัก
- `PROJECT-DETAIL-PAGES.md` - เอกสารหน้าแสดงรายละเอียดโปรเจกต์
- `TEST-RESULTS.md` - คู่มือการทดสอบ
