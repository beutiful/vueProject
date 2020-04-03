<template>
    <div class="good-list"  @click="itemClick">
      <img :src="showImage" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span></span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GoodsListItem",
      props:{
        goodsItem:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      methods:{
        imageLoad(){
          if(this.$route.path.indexOf('/home')){
            this.$bus.$emit('homeItemImageLoad')
          }else if(this.$route.path.indexOf('/detail')){
            this.$bus.$emit('detailItemImgLoad')
          }

        },
        itemClick(){
          this.$router.push('/detail/'+this.goodsItem.iid)
        }
      },
      computed:{
        showImage(){
          return this.goodsItem.image || this.goodsItem.show.img
        }
      }
    }
</script>
<!-- 0 0/15px 15px 斜杠左边是position，右边是宽高 -->
<style scoped>
  .good-list{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .good-list img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left:0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right:20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content:'';
    position: absolute;
    left: -15px;
    top:-1px;
    height: 15px;
    width: 15px;
    background: url("~@/assets/img/common/collect.svg") 0 0/15px 15px no-repeat;
  }
</style>
