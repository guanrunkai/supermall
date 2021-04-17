<template>
  <div>
      <GridView :cols="3" :lineSpace="10" :v-margin="15">
      <div v-for="(item,index) in subcategories.list" :key="index" class="item">
       <a :href="item.link">
           <img :src="item.image" alt="" class="item-img">
           <div class="item-text">{{item.title}}</div>
       </a>
       
       
      </div>
      </GridView>
  </div>
</template>

<script>
import GridView from '../../../components/common/gridView/GridView'
export default {
name:'rightContent',
components:{
GridView
},
props:{
    subcategories:{
        type:Object,
        default(){
            return {}
        }
    }
}
}

</script>

<style scoped>
.panel img {
    width: 100%;
  }

  .item {
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 15px;
  }
</style>