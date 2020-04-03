<template>
    <div class="tab-bar-item" @click="linkClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>  <!-- 原始图片插槽--><!-- 外加一个div来控制slot中样式的变化，如果不加，该部分将会被替换掉，无法起作用-->
      <div v-else><slot name="item-icon-active"></slot></div>     <!-- 点击后图片插槽-->
      <div :style="activeStyle"><slot name="item-text"></slot></div>  <!-- 文字：动态添加style可以改变字体的色号（可以从应用处传递数据过来高边）-->
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return{
           // isActive:true
          }
      },
      computed:{
       isActive(){
         return  this.$route.path.indexOf(this.path) !== -1
       },
        activeStyle(){
         return this.isActive ?{color:this.activeColor}:{}
        }
      },
      methods:{
          linkClick(){
            this.$router.push(this.path)
          }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
