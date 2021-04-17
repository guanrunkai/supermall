<template>
  <button class="check-button" :class="{check:isChecked}">
      <img src="../../../assets/img/cart/tick.svg" alt="">
  </button>
</template>

<script>
export default {
name:'CheckButton',
props:{
    isChecked:{
        type:Boolean,
        default:false
    }
}
}
</script>

<style scoped>
.check-button{
    
    border-radius: 50%;
    border: 2px solid #aaa;
    background-color: #fff;
    
}
.check{
    border-color: pink;
    background-color: pink;
}



</style>