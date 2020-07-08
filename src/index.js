import scrollTab from "./components/scrollTab.vue";
import tabItem from "./components/tabItem.vue";

const components = [scrollTab, tabItem];

const install = function(Vue, opts = {}) {
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

const VueScrollableTabs = { scrollTab, tabItem, install };

export default VueScrollableTabs;
export { install, scrollTab, tabItem };
