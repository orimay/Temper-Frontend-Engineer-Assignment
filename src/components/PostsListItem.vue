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
  <div class="flex h-20 items-center rounded bg-white px-2 shadow-md">
    <div class="grow">{{ title }}</div>
    <div class="flex flex-col gap-1 text-xs text-secondary">
      <TransitionHeight :show="showUp">
        <button
          :aria-label="`Move ${title} up`"
          class="p-2"
          data-test-id="up"
          @click="emit('up')"
        >
          <Icon name="chevron-up" />
        </button>
      </TransitionHeight>
      <TransitionHeight :show="showDown">
        <button
          :aria-label="`Move ${title} down`"
          class="p-2"
          data-test-id="down"
          @click="emit('down')"
        >
          <Icon name="chevron-down" />
        </button>
      </TransitionHeight>
    </div>
  </div>
</template>
