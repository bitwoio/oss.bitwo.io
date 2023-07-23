<script setup lang="ts">
import Lang from '../components/lang.vue';
</script>

<template>
  <div>
    <Lang />
    <p>{{ $t('hello') }}</p>
  </div>
</template>
