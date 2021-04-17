<template>
  <div class="bottom-bar">
<div class="bar-item bar-left">
<div>
    
    <i class="icon service"><img src="../../../assets/img/detail/left.png" alt=""></i>
    
    <span class="text">客服</span>
</div>
<div>
    <i class="icon shop"> <img src="../../../assets/img/detail/center.png" alt=""></i>
   
    <span class="text">店铺</span>
</div>
<div>
    <i class="icon select"><img src="../../../assets/img/detail/right.png" alt=""></i>
    
    <span class="text">收藏</span>
</div>
</div>
<div class="bar-item bar-right">
<div class="cart" @click="addToCart">加入购物车</div>
<div class="buy">购买</div>


</div>
  </div>
</template>

<script>
export default {
name:'DetailBottomBar',
methods: {
  addToCart(){
    this.$emit('tocart')
  }
},
}
</script>

<style scoped>
 .bottom-bar {
    height: 58px;
    position: relative;
    background-color: #fff;
    bottom: 0px;
    display: flex;
    text-align: center;
    
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item>div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    
  }
  .bar-left  img{
      width: 48px;
      height: 36px;
      margin-left: -9px;
      margin-top: -10px;
  }
  .bar-left .service {
    background-position:0 -54px;
  }
  .bar-left .shop {
    background-position:0 -98px;
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    background-color: #f69;
  }
</style>