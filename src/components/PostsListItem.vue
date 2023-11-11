<script setup lang="ts">
  import Icon from './Icon.vue';
  import TransitionHeight from './TransitionHeight.vue';

  defineProps<{ title: string; showUp: boolean; showDown: boolean }>();

  const emit = defineEmits<{
    (event: 'up'): void;
    (event: 'down'): void;
  }>();
</script>

<template>
  <div
    class="flex h-16 items-center rounded bg-white p-1 pl-2 text-xs shadow-md"
  >
    <div
      class="grow"
      data-test-id="title"
    >
      {{ title }}
    </div>
    <div class="flex flex-col gap-2 font-bold text-secondary">
      <TransitionHeight :show="showUp">
        <button
          :aria-label="`Move ${title} up`"
          class="p-1.5"
          data-test-id="up"
          @click="emit('up')"
        >
          <Icon name="chevron-up" />
        </button>
      </TransitionHeight>
      <TransitionHeight :show="showDown">
        <button
          :aria-label="`Move ${title} down`"
          class="p-1.5"
          data-test-id="down"
          @click="emit('down')"
        >
          <Icon name="chevron-down" />
        </button>
      </TransitionHeight>
    </div>
  </div>
</template>
