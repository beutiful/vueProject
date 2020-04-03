<template>
  <div class="cart">
    <nar-bar class="cart-nav">
      <!--<div slot="center" >购物车({{cartLength}})</div>-->
      <div slot="center" >购物车({{length}})</div>
    </nar-bar>

    <cart-list></cart-list>

    <cart-buttom/>
  </div>
</template>

<script>
  import NarBar from '@/components/common/narbar/NarBar'
  import CartList from './childCart/CartList'
  import CartButtom from './childCart/CartButtom'
  import { mapGetters } from  'vuex'
    export default {
      name: "Cart",
      components:{
        NarBar,
        CartList,
        CartButtom
      },
      computed:{
        //两种语法
     //   ...mapGetters(['cartLength','cartList'])
        ...mapGetters({
          length:'cartLength',
          list:'cartList'
        })
      }
    }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
.cart-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
