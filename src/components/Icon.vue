<script setup lang="ts">
  import { Icon as Iconify } from '@iconify/vue/dist/offline';
  import { computed } from 'vue';

  const props = defineProps<{ name: string; size?: string }>();
  const sSize = computed(() => {
    const size = props.size || '1em';
    return String(Number(size)) === size ? `${+size / 16}rem` : size;
  });
</script>

<template>
  <div style="width: 1em; height: 1em">
    <Iconify
      :icon="name"
      :width="sSize"
      :height="sSize"
    />
  </div>
</template>
