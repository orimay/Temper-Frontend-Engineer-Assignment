<script setup lang="ts">
  import { TimelineSwapEntry } from '@/models/timeline-swap-entry';
  import { computed } from 'vue';

  const props = defineProps<{ entry: TimelineSwapEntry }>();

  const emit = defineEmits<{ (event: 'rewind'): void }>();

  const entryText = computed(
    () =>
      `Moved ${props.entry.subject.toLowerCase()} from index ${
        props.entry.indexFrom
      } to index ${props.entry.indexTo}`,
  );
</script>

<template>
  <div class="flex items-center gap-2 bg-white p-2">
    <span class="grow text-xs">{{ entryText }}</span>
    <button
      class="rounded bg-primary px-4 py-2 text-sm font-semibold transition-[filter] duration-150 active:brightness-75"
      @click="emit('rewind')"
    >
      Time travel
    </button>
  </div>
</template>
