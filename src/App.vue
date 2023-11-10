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
  <div class="p-8">
    <div class="mx-auto grid max-w-[800px] gap-16 sm:grid-cols-2">
      <main>
        <PostsList
          :posts="storePost.posts"
          @swap="storeTimeTravel.swapPosts"
        />
      </main>
      <aside>
        <TimeTravel />
      </aside>
    </div>
  </div>
</template>

<style lang="scss">
  html {
    @apply bg-neutral-100 text-neutral-600 font-sans;
  }
</style>
