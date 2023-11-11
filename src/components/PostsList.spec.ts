import { Post } from '@/models/post';
import { TimelineSwapEntry } from '@/models/timeline-swap-entry';
import { doClick, ensureEmitted, ensureOrder } from '@/utils/vitest';
import { mount } from '@vue/test-utils';
import PostsList from './PostsList.vue';

const posts = [1, 2, 3, 4, 5].map(id => Post.fromUnknown({ id }));

describe('PostsList', () => {
  it('displays posts', async () => {
    const wrapper = create({ posts });
    ensureOrder(wrapper, 'posts-list-item-', [1, 2, 3, 4, 5]);
    wrapper.unmount();
  });

  it('down button emits swap event', async () => {
    const wrapper = create({ posts });
    await doClick(wrapper, 'posts-list-item-2', 'down');
    ensureEmitted(wrapper, 'swap', [createTimelineEvent('Post 2', 1, 2)]);
    wrapper.unmount();
  });
});

// Semantic helpers

function create(props?: { posts?: Post[] }) {
  return mount(PostsList, {
    props: {
      posts: props?.posts ?? [],
    },
  });
}

function createTimelineEvent(
  subject: string,
  indexFrom: number,
  indexTo: number,
) {
  const event = {
    ...new TimelineSwapEntry(subject, indexFrom, indexTo),
  } as Record<string, unknown>;
  delete event.id;
  return event;
}
