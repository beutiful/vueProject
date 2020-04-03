<template>
    <div >
      <nar-bar>
        <div slot="left" @click="backClick()" class="backbtn">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="titles">
          <div v-for="(item,index) in titles" :key="index" class="item"
          :class="{active:currentIndex === index}" @click="titleClick(index)">{{item}}</div>
        </div>
      </nar-bar>
    </div>
</template>

<script>
  import NarBar from '@/components/common/narbar/NarBar'
    export default {
      name: "childDetatil",
      components:{
          NarBar
      },
      data(){
        return{
          titles:['商品','参数','评价','推荐'],
          currentIndex:0
        }
      },
      methods:{
        titleClick(index){
          this.currentIndex = index
          //console.log(index)
          this.$emit('titleClick',index)
        },
        backClick(){
          this.$router.back()
        }
      },
    }
</script>

<style scoped>
.titles{
  display: flex;
}
  .item{
    flex:1;
  }
  .backbtn{
    text-align: center;
    margin-top:6px;
  }
  .active{
    color:var(--color-tint)
  }
</style>
