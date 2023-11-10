import { Post } from '@/models/post';
import { ServicePost } from '@/services/post';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStorePost = defineStore('post', () => {
  const posts = ref<Post[]>([]);

  async function loadPosts() {
    posts.value = await ServicePost.getPosts();
  }

  return { posts, loadPosts };
});
