# vue-scrollable-tabs
A scrollable vue tab component

# install

```
npm install vue-scrollable-tabs --save
```

# use
use with global

```
// main.js
import VueScrollableTabs from "vue-scrollable-tabs";

Vue.use(VueScrollableTabs)
```

use with component

```
import { scrollTab, tabItem } from "vue-scrollable-tabs";

export default {
  components: {
    scrollTab,
    tabItem
  }
}
```

# demo

```
<template>
  <div>
    <scroll-tab ref="scrollTab">
      <tab-item
        v-for="(item, index) in tabs"
        :key="index"
        :index="index"
       >tab {{ index }}</tab-item>
    </scroll-tab>
  </div>
</template>
```
