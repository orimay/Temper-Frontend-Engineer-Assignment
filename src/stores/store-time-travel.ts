import { TimelineSwapEntry } from '@/models/timeline-swap-entry';
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { useStorePost } from './store-post';

export const useStoreTimeTravel = defineStore('time-travel', () => {
  const storePost = useStorePost();

  const posts = computed(() => storePost.posts);

  const timelineSwapEntries = reactive<TimelineSwapEntry[]>([]);

  function swapPosts(indexFrom: number, indexTo: number): void;
  function swapPosts(timelineSwapEntry: TimelineSwapEntry): void;
  function swapPosts(
    indexFromOrTimelineSwapEntry: number | TimelineSwapEntry,
    indexToOrNothing?: number,
  ) {
    let indexFrom: number;
    let indexTo: number;
    if (indexFromOrTimelineSwapEntry instanceof TimelineSwapEntry) {
      const timelineSwapEntry = indexFromOrTimelineSwapEntry;
      timelineSwapEntry && timelineSwapEntries.unshift(timelineSwapEntry);
      indexFrom = timelineSwapEntry.indexFrom;
      indexTo = timelineSwapEntry.indexTo;
    } else {
      indexFrom = indexFromOrTimelineSwapEntry;
      indexTo = indexToOrNothing as number;
    }
    const itemFrom = posts.value[indexFrom];
    posts.value[indexFrom] = posts.value[indexTo];
    posts.value[indexTo] = itemFrom;
  }

  function rewind(index: number) {
    for (let i = 0; i <= index; ++i) {
      const entry = timelineSwapEntries.shift();
      if (!entry) break;
      swapPosts(entry.indexTo, entry.indexFrom);
    }
  }

  return { timelineSwapEntries, swapPosts, rewind };
});
