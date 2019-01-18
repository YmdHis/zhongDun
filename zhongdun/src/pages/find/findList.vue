<template>
    <div id="findlist">
      <div class="header_box header_find clear ">
        <div class="header_address" @click="chooCity()">
           <section class="header_address_a ellipsis">
            <img src="../../images/add_icon.png" alt="" class="header_address_icon">
            武汉
         </section>
        </div>
        <div class="header_txt">
          众盾安全
        </div>
        <div class="header_login">
           <router-link to="/login" class="header_login_a">
            <img src="../../images/user.png" alt="" class="header_login_user">
         </router-link>
        </div>
      </div>
      <div class="module_block">
      <div class="module_block_list">
         <div class="module_block_a">
            <img src="../../images/find_icon1.png" alt="">
            <p>电工</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon2.png" alt="">
            <p>焊工</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon3.png" alt="">
            <p>制冷空调</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon4.png" alt="">
            <p>高处作业</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon5.png" alt="">
            <p>危险品</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon6.png" alt="">
            <p>一般企业</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/icon7.png" alt="">
            <p>危化品生产</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/icon8.png" alt="">
            <p>同城</p>
         </div>
      </div>
    </div>
    </div>   
</template>

<script>
    import { XHeader} from 'vux'
    export default {
        components:{
             XHeader
         },
    	data(){
            return{
                borderColor: {
                borderColor: '#333'
              },
            }
        },
        mounted(){

        },
        computed: {
        },
        methods: {
             back(){
                this.$router.go(-1);//返回上一层
            },
        },

    }

</script>
<style scoped>
.goBack {
  position: absolute;
  width: 12px;
  height: 12px;
  border-style: solid;
  border-color: white;
  border-width: 1px 0 0 1px;
  -webkit-transform: rotate(315deg);
  transform: rotate(315deg);
  top: 5px;
}
.header_login_user{
  height: .9rem;
  vertical-align: middle;
  }
  .header_find{
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
  }
  .header_box{
    position: relative;
    padding: .5rem;
    width: 100%;
  }
  .header_address{
    float: left;
    font-size: .7rem;
    width: 3.2rem;
    height:1.2rem;
    line-height: 1.2rem;
    padding-left: .5rem;
  }
  .header_address_icon{
    height: .6rem;
    vertical-align: middle;
  }
  .header_address_a{
    color: #808080;
    font-size: .6rem;
  }
  .header_txt {
   float: left;
    font-size: .7rem;
    width: 8.8rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
  }
  .header_login{
    float: right;
    width: 2rem;
    line-height: 1rem;
    text-align:center;
  }
  .header_login_a{
     font-size: .7rem;
     color: #5ebf83;
  }
  .module_block{
 /*   padding: 0 20px;*/
    background: #fff;
  }
  .module_block_list{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    margin-bottom: .5rem;
    padding-bottom: .5rem;
     border-bottom: 1px solid #e9e9e9;

   }
   .module_block_a{
    width: 25%;
    padding-top: .5rem;
   /* display: -ms-flexbox;
    display: flex;*/
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
   }
   .module_block_a img{
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
   }
   .module_block_a p{
    font-size: .5rem;
    color: #343434;
    line-height: 1rem;
   }
</style>
