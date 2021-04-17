<template>
<div id="app">
  <keep-alive exclude="Detail">
   <router-view></router-view>
  </keep-alive>
 
<MainTabBar/>
</div>
 
</template>

<script>
import MainTabBar from'../src/components/content/MainTabBar/MainTabBar'


export default {
  name: 'App',
  components: {
  MainTabBar,
 

  },
  


}
</script>

<style>
@import url('../src/assets/css/normalize.css');
</style>
