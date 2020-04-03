<template>
  <div id="home" class="wrapper">
    <nar-bar class="home-nav"><div slot="center">购物车</div></nar-bar>
    <tab-control class="tab-control"  :titles="['流行','新款','精选']" @tabClick="tabClick"
                 ref="tabControl1"  v-show="isTabFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pullUpLoad="true"
            @pullingUp="loadMore"
            @scroll="contentScroll">
      <home-swiper :banners="banners" @imageLoad="imageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature/>
      <tab-control class="tab-control"  :titles="['流行','新款','精选']" @tabClick="tabClick"
                   ref="tabControl2"></tab-control>
      <goods-list :goods="showType"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

    import HomeSwiper from './childComps/HomeSwiper'
    import RecommendView from './childComps/RecommendView'
    import Feature from './childComps/Feature'

    import NarBar from "components/common/narbar/NarBar";
    import TabControl from 'components/content/tabControl/tabControl'
    import  GoodsList from 'components/content/goods/GoodsList'
    import Scroll from 'components/common/Scroll/Scroll'
    import BackTop from "components/content/backTop/backTop";

    import { getHomeMultidata,getHomeGoods } from "@/network/home";   /*方法，方便接收数据，在文件中home中定义方法*/
    import {debounce} from "@/common/utils";

    export default {
      name: "Home",
      data(){
        return{
          banners:[],
          recommends:[],
          goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]},
          },
          currentType:'pop',
          isShowBackTop:false,
          taboffsetTop:0,
          isTabFixed:false
        }
      },
      components: {
        BackTop,
        NarBar,
        TabControl,
        GoodsList,
        Scroll,

        HomeSwiper,
        RecommendView,
        Feature,
      },
      computed:{
        showType(){
          return this.goods[this.currentType].list
        }
      },
      created() {
          //1.请求多个数据（方法定义在下面）
        this.getHomeMultidata()    //下面请求轮播图和推荐的数据

        //2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
        },
      mounted(){
        //1.监听item中图片加载完成
        const refresh = debounce(this.$refs.scroll.refresh,50)
        this.$bus.$on('itemImageLoad',()=>{
          //  console.log('------')
         // this.$refs.scroll.refresh()
          refresh()
        })
      },
      methods:{
        /**
         * 事件监听相关的方法
         */
        imageLoad(){
          //2.获取tabControl的offsetTop
          //所有的组件都有一个属性$el：用于获取组件中的元素
          this.offsetTop = this.$refs.tabControl2.$el.offsetTop
        //  console.log(this.$refs.tabControl.$el.offsetTop)
        },

        tabClick(index){
          switch (index) {
            case 0 :
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break
            case 2:
              this.currentType = 'sell'
              break
          }
          this.$refs.tabControl1.currentIndex = index
          this.$refs.tabControl2.currentIndex = index
        },
        /*返回顶部*/
        backClick(){
          this.$refs.scroll.scrollTo(0,0)
        },

        /*滑动*/
        contentScroll(position){
          //1.判断BackTop是否显示
          this.isShowBackTop = (-position.y) > 1000

          //2.决定tabControl是否吸顶（position：fixed）
          this.isTabFixed = ( -position.y)>this.offsetTop
        },

        /*上拉加载*/
        loadMore(){
       //    console.log('上拉加载更多')
          this.getHomeGoods(this.currentType)
        },
        /*
        网络请求
         */
        getHomeMultidata(){
            getHomeMultidata().then(res=>{              /*使用then是因为请求的返回值是一个promise对象（来自network/request.js）*/
              this.banners = res.data.banner.list     //请求轮播图数据
              this.recommends = res.data.recommend.list  //请求下面推荐的图片数据
            })
          },
        getHomeGoods(type){
            const page = this.goods[type].page + 1
            getHomeGoods(type,page).then(res =>{
              this.goods[type].list.push(...res.data.list)
        //      console.log(this.goods[type].list)
              this.goods[type].page += 1

              this.$refs.scroll.finishPullUp()
            })
        }
      }

    }
</script>

<style scoped>
  #home{
   /* padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
.home-nav {
  /* background-color: var(--color-tint);*/
  background-color: #ff8198;
  color: #fff;
  /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动*/
  /*position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;*/
}
  /*.tab-control{
    position: sticky;
    top:44px;
    z-index: 9;
  }*/
  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left:0;
    right: 0;
  }
.tab-control{
  position: relative;
  z-index: 9;
}
</style>
