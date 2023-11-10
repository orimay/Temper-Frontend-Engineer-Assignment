import { Post } from '@/models/post';

export const ServicePost = new class {
  public async getPosts() {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    return data.map(Post.fromUnknown);
  }
}();
