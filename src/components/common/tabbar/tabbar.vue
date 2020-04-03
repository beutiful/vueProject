<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #F6F6F6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -4px 1px rgba(100,100,100,.08);
  }

</style>
