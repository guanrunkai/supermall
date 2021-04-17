import{
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default{
     //payload是新添加的商品
    // let OldProduct=null
    // for(let item of state.cartList){
    //     if(item.iid===payload.iid){
    //         OldProduct=item
    //     }
    // }
    [ADD_COUNTER](state, payload) {
        payload.count++
      },
     [ADD_TO_CART](state, payload) {
       payload.checked=true
        state.cartList.push(payload)
      }
  
}