<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>  <!--占位符-->
    </keep-alive>
    <main-tab></main-tab>
  </div>
</template>

<script>
import MainTab from '@/components/content/mainTab/mainTab'
export default {
  name: 'app',
  components:{
    MainTab
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
