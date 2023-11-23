export class Post {
  private constructor(
    public readonly id: number,
    public readonly title: string,
  ) {}

  public static fromUnknown(data: unknown) {
    if (!data || typeof data !== 'object') {
      throw new Error('post must be an object');
    }
    if (!('id' in data) || typeof data.id !== 'number') {
      throw new Error('post.id must be a number');
    }

    return new Post(data.id, `Post ${data.id}`);
  }
}
