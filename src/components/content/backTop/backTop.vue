<template>
    <div class="backtop">
      <img src="@/assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "backTop"
    }
</script>

<style scoped>
.backtop{
  position: fixed;
  bottom: 50px;
  right:10px;
}
  .backtop img{
    width:44px;
    height: 44px;
  }
</style>
