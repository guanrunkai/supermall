import { debounce } from "./utils";
import BackTop from "../components/content/backTop/backTop.vue";
import {POP,NEW,SELL} from './normal'

export const itemListenerMinxin = {
  data() {
    return{
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted() {
    // 防抖
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      //利用 $bus 事件监听，去刷新 scroll的高度
      this.newRefresh()
    };
    this.$bus.$on('itemImgLoad',this.itemImgListener)
   
   
  }
};

export const backTopMixin={
  components:{
BackTop
  },
  data() {
    return {
      isShowBacktop:false
    }
  },
  methods: {
    topClick(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    listenShowBackTop(position){
      this.isShowBacktop = -position.y > 1000
    }
  },
}
export const tabControlMixin={
  data:function(){
    return {
      currentType:POP
    }
  },
  methods:{
    tabClick(index){
      switch(index){

        case 0:
          this.currentType=POP
          break

        case 1:
          this.currentType=NEW

          break
        
        case 2:

          this.currentType=SELL

          break

      }
      console.log(this.currentType)
    }
  }
}