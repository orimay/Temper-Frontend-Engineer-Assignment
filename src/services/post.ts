import { Post } from '@/models/post';

export const ServicePost = new class {
  private readonly MAX_POSTS_TO_LOAD = 5;

  public async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (response.status >= 500) throw new Error('Internal server error');
    if (response.status >= 400) throw new Error('Bad request');

    const data = (await response.json()) as unknown;

    if (!Array.isArray(data)) throw new Error('Array expected');

    return data.slice(0, ServicePost.MAX_POSTS_TO_LOAD).map(Post.fromUnknown);
  }
}();
