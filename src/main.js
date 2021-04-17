import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import FastClick from 'fastclick'
import VuelazyLoad from 'vue-lazyload'
import toast from './components/common/toast'
Vue.config.productionTip = false
//添加事件总线对象
Vue.prototype.$bus=new Vue()
//安装toast插件
Vue.use(toast)


//解决移动端300ms延迟
FastClick.attach(document.body)

//使用图片懒加载插件 显示加载图片 功能为loading
Vue.use(VuelazyLoad,{
  loading:require('./assets/img/common/bgc.png')
})

new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
