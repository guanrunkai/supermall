<template>
   <Swiper >
       <SwiperItem v-for="item in banners" :key="item.acm">
           <a :href="item.link"></a>
           <img :src="item.image" alt="" @load="imageLoad">
       </SwiperItem>
   </Swiper>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
import SwiperItem from '../../../components/common/swiper/SwiperItem'
export default {
name:'HomeSwiper',
components:{
    Swiper,
    SwiperItem
},
data() {
    return {
        isLoad:false
    }
},
props:{
    banners:{
        type:Array,
        defualt(){
            return []
        }
    }
},
methods: {
    imageLoad(){
        if(!this.isLoad){
            this.$emit('swiperimgload')
            this.isLoad=true
        }
        
       
    }
},

}
</script>

<style>

</style>