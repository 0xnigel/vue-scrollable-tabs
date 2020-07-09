<template>
  <div class="tabItem" @click="handleClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: "tabItem",
  props: {
    index: {
      type: Number,
      default: 0,
    },
    getActiveIndex: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleClick() {
      this.$parent.active(this.index);
      this.$parent.getActive(this.index);
    },
  },
};
</script>
