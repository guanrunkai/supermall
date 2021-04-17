import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//1.安装插件
Vue.use(Vuex)

//2.创建Store对象
const state={

  cartList:[]
}

const store = new Vuex.Store({
  state,
  mutations,
    //mutation 唯一的目的是修改state中状态
    //mutation 中的每个方法尽可能完成的事件比较单一一点
  actions,
  getters
   
  
})

//3.挂在Vue实例上

export default store