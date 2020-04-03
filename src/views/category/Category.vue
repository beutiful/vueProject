<template>
  <div class="wrapper" ref="aaa">
    <div>
      <ul class="content">
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>222222</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Category",
      data(){
          return {
            scroll:null
          }
      },
      mounted() {
          this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType:3,
            pullUpLoad:true
          })
       /* this.scroll.on('scroll',(position)=>{
     //     console.log(position)
        })
        this.scroll.on('pullingUp',()=>{
      //    console.log('加载更多')
        })*/
      }
    }
</script>

<style scoped>
.wrapper{
  background-color: #eb7350;
  height: 150px;

  overflow: hidden;
}
</style>
