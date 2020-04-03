<template>
    <div class="bottom-bar">
      <div class="check-content">
        <check-button
          :checked="isCheckAll"
          class="check-button"
          @click.native="checkClick"/>
        <span>全选</span>
      </div>

      <div class="price">
        合计：{{totalPrice}}
      </div>

      <div class="cacluate" @click="calcClick">
        去计算({{checkLength}})
      </div>
    </div>
</template>

<script>
  import CheckButton from './CheckButton'
  import { mapGetters } from  'vuex'
    export default {
      name: "CartButtom",
      components:{
        CheckButton
      },
      computed:{
        ...mapGetters(['cartList']),
        totalPrice(){
          return '￥' + this.cartList.filter(item =>{
            return item.checked
          }).reduce((prevalue,item)=>{
            return prevalue + item.price * item.count
          },0).toFixed(2)
        },
        checkLength(){
          return this.cartList.filter(item=>item.checked).length
        },
        isCheckAll(){
          if(this.cartList.length === 0) return false
          //1.使用filter
          return !(this.cartList.filter(item =>!item.checked).length)

          //2.使用find
       //   return !this.cartList.find(item =>!item.checked)

          //3.普通遍历
          /*for(let item of this.cartList){
            if(!item.checked){
              return false
            }
          }
          return true*/
        }
      },
      methods:{
        checkClick(){
       //   console.log('hhhh')
          if(this.isCheckAll){ //全部选中
            this.cartList.forEach(item => item.checked = false)
          }else{ //部分或全部不选中
            this.cartList.forEach(item => item.checked=true)
          }
        },
        calcClick(){
          if(!this.isCheckAll){
            this.$toast.show('请选择购买商品',1500)
          }
        }
      }
    }
</script>
<style scoped>
.bottom-bar{
  display: flex;
  height: 40px;
  position: relative;
  background-color: #eee;
  line-height: 40px;
}
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 20px;
    width: 20%;
  }
  .check-button{
    display: flex;
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .price{
    display: flex;
    margin-left: 30px;
    flex: 1;
  }
  .cacluate{
    background-color: var(--color-tint);
    width: 25%;
    display: flex;
    justify-content: center;
  }
</style>
