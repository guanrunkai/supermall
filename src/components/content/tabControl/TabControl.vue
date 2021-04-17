<template>
  <div class="tab-control" id="tabcontrol">
    <div
      v-for="(item, index) in titles"
      :key="item.acm"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 40px;
  height: 45px;

  background-color: #fff;
  /* border-left: 2px solid #eee;
  border-right: 2px solid #eee; */
  position: sticky;
  top: 45px;
  
  }
.tab-control-item {
  border-left: 1px solid #eee;
  flex: 1;
}
.active {
  color: pink;
  padding: 2px;
}
.active span {
  /* border-left: 2px solid #eee;
  border-right: 2px solid #eee; */
  padding: 10px 0;
  
  border-bottom: 3px solid pink;
}
</style>