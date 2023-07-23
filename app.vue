<script setup lang="ts">
const { finalizePendingLocaleChange, locale } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <NuxtLayout>
    <CookieControl :locale="locale" />
    <NuxtPage
      :transition="{
        onBeforeEnter
      }"
    />
  </NuxtLayout>
</template>
