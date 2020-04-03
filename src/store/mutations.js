import {
  ADD_COUNTER,
  ADD_TO_CART
}from './mutations-type'

export default {
  /* addCart(state,payload){
     //payload新增商品
   /*  let oldProduct = null
     for(let item of state.cartList){
       if(item.iid === payload.iid){
         oldProduct = item
       }
     }
   //查找之前数组中是否有该商品
     let oldProduct = state.cartList.find(item =>item.iid === payload.iid)
     //判断oldProduct
     if(oldProduct){
       oldProduct.count +=1
     }else{
       payload.count =1
       state.cartList.push(payload)
     }
   }*/


  //mutations唯一的目的是修改state中状态的值
  //mutations中的每个方法尽可能完成的事情比较单一一点
  [ADD_COUNTER](state,payload){
    payload.count ++
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}
