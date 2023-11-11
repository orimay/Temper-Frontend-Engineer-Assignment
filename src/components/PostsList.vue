<script setup lang="ts">
  import { Post } from '@/models/post';
  import { TimelineSwapEntry } from '@/models/timeline-swap-entry';
  import PostsListItem from './PostsListItem.vue';
  import TransitionHeight from './TransitionHeight.vue';

  withDefaults(
    defineProps<{ posts: Post[]; element?: 'main' | 'section' | 'aside' }>(),
    { element: 'section' },
  );

  const emit = defineEmits<{
    (event: 'swap', timelineSwapEntry: TimelineSwapEntry): void;
  }>();

  function swap(indexFrom: number, indexTo: number, post: Post) {
    emit('swap', new TimelineSwapEntry(post.title, indexFrom, indexTo));
  }
</script>

<template>
  <component
    :is="element"
    aria-labelledby="title-posts-list"
  >
    <header
      id="title-posts-list"
      class="mb-4 text-xl text-white"
    >
      Sortable Post List
    </header>
    <TransitionHeight
      :items="posts"
      class="space-y-4"
    >
      <template #item="{ item: post, index }">
        <PostsListItem
          :key="post.id"
          :title="post.title"
          :show-up="index > 0"
          :show-down="index < posts.length - 1"
          :data-test-id="`posts-list-item-${post.id}`"
          @up="swap(index, index - 1, post)"
          @down="swap(index, index + 1, post)"
        />
      </template>
    </TransitionHeight>
  </component>
</template>
