<template>
  <div>
    <NavTabbar>
        <div slot="left" class="title-left" @click="leftClick">
           <div>👈</div> 

        </div>
      <div slot="center"  class="title">
        <div class="title-item"  
        v-for="(item,index) in titles" 
        :key="item" 
        :class="{active:index===currentIndex}"
        @click="titleItemClick(index)">
          <span>{{ item }}</span>
        </div>
      </div>
    </NavTabbar>
  </div>
</template>

<script>
import NavTabbar from "../../../components/common/navtabbar/NavTabbar";
export default {
  name: "DetailNavBar",
  components: {
    NavTabbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    }
    
  },
    methods: {
       titleItemClick(index){
           this.currentIndex=index
           this.$emit('titleClick',index)
       },
       leftClick(){
           this.$router.back()
       }
  },
   
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13.5px;
}
.title-item {
  flex: 1;
}
.active{
    color: pink;
    
}
.active span{
    border-bottom: 1px solid pink;
}
.title-left div{
    margin-top: 10px;
}
</style>