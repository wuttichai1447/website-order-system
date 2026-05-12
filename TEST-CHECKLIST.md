# 🧪 รายการทดสอบหน้าแสดงรายละเอียดโปรเจกต์

## ✅ การทดสอบที่ควรทำ

### 1. **ทดสอบการนำทาง (Navigation)**

#### 1.1 ทดสอบจากหน้าแรก (`/`)
- [ ] ไปที่ `http://localhost:3000`
- [ ] เลื่อนลงไปส่วน "ผลงานเด่น"
- [ ] กดปุ่ม "ดูรายละเอียด" บนโปรเจกต์ใดๆ
- [ ] **ตรวจสอบ:** URL เปลี่ยนเป็น `/portfolio/1`, `/portfolio/2`, etc.
- [ ] **ตรวจสอบ:** หน้าแสดงรายละเอียดโปรเจกต์ที่เลือก

#### 1.2 ทดสอบจากหน้าผลงาน (`/portfolio`)
- [ ] ไปที่ `http://localhost:3000/portfolio`
- [ ] กดปุ่ม "ดูรายละเอียด" ในส่วน "ผลงานเด่น"
- [ ] **ตรวจสอบ:** URL เปลี่ยนและแสดงหน้าใหม่
- [ ] กดปุ่ม "ดูรายละเอียด" ในส่วน "ผลงานทั้งหมด"
- [ ] **ตรวจสอบ:** URL เปลี่ยนและแสดงหน้าใหม่

---

### 2. **ทดสอบหน้าแสดงรายละเอียด (`/portfolio/[id]`)**

#### 2.1 ทดสอบ Project 1 (E-Commerce Platform)
- [ ] ไปที่ `http://localhost:3000/portfolio/1`
- [ ] **ตรวจสอบ:** แสดง Hero Image
- [ ] **ตรวจสอบ:** แสดงชื่อโปรเจกต์ "E-Commerce Platform"
- [ ] **ตรวจสอบ:** แสดงหมวดหมู่ "เว็บแอปพลิเคชัน"
- [ ] **ตรวจสอบ:** แสดงข้อมูลโปรเจกต์ (ลูกค้า, ปี, ระยะเวลา)
- [ ] **ตรวจสอบ:** แสดง Description
- [ ] **ตรวจสอบ:** แสดง Custom Content สี primary (🛒 ระบบ E-Commerce พิเศษ)
- [ ] **ตรวจสอบ:** แสดง Features (6 รายการ)
- [ ] **ตรวจสอบ:** แสดง Technologies (Nuxt.js, Vue.js, TypeScript, Tailwind CSS)
- [ ] **ตรวจสอบ:** แสดง Gallery (3 ภาพ)
- [ ] **ตรวจสอบ:** Title ใน browser tab เป็น "E-Commerce Platform - ผลงานของเรา"

#### 2.2 ทดสอบ Project 2 (Corporate Website)
- [ ] ไปที่ `http://localhost:3000/portfolio/2`
- [ ] **ตรวจสอบ:** แสดง Hero Image
- [ ] **ตรวจสอบ:** แสดงชื่อโปรเจกต์ "Corporate Website"
- [ ] **ตรวจสอบ:** แสดง Custom Content สีน้ำเงิน (🏢 Corporate Website พิเศษ)
- [ ] **ตรวจสอบ:** แสดง Features
- [ ] **ตรวจสอบ:** แสดง Technologies
- [ ] **ตรวจสอบ:** แสดง Gallery (ถ้ามี)
- [ ] **ตรวจสอบ:** Title ใน browser tab เป็น "Corporate Website - ผลงานของเรา"

