import { addIcon } from '@iconify/vue/dist/offline';

import iconChevronDown from '@iconify/icons-fa6-solid/chevron-down';
import iconChevronUp from '@iconify/icons-fa6-solid/chevron-up';

export const Iconify = {
  async install() {
    addIcon('chevron-up', iconChevronUp);
    addIcon('chevron-down', iconChevronDown);
  },
};
