<template>
  <div class="vst-container" :style="{ height: `${tabHeight}px` }">
    <div ref="scrollTab" class="scrollTab">
      <div :style="{ width: `${wrapWidth}px` }" class="scrollTabWrap">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scrollTab",
  props: {
    getActiveTab: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      tabs: [],
      tabHeight: 0,
      wrapWidth: 100000,
    };
  },
  mounted() {
    this.calcWidth();
  },
  methods: {
    active(index) {
      const item = this.tabs[index];
      const left = item.left + item.width / 2 - this.$refs.scrollTab.offsetWidth / 2;
      this.smoothScroll(left);
    },
    getActive(data) {
      this.$emit("getActiveTab", data);
    },
    calcWidth() {
      this.$nextTick(() => {
        if (!this.$slots.default) {
          return false;
        }

        let tempWidth = 0;

        this.tabs = [];
        this.$slots.default.forEach(({ elm }, index) => {
          const rect = elm.getBoundingClientRect();
          this.tabHeight = rect.height;
          this.tabs.push({
            left: tempWidth,
            width: rect.width,
            index,
          });
          tempWidth += rect.width;
        });
        this.wrapWidth = tempWidth;
      });
    },
    smoothScroll(to) {
      const _this = this;
      const scroller = this.$refs.scrollTab;
      let from = scroller.scrollLeft;
      const direction = to - from > 0 ? "bottom" : "top";

      this.scrolling = true;

      const intervalId = setInterval(() => {
        if (Math.abs(from - to) <= 20) {
          _this.scrolling = false;
          clearInterval(intervalId);
          scroller.scrollLeft = to;
        } else {
          let r = (to - from) / 3;
          r = Math.abs(r) > 20 ? r : direction === "bottom" ? 20 : -20;
          from += r;
          scroller.scrollLeft = from;
        }
      }, 16.7);
    },
  },
};
</script>

<style lang="scss" scoped>
.vst-container {
  position: relative;
  overflow: hidden;
  .scrollTab {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    display: block;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .scrollTabWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
