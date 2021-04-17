<template>
  <div class="tab-bar-item" @click="isClick">
    <div v-if="isActive">
    <slot name="item-icon"></slot>  
    </div>
<div v-else>
  <slot name="item-icon-active"></slot>
</div>
<div :style="isActiveColor">
<slot name="item-text"></slot>
</div>
  </div>
</template>

<script>
export default {
name:'TabBar-item',
props:{
path:String,
activeColor:{
  type:String,
  default:'red'
}
},
data() {
  return {
    // isActive:false,
  
  }
},
computed:{
isActive(){
  return this.$route.path.indexOf(this.path)!==-1
},
isActiveColor(){
return this.isActive?{color:this.activeColor}:{}
}
},
methods: {
  isClick(){
  this.$router.replace(this.path).catch(err=>{})//catch解决了 重复点 报错问题

  }
},
}
</script>

<style>
.tab-bar-item{
  height: 49px;
  flex: 1;
  font-size: 11px;
  /* //调节字体和图片之间的距离 ⬇ */
  vertical-align: middle;
 
}
.tab-bar-item img{
    width: 35px;
    height: 25px;
    margin-top: 3px;
}
.active{
  color: red;
}
</style>