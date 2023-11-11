<script setup lang="ts">
  import PostsList from './components/PostsList.vue';
  import TimeTravel from './components/TimeTravel.vue';
  import { useStorePost } from './stores/store-post';
  import { useStoreTimeTravel } from './stores/store-time-travel';

  const storePost = useStorePost();
  const storeTimeTravel = useStoreTimeTravel();

  storePost.loadPosts();
</script>

<template>
  <div
    class="absolute -z-10 border-b-[20vw] border-l-[100vw] border-b-transparent border-l-secondary"
  ></div>
  <div class="mx-auto grid max-w-[900px] gap-12 p-8 sm:grid-cols-[1fr_1.1fr]">
    <PostsList
      element="main"
      :posts="storePost.posts"
      @swap="storeTimeTravel.swapPosts"
    />
    <TimeTravel element="aside" />
  </div>
</template>

<style lang="scss">
  html {
    @apply bg-neutral-100 text-neutral-600 font-sans;
  }
</style>
