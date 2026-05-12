<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'th'
  }
})

const title = 'J Double O - รับทำเว็บไซต์ เว็บแอป ตัดต่อวิดีโอ และรูปภาพ'
const description = 'รับทำเว็บไซต์ รับทำเว็บแอป WordPress Landing Page รับตัดต่อวิดีโอและรูปภาพ คุณภาพสูง ส่งงานตรงเวลา — ขอใบเสนอราคาฟรี'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <UIcon name="i-lucide-globe" class="w-5 h-5 text-white" />
          </div>
          <span class="font-bold text-lg">J Double O</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-4 ml-8">
          <UButton
            to="/"
            variant="ghost"
            color="neutral"
          >
            หน้าแรก
          </UButton>
          <UButton
            to="/services"
            variant="ghost"
            color="neutral"
          >
            บริการ
          </UButton>
          <UButton
            to="/portfolio"
            variant="ghost"
            color="neutral"
          >
            ผลงาน
          </UButton>
          <UButton
            to="/contact"
            variant="ghost"
            color="neutral"
          >
            ติดต่อ
          </UButton>
        </nav>
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          J Double O • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <div class="flex items-center gap-4">
          <UButton
            to="/contact"
            icon="i-lucide-phone"
            variant="ghost"
            color="neutral"
            size="sm"
          >
            ติดต่อเรา
          </UButton>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
