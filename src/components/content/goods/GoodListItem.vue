<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="getImage" alt="" class="goods-list-img" @load="imageLoad"/>
    <div class="goods-list-test">
      <p>{{ goodsItem.title }}</p>
      <span class="price">${{ goodsItem.price }}</span>
      <span class="collection">⭐{{ goodsItem.cfav }}</span>

    </div>
    
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
  
  },
  methods: {
    imageLoad(){
     this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
  computed:{
    getImage(){
      return this.goodsItem.image|| this.goodsItem.show.img ||this.goodsItem.img
    }
  }
};
</script>

<style scoped>
.goods-list-item {
  width: 49%;
  height: auto;
  padding-top: 6px;
  font-size: 12px;
   /* text-align: center; */
}
.goods-list-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.price {
  display: flex;
  justify-content: space-between;
  margin: 6px 37%;
  color: #ff3366;
}
/* .collect-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  /* background: url(~assets/images/home/collect_icon.png) no-repeat; */
  /* background-size: cover;
  vertical-align: bottom;
} */ 
.goods-list-test{
    font-size: 12px;
    
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-list-test p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
</style>