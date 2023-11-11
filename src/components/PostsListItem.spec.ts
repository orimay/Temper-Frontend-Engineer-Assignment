import {
  doClick,
  ensureEmitted,
  ensureExists,
  ensureText,
} from '@/utils/vitest';
import { mount } from '@vue/test-utils';
import PostsListItem from './PostsListItem.vue';

describe('PostsListItem', () => {
  it('title shows up', async () => {
    const wrapper = create({ title: 'Post 1' });
    ensureText(wrapper, 'title', 'Post 1');
    wrapper.unmount();
  });

  it('up button respects showUp property', async () => {
    let wrapper = create({ showUp: false });
    ensureExists(wrapper, 'up', false);
    wrapper.unmount();

    wrapper = create({ showUp: true });
    ensureExists(wrapper, 'up');
    wrapper.unmount();
  });

  it('down button respects showDown property', async () => {
    let wrapper = create({ showDown: false });
    ensureExists(wrapper, 'down', false);
    wrapper.unmount();

    wrapper = create({ showDown: true });
    ensureExists(wrapper, 'down');
    wrapper.unmount();
  });

  it('up button emits up event', async () => {
    const wrapper = create({ showUp: true });
    await doClick(wrapper, 'up');
    ensureEmitted(wrapper, 'up');
    wrapper.unmount();
  });

  it('down button emits down event', async () => {
    const wrapper = create({ showDown: true });
    await doClick(wrapper, 'down');
    ensureEmitted(wrapper, 'down');
    wrapper.unmount();
  });
});

// Semantic helpers

function create(props: {
  title?: string;
  showUp?: boolean;
  showDown?: boolean;
}) {
  return mount(PostsListItem, {
    props: {
      title: props.title ?? '',
      showUp: props.showUp ?? false,
      showDown: props.showDown ?? false,
    },
  });
}
