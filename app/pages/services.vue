<template>
  <div>
    <UPageHero
      title="บริการของเรา"
      description="บริการครบวงจรสำหรับการพัฒนาเว็บไซต์ เว็บแอปพลิเคชัน การตัดต่อวิดีโอและรูปภาพ"
    />

    <!-- ทำไมต้องใช้เรา -->
    <UPageSection
      id="why-us"
      title="ทำไมต้องใช้เรา"
      description="เราเน้นคุณภาพ ส่งงานตรงเวลา และดูแลหลังขาย เพื่อให้ธุรกิจคุณไปได้ไกล"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5 border border-primary/10 dark:border-primary/20">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <UIcon name="i-lucide-award" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-bold mb-1">คุณภาพสูง</h3>
          <p class="text-sm text-muted">ใช้เทคโนโลยีล่าสุด มาตรฐานการพัฒนาที่ดี มีผลงานจริงให้ดู</p>
        </div>
        <div class="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5 border border-primary/10 dark:border-primary/20">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <UIcon name="i-lucide-clock" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-bold mb-1">ส่งงานตรงเวลา</h3>
          <p class="text-sm text-muted">มุ่งมั่นส่งงานตามกำหนดและคุณภาพที่ตกลงกัน</p>
        </div>
        <div class="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5 border border-primary/10 dark:border-primary/20">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <UIcon name="i-lucide-headphones" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-bold mb-1">บริการหลังขาย</h3>
          <p class="text-sm text-muted">สนับสนุนและบำรุงรักษาหลังส่งมอบ ไม่ทิ้งงาน</p>
        </div>
        <div class="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5 border border-primary/10 dark:border-primary/20">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <UIcon name="i-lucide-badge-check" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-bold mb-1">ราคาชัดเจน</h3>
          <p class="text-sm text-muted">เสนอราคาตาม scope งาน ไม่มีค่าใช้จ่ายแอบแฝง</p>
        </div>
      </div>
    </UPageSection>

    <!-- แพ็กเกจและราคา -->
    <UPageSection
      id="pricing"
      title="แพ็กเกจและราคา"
      description="ราคาโดยประมาณ ขึ้นกับความซับซ้อนของงาน — ขอใบเสนอราคาได้ฟรี"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <UCard class="text-center border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors">
          <div class="p-6">
            <div class="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <UIcon name="i-lucide-globe" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-1">เว็บไซต์ / Landing</h3>
            <p class="text-sm text-muted mb-4">หน้าเดียวหรือหลายหน้า โปรโมทธุรกิจ</p>
            <p class="text-2xl font-bold text-primary mb-1">เริ่มต้นที่ 5,000 บาท</p>
            <p class="text-xs text-muted mb-6">ราคาตามจำนวนหน้าและฟีเจอร์</p>
            <UButton to="/#order" block>ขอใบเสนอราคา</UButton>
          </div>
        </UCard>
        <UCard class="text-center border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors">
          <div class="p-6">
            <div class="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <UIcon name="i-lucide-layout" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-1">WordPress</h3>
            <p class="text-sm text-muted mb-4">เว็บบริษัท ข่าว บล็อก โปรโมท ใช้งานง่าย แก้ไขเนื้อหาเองได้</p>
            <p class="text-2xl font-bold text-primary mb-1">เริ่มต้นที่ 3,500 บาท</p>
            <p class="text-xs text-muted mb-6">ราคาตามธีมและฟีเจอร์</p>
            <UButton to="/#order" block>ขอใบเสนอราคา</UButton>
          </div>
        </UCard>
        <UCard class="text-center border-2 border-primary relative overflow-hidden">
          <div class="absolute top-3 right-3">
            <UBadge color="primary" size="sm">แนะนำ</UBadge>
          </div>
          <div class="p-6">
            <div class="w-14 h-14 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <UIcon name="i-lucide-smartphone" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-1">เว็บแอป / ระบบงาน</h3>
            <p class="text-sm text-muted mb-4">ระบบจอง แจ้งซ่อม CRM ฯลฯ</p>
            <p class="text-2xl font-bold text-primary mb-1">เริ่มต้นที่ 25,000 บาท</p>
            <p class="text-xs text-muted mb-6">ราคาตามความซับซ้อนและจำนวนฟีเจอร์</p>
            <UButton to="/#order" block>ขอใบเสนอราคา</UButton>
          </div>
        </UCard>
        <UCard class="text-center border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors">
          <div class="p-6">
            <div class="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <UIcon name="i-lucide-video" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-1">วิดีโอ / รูปภาพ</h3>
            <p class="text-sm text-muted mb-4">ตัดต่อวิดีโอ Retouch รูป Motion</p>
            <p class="text-2xl font-bold text-primary mb-1">เริ่มต้นที่ 1,000 บาท</p>
            <p class="text-xs text-muted mb-6">ราคาตามความยาวและความซับซ้อน</p>
            <UButton to="/#contact" block variant="outline">ติดต่อสอบถาม</UButton>
          </div>
        </UCard>
      </div>
      <p class="text-center text-sm text-muted mt-6">
        ทุกโปรเจกต์รับประกันงานและแก้ไขให้จนพอใจ — ต้องการแพ็กเกจเฉพาะหรือบำรุงรักษารายเดือน
        <NuxtLink to="/contact" class="text-primary font-medium hover:underline">ติดต่อเรา</NuxtLink>
      </p>
    </UPageSection>

    <UPageSection title="รายการบริการ" description="เลือกบริการที่ตรงกับความต้องการของคุณ">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <UIcon name="i-lucide-globe" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold">เว็บไซต์</h3>
                <p class="text-sm text-muted">Website Development</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-muted">
              บริการออกแบบและพัฒนาเว็บไซต์ที่สวยงาม รองรับทุกอุปกรณ์ และ SEO-friendly
            </p>

            <div>
              <h4 class="font-semibold mb-2">คุณสมบัติ:</h4>
              <ul class="space-y-1 text-sm text-muted">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Responsive Design (รองรับทุกอุปกรณ์)
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  SEO Optimization
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Fast Loading Speed
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Modern UI/UX Design
                </li>
              </ul>
            </div>

            <UButton to="/#order" block>
              สั่งซื้อบริการ
            </UButton>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <UIcon name="i-lucide-smartphone" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold">เว็บแอปพลิเคชัน</h3>
                <p class="text-sm text-muted">Web Application</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-muted">
              พัฒนาเว็บแอปพลิเคชันที่ทันสมัย มีประสิทธิภาพ และใช้งานง่าย
            </p>

            <div>
              <h4 class="font-semibold mb-2">คุณสมบัติ:</h4>
              <ul class="space-y-1 text-sm text-muted">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Progressive Web App (PWA)
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Real-time Updates
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  User Authentication
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Database Integration
                </li>
              </ul>
            </div>

            <UButton to="/#order" block>
              สั่งซื้อบริการ
            </UButton>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <UIcon name="i-lucide-shopping-cart" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold">ระบบ E-Commerce</h3>
                <p class="text-sm text-muted">E-Commerce System</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-muted">
              สร้างร้านค้าออนไลน์ที่ครบวงจร พร้อมระบบชำระเงินและจัดการสินค้า
            </p>

            <div>
              <h4 class="font-semibold mb-2">คุณสมบัติ:</h4>
              <ul class="space-y-1 text-sm text-muted">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Product Management
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Payment Gateway Integration
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Order Management
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Inventory System
                </li>
              </ul>
            </div>

            <UButton to="/#order" block>
              สั่งซื้อบริการ
            </UButton>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <UIcon name="i-lucide-database" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold">ระบบจัดการข้อมูล</h3>
                <p class="text-sm text-muted">Data Management System</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-muted">
              พัฒนาแอปพลิเคชันสำหรับจัดการข้อมูลและรายงานที่ซับซ้อน
            </p>

            <div>
              <h4 class="font-semibold mb-2">คุณสมบัติ:</h4>
              <ul class="space-y-1 text-sm text-muted">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Custom Dashboard
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Data Analytics
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Report Generation
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  API Integration
                </li>
              </ul>
            </div>

            <UButton to="/#order" block>
              สั่งซื้อบริการ
            </UButton>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <UIcon name="i-lucide-video" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold">ตัดต่อวิดีโอและรูปภาพ</h3>
                <p class="text-sm text-muted">Video & Photo Editing</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-muted">
              บริการตัดต่อวิดีโอคุณภาพสูง และตัดต่อ/ปรับแต่งรูปภาพ Retouch, Color Correction สำหรับโฆษณา, Content, YouTube และงานต่างๆ
            </p>

            <div>
              <h4 class="font-semibold mb-2">วิดีโอ:</h4>
              <ul class="space-y-1 text-sm text-muted">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  ตัดต่อวิดีโอ 4K, Full HD
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Color Grading & Correction, เพิ่มเสียง, BGM
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Motion Graphics & Effects, Subtitle & Caption
                </li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-2">รูปภาพ:</h4>
              <ul class="space-y-1 text-sm text-muted">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Retouch, Color Correction, Composite
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Background Removal, Product Photography Editing
                </li>
              </ul>
            </div>

            <UButton to="/#contact" block>
              สั่งซื้อบริการ
            </UButton>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <UIcon name="i-lucide-film" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold">Motion Graphics</h3>
                <p class="text-sm text-muted">Animation & Motion Design</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-muted">
              สร้าง Motion Graphics และ Animation ที่สวยงามและน่าสนใจ
            </p>

            <div>
              <h4 class="font-semibold mb-2">คุณสมบัติ:</h4>
              <ul class="space-y-1 text-sm text-muted">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  2D & 3D Animation
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Logo Animation
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Explainer Videos
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Title Sequences
                </li>
              </ul>
            </div>

            <UButton to="/#contact" block>
              สั่งซื้อบริการ
            </UButton>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <UIcon name="i-lucide-image" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold">ออกแบบกราฟิก</h3>
                <p class="text-sm text-muted">Graphic Design</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-muted">
              ออกแบบกราฟิก, Logo, Banner และสื่อโฆษณาต่างๆ
            </p>

            <div>
              <h4 class="font-semibold mb-2">คุณสมบัติ:</h4>
              <ul class="space-y-1 text-sm text-muted">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Logo Design
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Banner & Poster Design
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Social Media Graphics
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                  Brand Identity
                </li>
              </ul>
            </div>

            <UButton to="/#contact" block>
              สั่งซื้อบริการ
            </UButton>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="พร้อมเริ่มโปรเจกต์ของคุณแล้วหรือยัง?"
        description="ส่งคำสั่งซื้อตอนนี้และเราจะติดต่อกลับภายใน 24 ชั่วโมง"
        :links="[{
          label: 'ส่งคำสั่งซื้อ',
          to: '/#order',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'primary'
        }]"
      />
    </UPageSection>
  </div>
</template>
