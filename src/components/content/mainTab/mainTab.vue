<template>
      <tab-bar>   <!--采用插槽的方式插入tab-bar-->
        <tab-bar-item path="/home">  <!--采用插槽的方式再插入tab-bar-item-->
          <!-- path 表示传递路径给tab-bar-item中，告知点击后路由的变化-->
          <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">   <!-- 原始图片-->
          <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt=""> <!-- 点击后原始图片-->
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
          <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
          <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/tabbar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
    export default {
      name: "mainTab",
      components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
