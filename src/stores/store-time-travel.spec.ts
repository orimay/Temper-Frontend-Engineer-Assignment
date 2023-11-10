import { Post } from '@/models/post';
import { TimelineSwapEntry } from '@/models/timeline-swap-entry';
import { createPinia, setActivePinia } from 'pinia';
import { useStorePost } from './store-post';
import { useStoreTimeTravel } from './store-time-travel';

vi.mock('@/services/post');

describe('store-time-travel', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('swaps posts', async () => {
    const storePost = useStorePost();
    await storePost.loadPosts();

    const storeTimeTravel = useStoreTimeTravel();
    movePost(storePost, storeTimeTravel, 2, 'down');

    ensurePostsOrder(storePost, [1, 3, 2, 4, 5]);
  });

  it('stores timeline entries in reverse upon posts swaps', async () => {
    const storePost = useStorePost();
    await storePost.loadPosts();

    const storeTimeTravel = useStoreTimeTravel();
    const swapEntry1 = movePost(storePost, storeTimeTravel, 2, 'down');
    const swapEntry2 = movePost(storePost, storeTimeTravel, 4, 'down');
    const swapEntry3 = movePost(storePost, storeTimeTravel, 3, 'up');

    expect(storeTimeTravel.timelineSwapEntries).toEqual([
      swapEntry3,
      swapEntry2,
      swapEntry1,
    ]);
  });

  it('rewinds posts order to a specific timeline swap entry', async () => {
    const storePost = useStorePost();
    await storePost.loadPosts();

    const storeTimeTravel = useStoreTimeTravel();
    movePost(storePost, storeTimeTravel, 2, 'down');
    movePost(storePost, storeTimeTravel, 4, 'down');
    movePost(storePost, storeTimeTravel, 3, 'up');
    storeTimeTravel.rewind(1);

    ensurePostsOrder(storePost, [1, 3, 2, 4, 5]);
  });
});

// Semantic helpers

function movePost(
  storePost: ReturnType<typeof useStorePost>,
  storeTimeTravel: ReturnType<typeof useStoreTimeTravel>,
  id: number,
  direction: 'up' | 'down',
) {
  const postIndex = storePost.posts.findIndex(post => post.id === id);
  const timelineSwapEntry = new TimelineSwapEntry(
    `Post ${id}`,
    postIndex,
    postIndex + (direction === 'up' ? -1 : 1),
  );
  storeTimeTravel.swapPosts(timelineSwapEntry);
  return timelineSwapEntry;
}

function ensurePostsOrder(
  storePost: ReturnType<typeof useStorePost>,
  order: number[],
) {
  expect(storePost.posts).toEqual(order.map(id => Post.fromUnknown({ id })));
}
