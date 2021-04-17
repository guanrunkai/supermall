<template>
<div>
 <NavTabbar class="navtabbar" >
   <div slot="center" >商品分类</div>
   
   </NavTabbar>
   
   <div class="content">
  <LeftLine :categories="categories"
            @selectItem="selectItem"/>
    <Scroll :data="[categoryData]" 
            id="tab-content" 
            ref="scroll"
            @scroll="contentScroll"
            :probe-type="3">
 
<RightContent :subcategories="showSubcategory"/>
<TabControl :titles="['流行','新款','精选']" 
             @tabClick="tabClick"/>
<CategoryDetail :categoryData="showCategoryDetail"/>


    </Scroll>
<BackTop @click.native="backTopClick" 
            class="backTop"
            
            v-show="isShowBackTop"/>    
    </div>
    
  </div>
</template>

<script>
import Scroll from '../../components/common/scroll/scroll'
import NavTabbar from '../../components/common/navtabbar/NavTabbar'
import LeftLine from './components/leftLine'
import RightContent from './components/rightContent'
import TabControl from '../../components/content/tabControl/TabControl'
import CategoryDetail from './components/categoryDetail'
import BackTop from '../../components/content/backTop/backTop'

import {getCategory,getSubcategory,getCategoryDetail} from '../../network/category'
import {POP,NEW,SELL} from '../../common/normal'
import {tabControlMixin,itemListenerMinxin} from '../../common/mixin'
export default {
name:'category',
components:{
  NavTabbar,
  LeftLine,
  Scroll,
  RightContent,
  TabControl,
  CategoryDetail,
  BackTop
},
mixins:[tabControlMixin,itemListenerMinxin],
data() {
  return {
    categories:[],
    categoryData:{},
    currentIndex:-1,
    isShowBackTop:false
  }
},
created() {
     //1. 在创建dom节点之前 请求分类数据
     this._getCategory()

     
     
},
computed:{
  showSubcategory(){
    if(this.currentIndex===-1) return {}
    return this.categoryData[this.currentIndex].subcategories
    
  },
  showCategoryDetail(){
    if(this.currentIndex===-1) return []
    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
  }

},

methods: {
  _getCategory(){
      getCategory().then((res)=>{
        // 获取分类数据
        this.categories=res.data.data.category.list

        // 初始化每个类别的子数据
        for(let i=0;i<this.categories.length;i++){
          this.categoryData[i]={
            subcategories:{},
            categoryDetail:{
              'pop':[],
              'new':[],
              'sell':[]
            }
          }
        }
        // 3. 请求第一个分类数据
        this._getSubcategories(0)
      })
  },
  _getSubcategories(index){
        
    this.currentIndex=index

      const maitKey=this.categories[index].maitKey
     
    getSubcategory(maitKey).then((res)=>{
      
      this.categoryData[index].subcategories=res.data.data
      this.categoryData={...this.categoryData}
      this._getCategoryDetail(POP)
      this._getCategoryDetail(SELL)
      this._getCategoryDetail(NEW)
      
      

    })
  },
  _getCategoryDetail(type){
    
    const minikey=this.categories[this.currentIndex].miniWallkey
    
    getCategoryDetail(minikey,type).then((res)=>{
      
      
        this.categoryData[this.currentIndex].categoryDetail[type]=res
        
        this.categoryData={...this.categoryData}
    })
  },


  selectItem(index){
        this._getSubcategories(index)
        
  },
  backTopClick(){
    this.$refs.scroll.scrollTo(0,0,500)
  },
  contentScroll(position){
    this.isShowBackTop=-position.y>700

  }
},
}
</script>

<style scoped>
.wrapper{
  
  height: 150px;
}
.navtabbar{
  background-color: pink;
  color: white;
  font-size: 25px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  
}
.content{
  position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  display: flex;
}
#tab-content{
 height: 100%;
 flex: 1;   
 margin-left: 5px;
  }
  .backTop{
    z-index: 2;
  }
</style>