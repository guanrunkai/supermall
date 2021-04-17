<template>
<Scroll>
  <div class="container">
     
      <div class="item" 
      :class="{active:index===currentIndex}"
      v-for="(item,index) in categories"
      :key="item.acm"
      @click="itemClick(index)"
      >
      <span>{{item.title}}</span>
      </div>
     
  </div>
   </Scroll>
</template>

<script>

import Scroll from '../../../components/common/scroll/scroll'
export default {
name:'leftLine',
components:{
   
    Scroll
},
data() {
    return {
        currentIndex:0
    }
},
props:{
    categories:{
        type:Array,
        default(){
            return []
        }
    }
},
methods: {
    itemClick(index){
       
        this.currentIndex=index
        this.$emit('selectItem',index)
        
    }
},
}
</script>

<style scoped>
.container{

    width: 100px;
    height: calc(100% - 125px);
    margin-top: 45px;
    margin-bottom: 49px;
   
}
.item{
    text-align: center;
    display: flex;
     width: 100px;
    height: 60px;
    
    background-color: #f6f6f6;
    z-index: 1;
}
.item span{
    font-size: 20px;
    margin-top: 10px;
    flex: 1;
    
    
}
.actice{
   font-weight: 700;
   color:#ff5777;
   background-color: #fff;
}

</style>