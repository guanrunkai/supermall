<template>
  <div id="home">
    <NavTabbar class="nav-tab"><div slot="center">购物街</div></NavTabbar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="TabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></TabControl>

    <!--BSscroll 滚动区域 -->
    <Scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <HomeSwiper :banners="banners" @swiperimgload="swiperimgload">
      </HomeSwiper>
       <!-- 推荐分类 -->
      <RecommondView :recommends="recommends"></RecommondView>
      <!-- 本周流行 -->
      <FeatureView />
      <TabControl
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="TabControl2"
      ></TabControl>
      <!-- 商品展示 -->
      <GoodList :goods="goods[currentType].list" :key="goods.acm"></GoodList>
    </Scroll>
   <!-- 回到顶部,监听组件的原生事件必须要用native修饰符变成原生组件 -->
    <BackTop @click.native="topClick" v-show="isShowBacktop" />
  </div>
</template>

<script>
import NavTabbar from "../../components/common/navtabbar/NavTabbar.vue";

import Scroll from "../../components/common/scroll/scroll.vue";
import HomeSwiper from "./childComponents/HomeSwiper";

import RecommondView from "./childComponents/RecommondView";
import FeatureView from "./childComponents/FeatureView";

import TabControl from "../../components/content/tabControl/TabControl";
import { getHomeMultidata, getHomeGoods } from "../../../src/network/home";

import GoodList from "../../components/content/goods/GoodList";

import BackTop from "../../components/content/backTop/backTop.vue";

import { itemListenerMinxin } from "../../common/mixin";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBacktop: true,
      taboffsetTop: 0,
      isTabFixed: false,
    };
  },

  components: {
    NavTabbar,

    HomeSwiper,

    RecommondView,

    FeatureView,

    FeatureView,

    TabControl,

    GoodList,
    Scroll,
    

    BackTop,
  },
  mixins: [itemListenerMinxin],
  mounted() {
    
  },

  created() {
    //请求 多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

// this.$bus.$on('itemImgLoad',()=>{
//   this.$refs.scroll.refresh();
// })
//     this.$bus.$on('recommondLoad',()=>{
// this.$refs.scroll.refresh();
//     })
//       this.$bus.$on('FeatureLoad',()=>{
// this.$refs.scroll.refresh();
//     })

  },

  methods: {
    //下面为事件监听方法

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.TabControl1.currentIndex = index;
      this.$refs.TabControl2.currentIndex = index;
    },
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      //判断backtop是否显示
      this.isShowBacktop = -position.y > 1000;
      //决定tabcontro是否吸顶（position:fixed)
      this.isTabFixed = -position.y > this.taboffsetTop;
    },
     // 上拉加载
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
// 监听轮播图加载完成
    swiperimgload() {
      this.taboffsetTop = this.$refs.TabControl2.$el.offsetTop;
    },


    //下面为网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res)
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        //完成上拉加载更多
        // this.$refs.scroll.finishPullUp()
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  // keep-alive状态下进来的时候的生命周期
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 100);
     // 同时刷新better-scroll防止不能滚动
    this.$refs.scroll.refresh();
  },
  
  // keep-alive状态下离开的时候的生命周期
  deactivated() {
    this.saveY = this.$refs.scroll.GetScrollY();
   
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;

  position: relative;
}
.nav-tab {
  background-color: pink;
  color: white;
  font-size: 25px;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.wrapper {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
  top: 0px;
  margin-top: -1px;
}
</style>