<template>
  <div class="goods-list">
    
<GoodListItem  v-for="item in goods" :key="item.acm" :goodsItem="item"/>

     

  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
name:'GoodList',
props:{
    goods:{
        type:Array,
        default(){
            return []
        }
    }
},
components:{
    GoodListItem
}
}
</script>

<style>
.goods-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 0 6px;
        overflow: hidden;
       
	}
</style>