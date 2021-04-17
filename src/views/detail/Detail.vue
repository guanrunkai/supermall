<template>
  <div id="detail">
    <DetailNavBar class="detail-navbar" @titleClick="ItemClick" ref="nav" />

    <Scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <DetailSwiper :top-images="topImages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad" />
      <DetailParamInfo ref="params" :param-info="paramInfo" />
      <DetailCommentInfo ref="comment" :comment-info="commentInfo" />
      <GoodList ref="recommend" :goods="recommendList" />
    </Scroll>
    <DetailBottomBar @tocart="toCart" />
    <BackTop @click.native="topClick" v-show="isShowBacktop" />
  </div>
</template>

<script>
import Scroll from "../../components/common/scroll/scroll";
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodList from "../../components/content/goods/GoodList";
import DetailBottomBar from "./childComps/DetailBottomBar";

// import DetailRecommendInfo from './childComps/DetailRecommendInfo'
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";
import { itemListenerMinxin, backTopMixin } from "../../common/mixin";
import { debounce } from "../../common/utils";
import { mapActions } from 'vuex'
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: null,
      themeTopY: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodList,
    DetailBottomBar,
  },
  mixins: [itemListenerMinxin, backTopMixin],

  created() {
    // 1 -----保存传入的商品信息的iid
    this.iid = this.$route.params.iid;
    // 2---- 利用iid 请求网络数据
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      // 获取顶部轮播图信息

      this.topImages = data.itemInfo.topImages;

      // 获取店铺名称 发货 信息

      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取商铺评分栏 相关信息
      this.shop = new Shop(data.shopInfo);
      //获取商品店铺下方展示信息
      this.detailInfo = data.detailInfo;
      //获取商品尺码相关信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取商品评论信息
      if (data.rate.cRate.length != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //获取商品下方 推荐信息
    getRecommend().then((res) => {
      this.recommendList = res.data.data.list;
    });
    this.getThemeTopY = debounce(() => {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
    }, 100);
  },
  mounted() {},
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.newRefresh();
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
    },
    ItemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200);
    },
    contentScroll(position) {
      const positionY = -position.y;

      let length = this.themeTopY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex != i &&
          positionY >= this.themeTopY[i] &&
          positionY <= this.themeTopY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      //  是否回到顶部 这是封装的方法 在mixin
      this.listenShowBackTop(position);
    },
    toCart() {
      //1.获取购物车所需信息(1.Promise 2.mapActions(vuex))
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //2.将商品加入购物车里
      this.addCart(product).then(res=>{
       
     
     this.$toast.show(res,2000)

        
      })

      // this.$store.dispatch("addCart", product).then((res)=>{
      //   console.log(res)
      // });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  /* 减号两边空格不能省略 */
  height: calc(100% - 44px - 58px);
}
</style>