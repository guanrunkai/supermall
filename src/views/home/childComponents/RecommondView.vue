<template>
  <div class="recommond">
    <div v-for="item in recommends" :key="item.acm" id="recommond-div">
           <a :href="item.link"></a>
           <img :src="item.image" alt="" class="recommond-img" @load="recommondimageload">
           <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
name:'RecommondView',
data() {
    return {
        isLoad:false
    }
},
props:{
    recommends:{
        type:Array,
        default(){
            return []
        }
    },
    
},
methods: {
    recommondimageload(){
        if(!this.isLoad){
            this.$bus.$emit('recommondLoad')
            this.isLoad=true
        }
    }
},
}
</script>

<style scoped>
.recommond{
    display: flex;
    padding: 10px 0 10px 0;
    width: 100%;
    border-bottom: 5px solid #eee;
    border-top: 5px solid #eee;
    /* background-color: #A8A8A8; */
    border-left: solid 1px #eee;
    border-right: solid 1px #eee;
     cursor: pointer;
     margin-top: -2px;
     
}
.recommond-img{
    width: 80px;
    height: 80px;
   
    
}
#recommond-div{
    flex: 1;
    text-align: center;
    font-size: 5px;
    color: #666;
    
    
    
    
}
</style>