#### 2.3 ทดสอบ Project 5 (Mobile Web App)
- [ ] ไปที่ `http://localhost:3000/portfolio/5`
- [ ] **ตรวจสอบ:** แสดง Hero Image
- [ ] **ตรวจสอบ:** แสดงชื่อโปรเจกต์ "Mobile Web App"
- [ ] **ตรวจสอบ:** แสดง Custom Content สีเขียว (📱 Mobile Web App พิเศษ)
- [ ] **ตรวจสอบ:** แสดง Features
- [ ] **ตรวจสอบ:** แสดง Technologies
- [ ] **ตรวจสอบ:** แสดง Gallery (ถ้ามี)
- [ ] **ตรวจสอบ:** Title ใน browser tab เป็น "Mobile Web App - ผลงานของเรา"

#### 2.4 ทดสอบโปรเจกต์อื่นๆ (ไม่มี Custom Content)
- [ ] ไปที่ `http://localhost:3000/portfolio/3`
- [ ] **ตรวจสอบ:** แสดงรายละเอียดโปรเจกต์
- [ ] **ตรวจสอบ:** ไม่มี Custom Content แสดง
- [ ] **ตรวจสอบ:** แสดง Features, Technologies, Gallery (ถ้ามี)

---

### 3. **ทดสอบ States**

#### 3.1 Loading State
- [ ] ไปที่ `/portfolio/1` โดยตรง
- [ ] **ตรวจสอบ:** แสดง Loading spinner ชั่วครู่ (ถ้ามี)

#### 3.2 Not Found State
- [ ] ไปที่ `http://localhost:3000/portfolio/999` (ID ที่ไม่มี)
- [ ] **ตรวจสอบ:** แสดงข้อความ "ไม่พบโปรเจกต์"
- [ ] **ตรวจสอบ:** แสดงปุ่ม "กลับไปผลงานทั้งหมด"
- [ ] กดปุ่ม "กลับไปผลงานทั้งหมด"
- [ ] **ตรวจสอบ:** กลับไปที่ `/portfolio`

---

### 4. **ทดสอบ Navigation**

#### 4.1 Back Button
- [ ] ไปที่ `/portfolio/1`
- [ ] กดปุ่ม "กลับไปผลงานทั้งหมด" (ด้านบน)
- [ ] **ตรวจสอบ:** กลับไปที่ `/portfolio`
- [ ] ไปที่ `/portfolio/1` อีกครั้ง
- [ ] กดปุ่ม "กลับไปผลงานทั้งหมด" (ด้านล่าง)
- [ ] **ตรวจสอบ:** กลับไปที่ `/portfolio`

#### 4.2 Route Changes
- [ ] ไปที่ `/portfolio/1`
- [ ] เปลี่ยน URL เป็น `/portfolio/2` โดยตรง
- [ ] **ตรวจสอบ:** หน้าแสดง Project 2
- [ ] **ตรวจสอบ:** Custom Content เปลี่ยนเป็นสีน้ำเงิน

---

### 5. **ทดสอบ Gallery Lightbox**

#### 5.1 เปิด Lightbox
- [ ] ไปที่ `/portfolio/1`
- [ ] คลิกที่ภาพใน Gallery
- [ ] **ตรวจสอบ:** เปิด Lightbox แสดงภาพขนาดใหญ่
- [ ] **ตรวจสอบ:** มีปุ่มปิด (X)

#### 5.2 Navigation ใน Lightbox
- [ ] เปิด Lightbox
- [ ] กดปุ่มลูกศรขวา (Next)
- [ ] **ตรวจสอบ:** แสดงภาพถัดไป
- [ ] กดปุ่มลูกศรซ้าย (Previous)
- [ ] **ตรวจสอบ:** แสดงภาพก่อนหน้า
- [ ] กดปุ่ม X หรือ Escape
- [ ] **ตรวจสอบ:** ปิด Lightbox

#### 5.3 Keyboard Navigation
- [ ] เปิด Lightbox
- [ ] กด Arrow Right
- [ ] **ตรวจสอบ:** แสดงภาพถัดไป
- [ ] กด Arrow Left
- [ ] **ตรวจสอบ:** แสดงภาพก่อนหน้า
- [ ] กด Escape
- [ ] **ตรวจสอบ:** ปิด Lightbox

