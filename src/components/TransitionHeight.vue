<script
  setup
  lang="ts"
  generic="T extends { id: string | number } = { id: string | number }"
>
  import { VNode } from 'vue';

  defineOptions({ inheritAttrs: false });

  defineSlots<{
    default: (props: unknown) => VNode | VNode[];
    item: (props: { index: number; item: T }) => VNode | VNode[];
  }>();

  withDefaults(
    defineProps<{
      show?: boolean | number;
      durationSize?: string;
      durationOpacity?: string;
      durationMove?: string;
      items?: T[];
      appear?: boolean;
    }>(),
    {
      show: true,
      durationSize: '300ms',
      durationOpacity: '150ms',
      durationMove: '500ms',
      items: undefined,
    },
  );
</script>

<template>
  <TransitionGroup
    v-if="items"
    :appear="appear"
  >
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="grid shrink-0"
    >
      <div
        class="overflow-hidden"
        v-bind="$attrs"
      >
        <slot
          name="item"
          :item="item"
          :index="index"
        ></slot>
      </div>
    </div>
  </TransitionGroup>
  <Transition
    v-else
    :appear="appear"
  >
    <div
      v-if="show"
      class="grid shrink-0"
      data-focus-parent
    >
      <div
        class="overflow-hidden"
        v-bind="$attrs"
      >
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  .v-appear-active,
  .v-enter-active {
    transition: grid-template-rows v-bind(durationSize) ease-in-out,
      opacity v-bind(durationOpacity) ease-in v-bind(durationSize);
  }

  .v-leave-active {
    transition: grid-template-rows v-bind(durationSize) ease-in-out
        v-bind(durationOpacity),
      opacity v-bind(durationOpacity) ease-out;
  }

  .v-appear-from,
  .v-enter-from,
  .v-leave-to {
    grid-template-rows: 0fr;
    opacity: 0;
  }

  .v-appear-to,
  .v-enter-to,
  .v-leave-from {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .v-move {
    transition-property: transform;
    transition-duration: v-bind(durationMove);
    transition-timing-function: ease;
  }
</style>
