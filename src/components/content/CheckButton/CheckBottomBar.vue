<template>
  <div class="bottom-bar">
      <div class="button-content">
<CheckButton 
class="check-button"
 @click.native="checkBtnClick" 
 :is-checked="isSelectAll"/>
全 选
      </div>
<div class="total-price">
    总金额 :<span>{{totalPrice}}</span>
</div>
<div class="caiculate" @click="calcClick">
    <span>去结算({{CheckLength}})</span>

</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckButton from '../../content/CheckButton/CheckButton'
export default {
name:'CheckBottomBar',
props:{
   itemInfo:{
       type:Object,
       default(){
           return {}
       }
   } 
},
components:{
CheckButton
},
computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
        return '￥'+this.$store.state.cartList.filter(item=>{
            return item.checked
        }).reduce((perValue,item)=>{
           return parseInt(perValue+item.price*item.count)
        },0)
    },
    CheckLength(){
        return this.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
        if(this.cartList.length===0) return false
        //判断多选按钮条件
        //1.使用filter函数

        return !(this.cartList.filter(item=>!item.checked).length)

        //2.使用find函数

        return !this.cartList.find(item=>!item.checked)

        //3 循环遍历

        for (let item of this.cartList){
            if(!item.checked){
                return false
            }
        }
        return true
    }
},
methods: {
    checkBtnClick(){
        if(this.isSelectAll){
            return this.cartList.forEach(item=>item.checked=false)
        }else{
            return this.cartList.forEach(item=>item.checked=true)
        }
        
    },
    calcClick(){
        if(!this.cartList.length){
                this.$toast.show('请选择购买的商品',2000)
            
            
        }
    }
},
}
</script>

<style scoped>
.bottom-bar{
    display: flex;
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
}
.button-content{
    display: flex;
    align-items: center;
}
.check-button{
width: 22px;
height: 24px;
margin-left: 11px;
line-height: 20px;
margin-right: 5px;
}
.total-price{
    margin-left: auto;
    font-size: 17px;
}
.total-price span{
    color: red;
} 
.caiculate{
    border-radius: 10%;
    border:solid 1px black;
    margin-left: 40px;
    position: relative;
    right: 0;
    background-color: red;
    color: #fff;
    
    
    
}

</style>