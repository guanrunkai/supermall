<template>
  <div id="shopping">
<!-- //顶部导航栏       -->
      <NavBar class="title-nav">
        <div slot="center">购物车({{cartLength}})</div>
        </NavBar>
<!-- //滚动     -->
      <Scroll 
      class="content" 
      :probe-type="3"
      ref="scroll">
 <!-- //购物车内物品展示 -->
<ShopList/>

      </Scroll>
     <CheckBottomBar/>
      
      
  </div>
</template>

<script>

import NavBar from '../../components/common/navtabbar/NavTabbar'

import Scroll from '../../components/common/scroll/scroll'
import ShopList from './childComponents/shopList'
import CheckBottomBar from '../../components/content/CheckButton/CheckBottomBar'
import{mapGetters} from 'vuex'
export default {
name:'shopping',
components:{
  NavBar,
  ShopList,
  Scroll,
  CheckBottomBar
 
},
computed:{
//   cartLength(){
// return this.$store.state.cartList.length
//   }
...mapGetters(['cartLength','cartList'])
},
activated() {
  this.$refs.scroll.refresh()
},
}
</script>

<style scoped>
#shopping{
  position: relative;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.title-nav{
  background-color:pink;
  color: #fff;
  font-size: 25px;
}
</style>