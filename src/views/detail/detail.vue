<template>
    <div id="detail" >
      <child-nar-bar class="detail-nar" @titleClick="titleClick" ref="detailNar"></child-nar-bar>
     <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
     <!--  <div>{{$store.state.cartList.length}}</div> -->
       <detail-swiper :top-images="topImages"></detail-swiper>
       <detail-base-info :goods="goods"></detail-base-info>
       <detail-shop-info :shop="shop"></detail-shop-info>
       <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
       <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
       <detail-common-info ref="comment" :common-info="commonInfo"></detail-common-info>
       <goods-list ref="recomment" :goods="recomment"></goods-list>
     </scroll>
      <detail-buttom-nar @addToCart="addCart"></detail-buttom-nar>
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
     <!-- <toast :message="message" :show="show"></toast> -->
    </div>
</template>

<script>
  import childNarBar from './childcommon/childNarBar'
  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
  import DetailSwiper from './childcommon/DetailSwiper'
  import DetailBaseInfo from './childcommon/DetailBaseInfo'
  import DetailShopInfo from './childcommon/DetailShopInfo'
  import Scroll from '@/components/common/Scroll/Scroll'
  import DetailGoodsInfo from './childcommon/DetailGoodsInfo'
  import DetailParamInfo from './childcommon/DetailParamInfo'
  import DetailCommonInfo from './childcommon/DetailCommonInfo'
  import GoodsList from '@/components/content/goods/GoodsList'
  import DetailButtomNar from './childcommon/DetailButtomNar'
  import {itemListenerMixin} from '@/common/mixin'
  import BackTop from "@/components/content/backTop/backTop";

 // import toast from '@/components/common/toast/toast'

 // import { mapActions } from 'vuex'
  export default {
      name: "detail",
      components:{
        childNarBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommonInfo,
        GoodsList,
        DetailButtomNar,
        BackTop,
   //     toast
      },
    mixins:[itemListenerMixin],
        data(){
          return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commonInfo:{},
            recomment:[],
            themeTopYs:[],
            currentIndex:0,
            isShowBackTop:false,
        /*    message:'',
            show:false*/
          }
        },
      created() {
        //1.保存传入的iid
          this.iid = this.$route.params.iid

        //2.根据iid请求详情数据
        getDetail(this.iid).then(res=>{
       //  console.log(res)
          //1.获取顶部的图片轮播数据
          const data = res.result
          this.topImages = data.itemInfo.topImages

          //3.获取商品信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

          //4.创建店铺信息的对象
          this.shop = new Shop(data.shopInfo)

          //5.保存商品的详细信息
          this.detailInfo = data.detailInfo

          //6.获取参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //  console.log(this.paramInfo)


          //7、取出评论的信息
          if(data.rate.cRate !== 0){
            this.commonInfo = data.rate.list[0]
          }
        })

        getRecommend().then(res=>{
         // console.log(res)
          this.recomment = res.data.list
        })
      },
    methods:{
      //  ...mapActions(['addCart']),
      imageLoad(){
       // this.$refs.scroll.refresh()
        this.newRefresh()
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recomment.$el.offsetTop)

      //  console.log(this.themeTopYs)
      },
      titleClick(index){
       // console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index],200)
       // console.log(-this.themeTopYs[index])
      },
      contentScroll(position){
      //  console.log(position);
        //1.获取y值
        const positionY = -position.y

        let length = this.themeTopYs.length
        for(let i=0;i<length;i++){
          if(this.currentIndex !==i &&((i<length - 1 && positionY >= this.themeTopYs[i] && positionY<this.themeTopYs[i+1] )||
            (i === length - 1 && positionY >= this.themeTopYs[i]))){
            this.currentIndex = i
        //    console.log(this.currentIndex)
            this.$refs.detailNar.currentIndex = this.currentIndex
          }
        }
        this.isShowBackTop = (-position.y) > 1000

      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      addCart(){
        //1.获取购物车需要展示的信息
        const product ={}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
   //     console.log(product);

        //2.将商品添加到购物车里
    //    this.$store.commit('addCart',product)


       this.$store.dispatch('addCart',product).then(res =>{
     /*    this.show = true
         this.message = res

          console.log(res)
         setTimeout(()=>{
           this.show = false
           this.message = ''
         },1500)*/
          this.$toast.show(res,1500)
        })
     /*this.addCart(product).then(res =>{
       console.log(res)
     })*/
      }
    }
    }
</script>

<style scoped>
#detail{
  position: relative;
  background-color: #ffffff;
  z-index: 9;
  height: 100vh;
}
  .content{
    height: calc(100% - 44px - 49px);
  }
  .detail-nar{
    position: relative;
    z-index: 9;
    background-color: white;
  }
</style>