---

### 6. **ทดสอบ Responsive Design**

#### 6.1 Mobile View
- [ ] เปิด Developer Tools (F12)
- [ ] เปลี่ยนเป็น Mobile View (375px)
- [ ] ไปที่ `/portfolio/1`
- [ ] **ตรวจสอบ:** Layout แสดงถูกต้อง
- [ ] **ตรวจสอบ:** Gallery แสดงเป็น 2 คอลัมน์
- [ ] **ตรวจสอบ:** Project Info แสดงเป็น 1 คอลัมน์

#### 6.2 Tablet View
- [ ] เปลี่ยนเป็น Tablet View (768px)
- [ ] **ตรวจสอบ:** Layout แสดงถูกต้อง
- [ ] **ตรวจสอบ:** Gallery แสดงเป็น 3 คอลัมน์
- [ ] **ตรวจสอบ:** Project Info แสดงเป็น 3 คอลัมน์

#### 6.3 Desktop View
- [ ] เปลี่ยนเป็น Desktop View (1024px+)
- [ ] **ตรวจสอบ:** Layout แสดงถูกต้อง
- [ ] **ตรวจสอบ:** Gallery แสดงเป็น 3 คอลัมน์
- [ ] **ตรวจสอบ:** Project Info แสดงเป็น 3 คอลัมน์

---

### 7. **ทดสอบ Console Logs (Optional)**

#### 7.1 เปิด Console
- [ ] เปิด Developer Tools (F12)
- [ ] ไปที่ Console tab
- [ ] ไปที่ `/portfolio/1`
- [ ] **ตรวจสอบ:** เห็น log `[ProjectDetail] Component created with project:`
- [ ] **ตรวจสอบ:** เห็น log `[ProjectDetail] Project loaded:`

---

## ✅ Checklist สรุป

- [ ] การนำทางจากหน้าแรกทำงาน
- [ ] การนำทางจากหน้าผลงานทำงาน
- [ ] หน้าแสดงรายละเอียดแสดงแค่โปรเจกต์เดียว
- [ ] Custom Content แสดงถูกต้องตามแต่ละโปรเจกต์
- [ ] Loading State ทำงาน
- [ ] Not Found State ทำงาน
- [ ] Back Button ทำงาน
- [ ] Gallery Lightbox ทำงาน
- [ ] Keyboard Navigation ทำงาน
- [ ] Responsive Design ทำงาน
- [ ] Page Title เปลี่ยนตามโปรเจกต์
- [ ] ไม่มี Debug Info panels แสดง

---

## 🐛 ปัญหาที่อาจพบ

### ปัญหา: หน้าไม่แสดง
**วิธีแก้:**
- ตรวจสอบว่า development server ทำงาน (`npm run dev`)
- ตรวจสอบ Console สำหรับ errors
- ตรวจสอบว่าไฟล์ `portfolio/[id].vue` มีอยู่

### ปัญหา: Custom Content ไม่แสดง
**วิธีแก้:**
- ตรวจสอบ Console log `[ProjectDetail] Project loaded:`
- ตรวจสอบว่า `isProject1`, `isProject2`, `isProject5` เป็น `true`
- ตรวจสอบว่า project.id เป็น string '1', '2', '5'

### ปัญหา: Navigation ไม่ทำงาน
**วิธีแก้:**
- ตรวจสอบว่าใช้ `navigateTo()` ถูกต้อง
- ตรวจสอบ Console สำหรับ errors
- ตรวจสอบว่า route parameter `id` ถูกต้อง

---

## 📝 หมายเหตุ

- ทดสอบในเบราว์เซอร์: Chrome, Firefox, Edge
- ทดสอบในหลายขนาดหน้าจอ
- ทดสอบทั้ง Light Mode และ Dark Mode
