<template>
  <div class="feature">
<a href="https://act.mogujie.com/zzlx67">
<img src="../../../assets/img/home/recommend_bg.jpg" alt="" @load="imageload"></a>
  </div>
</template>

<script>
export default {
name:'FeatureView',
data() {
  return {
    isLoad:false
  }
},
methods: {
  imageload(){
    if(!this.isLoad){
      this.$bus.$emit('FeatureLoad')
      this.isLoad=true
    }
  }
},
}
</script>

<style>
.feature img{
width: 100%;
height: 200px;
cursor: pointer;
}
</style>