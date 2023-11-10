<script setup lang="ts">
  import { useStoreTimeTravel } from '@/stores/store-time-travel';
  import TimeTravelItem from './TimeTravelItem.vue';
  import TransitionHeight from './TransitionHeight.vue';

  const storeTimeTravel = useStoreTimeTravel();
</script>

<template>
  <div>
    <section
      class="overflow-hidden rounded shadow-md"
      aria-labelledby="title-time-travel"
    >
      <header
        id="title-time-travel"
        class="bg-white p-4 text-lg font-semibold"
      >
        List of actions committed
      </header>
      <div class="bg-neutral-100 p-4">
        <div class="divide-y divide-gray-200 overflow-hidden rounded">
          <TransitionHeight :items="storeTimeTravel.timelineSwapEntries">
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
    </section>
  </div>
</template>
