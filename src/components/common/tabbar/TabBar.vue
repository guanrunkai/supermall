<template>

  <div id="tab-bar">
<slot/>

  </div>
</template>

<script>
export default {
name:'TabBar'
}
</script>

<style>
#tab-bar{
  display: flex;
  text-align: center;
  position: fixed;
   left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: -3px 0 1px rgba(100, 100, 100, 0.2)
}
</style>