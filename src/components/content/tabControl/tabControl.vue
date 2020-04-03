<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         :key="index"
         class="tab-control-item"
    :class="{active:index === currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
      props:{
        titles:{
          type:Array,
          default(){
            return []
          }
        }
      },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){         /*点击变化下标*/
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align:center ;
    background-color: #fff;
    height: 40px;
  }
  .tab-control-item{
    flex:1;
    line-height:44px;
  }
  .tab-control-item span{
    padding: 3px;
  }
  .active{
    color:var(--color-high-text)
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
