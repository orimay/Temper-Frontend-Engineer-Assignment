import { TimelineSwapEntry } from '@/models/timeline-swap-entry';
import { doClick, ensureEmitted, ensureText } from '@/utils/vitest';
import { mount } from '@vue/test-utils';
import TimeTravelItem from './TimeTravelItem.vue';

describe('TimeTravelItem', () => {
  it('entry text shows up', async () => {
    const wrapper = create({ entry: new TimelineSwapEntry('Post 2', 1, 2) });
    ensureText(wrapper, 'entry-text', 'Moved post 2 from index 1 to index 2');
    wrapper.unmount();
  });

  it('Rewind button emits rewind event', async () => {
    const wrapper = create();
    await doClick(wrapper, 'rewind');
    ensureEmitted(wrapper, 'rewind');
    wrapper.unmount();
  });
});

function create(props?: { entry?: TimelineSwapEntry }) {
  return mount(TimeTravelItem, {
    props: {
      entry: props?.entry ?? new TimelineSwapEntry('', 0, 0),
    },
  });
}
