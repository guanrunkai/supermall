<template>
  <div class="nav-tab">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center"> 
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavTabbar",
};
</script>

<style scoped>

.nav-tab{
  display: flex;   
  box-shadow: 0 1 1 rgba(100, 100, 100, .1);
  text-align: center;
  height: 44px;

}
.center{
    height: 44px;
   
    flex: 1;
    line-height: 44px;
   

}
.left,.right{
    width: 60px;
  
}
</style>