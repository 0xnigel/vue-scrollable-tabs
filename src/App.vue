<template>
  <div class="app">
    <div class="scrollTab">
      <scroll-tab ref="scrollTab">
        <tab-item
          class="item"
          v-for="(item, index) in tabs"
          :key="index"
          :index="index"
          @getActiveIndex="getActiveIndex"
        >
          <div class="tabBox">
            <div class="tab" :class="{ active: activeIndex === index }">tab {{ index }}</div>
          </div>
        </tab-item>
      </scroll-tab>
    </div>
  </div>
</template>

<script>
import scrollTab from "./components/scrollTab";
import tabItem from "./components/tabItem";
export default {
  name: "App",
  components: {
    scrollTab,
    tabItem,
  },
  data() {
    return {
      activeIndex: 0,
      tabs: new Array(20),
    };
  },
  methods: {
    getActiveIndex(i) {
      this.activeIndex = i;
    },
  },
};
</script>

<style lang="scss" scoped>
$size: 60px;

.app {
  width: 100%;
  padding-top: 200px;
  .scrollTab {
    max-width: 600px;
    margin: 0 auto;
  }
  .item {
    text-align: center;
    .tabBox {
      padding: 0 6px;
      .tab {
        width: $size;
        height: 36px;
        line-height: 36px;
        border: solid 1px #f9ab48;
        border-radius: 6px;
      }
      .tab.active {
        background-color: rgb(117, 216, 183);
      }
    }
    &:nth-child(2n) {
      .tab {
        width: $size * 1.2;
      }
    }
    &:nth-child(3n) {
      .tab {
        width: $size * 1.5;
      }
    }
  }
}
</style>
