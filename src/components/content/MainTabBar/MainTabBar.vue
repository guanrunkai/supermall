<template>


  <TabBar>
    <TabBarItem path='/home' activeColor="pink">
      <img  slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="" >
      <img  slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path='/category' activeColor="skyblue">
      <img  slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="" >
      <img  slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path='/shopping' activeColor="red">
      <img  slot="item-icon" src="../../../assets/img/tabbar/shopping.svg" alt="" >
      <img  slot="item-icon-active" src="../../../assets/img/tabbar/shopping_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path='/profile' activeColor="orange">
      <img  slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="" >
      <img  slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
  

</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBar-item'
export default {
name:'MainTabBar',
components:{
TabBar,TabBarItem
}
}


</script>

<style>

</style>