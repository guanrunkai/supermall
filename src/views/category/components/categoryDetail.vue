<template>
<div>
    <GridView>
        <div class="item" 
             v-for="(item,index) in categoryData.data"
             :key="index">
         <a :href="item.link" class="a">
             <img class="item-img" 
                  :src="item.img" alt="">
            <div class="item-title">{{item.title}}</div>
            <div class="price">￥{{item.price}}</div>
         </a>
        </div>

    </GridView>
</div>
  
</template>

<script>

import GridView from '../../../components/common/gridView/GridView'
export default {
name:'categoryDetail',
components:{
    GridView,
    
},
props:{
    categoryData:{
      type:Array,
    default(){
        return [{}]
    }  
    }
    
}
}
</script>

<style scoped>
.item{
    width: 130px;
    height: 38vh;
    
    flex: 1;
   
   margin-top: 10px;
   
}
.item-img{
    
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-top: 5px;
}
.a{
    text-decoration: none;
    outline: none;
}
.item-title{
    
    text-overflow: ellipsis;
    margin-top: 5px;
    text-align: center;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    padding: 5px 5px;
    color:rgb(0, 0, 0);
}
.price{
    color: #ff5777;
    text-align: center;
    font-size: 13px;
    margin-top: 5px;
    margin-right: 2.3vh;
    justify-content: space-between;

}
</style>