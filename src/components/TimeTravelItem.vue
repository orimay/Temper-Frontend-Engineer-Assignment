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
  <div class="flex items-center gap-2 bg-white p-2 text-xs">
    <span
      class="grow"
      data-test-id="entry-text"
    >
      {{ entryText }}
    </span>
    <button
      class="rounded bg-primary px-4 py-2 font-semibold transition-[filter] duration-150 hover:brightness-90 active:brightness-75"
      :aria-label="`Rewind to entry &quot;${entryText}&quot;`"
      data-test-id="rewind"
      @click="emit('rewind')"
    >
      Time travel
    </button>
  </div>
</template>
