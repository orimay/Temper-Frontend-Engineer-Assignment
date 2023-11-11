import { VueWrapper } from '@vue/test-utils';

export async function doClick(wrapper: VueWrapper, ...testIds: string[]) {
  await wrapper
    .get(testIds.map(testId => `[data-test-id="${testId}"]`).join(' '))
    .trigger('click');
}

export function ensureExists(
  wrapper: VueWrapper,
  testId: string,
  exists = true,
) {
  expect(wrapper.find(`[data-test-id="${testId}"]`).exists()).toEqual(exists);
}

export function ensureText(wrapper: VueWrapper, testId: string, text: string) {
  expect(wrapper.get(`[data-test-id="${testId}"]`).text()).toEqual(text);
}

export function ensureEmitted(
  wrapper: VueWrapper,
  event: string,
  payload?: Record<string, unknown> | unknown[],
) {
  payload === undefined
    ? expect(wrapper.emitted(event)).toBeTruthy()
    : expect(wrapper.emitted(event)?.[0]).toMatchObject(payload);
}

export function ensureOrder(
  wrapper: VueWrapper,
  testIdPrefix: string,
  order: number[],
) {
  const elements = wrapper.findAll(`[data-test-id^="${testIdPrefix}"]`);
  for (const index in order) {
    expect(elements.at(+index)?.attributes('data-test-id')).toBe(
      testIdPrefix + order[index],
    );
  }
}
