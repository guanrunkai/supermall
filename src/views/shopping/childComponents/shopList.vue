<template>

  <div class="shop-list">

          <ShopListItem 
          v-for="(item,index) in cartList" 
          :key="index"
          :item-info="item" />


  </div>
</template>

<script>
import ShopListItem from './shopListItem' 
import {mapGetters} from 'vuex'

 
export default {
name:'shopList',
components:{
    ShopListItem
},
computed:{
    ...mapGetters(['cartList'])
}
}
</script>

<style scoped>

</style>