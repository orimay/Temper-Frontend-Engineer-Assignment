import { addIcon } from '@iconify/vue/dist/offline';

import iconChevronDown from '@iconify/icons-octicon/chevron-down-12';
import iconChevronUp from '@iconify/icons-octicon/chevron-up-12';

export const Iconify = {
  async install() {
    addIcon('chevron-up', iconChevronUp);
    addIcon('chevron-down', iconChevronDown);
  },
};
