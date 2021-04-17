<template>
<div>
    <Swiper class="detailSwiper">
      <SwiperItem v-for="item in topImages" :key="item">
          <img :src="item" alt="">
      </SwiperItem>
  </Swiper>
</div>
  
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
import SwiperItem from '../../../components/common/swiper/SwiperItem'
export default {
name:'DetailSwiper',
components:{
    Swiper,
    SwiperItem
},
props:{
    topImages:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style scoped>
.detailSwiper{
    height: 300px;
    overflow: hidden;
}
</style>