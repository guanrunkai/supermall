<template>
  <div>
    <Scroll class="content" :probe-type="0">
     <ul><h1>分类</h1>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1></ul>
        
      
    </Scroll>
  </div>
</template>

<script>
import Scroll from "../../components/common/scroll/scroll";
export default {
  name: "profile",
  components: {
    Scroll,
  },
};
</script>

<style scoped>
.content {
  height: 100px;
 background-color: red;
}
</style>