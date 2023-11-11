<script setup lang="ts">
  import { useStoreTimeTravel } from '@/stores/store-time-travel';
  import TimeTravelItem from './TimeTravelItem.vue';
  import TransitionHeight from './TransitionHeight.vue';

  const storeTimeTravel = useStoreTimeTravel();

  withDefaults(defineProps<{ element?: 'main' | 'section' | 'aside' }>(), {
    element: 'section',
  });
</script>

<template>
  <component
    :is="element"
    aria-labelledby="title-time-travel"
  >
    <div class="overflow-hidden rounded shadow-md">
      <header
        id="title-time-travel"
        class="bg-white p-4 text-lg font-semibold"
      >
        List of actions committed
      </header>
      <div class="bg-neutral-100 p-4">
        <TransitionHeight :show="!storeTimeTravel.timelineSwapEntries.length">
          <div
            class="text-xs"
            role="status"
          >
            No actions committed
          </div>
        </TransitionHeight>
        <TransitionHeight
          :items="storeTimeTravel.timelineSwapEntries"
          class="divide-y divide-gray-200 overflow-hidden rounded shadow-md"
        >
          <template #item="{ index, item: entry }">
            <TimeTravelItem
              :key="entry.id"
              :entry="entry"
              :data-test-id="`time-travel-item-${index}`"
              @rewind="storeTimeTravel.rewind(index)"
            />
          </template>
        </TransitionHeight>
      </div>
    </div>
  </component>
</template>
