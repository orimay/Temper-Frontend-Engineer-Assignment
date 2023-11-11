import { doClick, ensureOrder, ensureText } from '@/utils/vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import App from './App.vue';

vi.mock('@/services/post');

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('displays posts', async () => {
    const wrapper = await create();
    ensureOrder(wrapper, 'posts-list-item-', [1, 2, 3, 4, 5]);
    wrapper.unmount();
  });

  it('swaps posts', async () => {
    const wrapper = await create();
    await doClick(wrapper, 'posts-list-item-2', 'down');
    ensureOrder(wrapper, 'posts-list-item-', [1, 3, 2, 4, 5]);
    wrapper.unmount();
  });

  it('stores timeline entries in reverse upon posts swaps', async () => {
    const wrapper = await create();
    await doClick(wrapper, 'posts-list-item-2', 'down');
    await doClick(wrapper, 'posts-list-item-4', 'down');
    await doClick(wrapper, 'posts-list-item-3', 'up');
    ensureText(
      wrapper,
      'time-travel-item-0',
      'Moved post 3 from index 1 to index 0 Time travel',
    );
    ensureText(
      wrapper,
      'time-travel-item-1',
      'Moved post 4 from index 3 to index 4 Time travel',
    );
    ensureText(
      wrapper,
      'time-travel-item-2',
      'Moved post 2 from index 1 to index 2 Time travel',
    );
    wrapper.unmount();
  });

  it('rewinds posts order to a specific timeline swap entry', async () => {
    const wrapper = await create();
    await doClick(wrapper, 'posts-list-item-2', 'down');
    await doClick(wrapper, 'posts-list-item-4', 'down');
    await doClick(wrapper, 'posts-list-item-3', 'up');
    await doClick(wrapper, 'time-travel-item-1', 'rewind');
    ensureOrder(wrapper, 'posts-list-item-', [1, 3, 2, 4, 5]);
    wrapper.unmount();
  });
});

// Semantic helpers

async function create() {
  return mount(App);
}
