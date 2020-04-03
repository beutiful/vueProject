<template>
    <div>
      <swiper class="oneswiper">
        <swiper-item v-for="(item,index) in topImages" :key="index">
          <img :src="item" alt="">
        </swiper-item>
      </swiper>
    </div>
</template>

<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper'
    export default {
      name: "DetailSwiper",
      components:{
        SwiperItem,
        Swiper
      },
      props:{
          topImages:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
.oneswiper{
  height: 400px;
  overflow: hidden;
}
</style>
