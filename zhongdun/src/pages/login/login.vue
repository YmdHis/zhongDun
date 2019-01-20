<template>
  <div class="loginContainer">
    <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
    <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
      <router-link to="/home" slot="right"><span class="register_btn">注册</span></router-link>
    </x-header>
    <div class="form_box">
       <div class="logo_icon">
        <img src="../../images/logo.jpg" alt="">
      </div>
      <div class="form_login">
         <section class="input_container">
          <input type="text" placeholder="请输入手机号" name="phone" maxlength="11">
        </section>
        <section class="input_container">
          <input type="text" placeholder="请输入密码" name="mobileCode">
        </section>
        <div class="login_btn">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader,Flexbox, FlexboxItem,} from 'vux'
  

  export default {
    components:{
      XHeader,
    },
    data(){
      return {
        borderColor: {
          borderColor: '#333'
        },   
      }
    },
    methods:{
      back(){
            this.$router.go(-1);//返回上一层
      },
    } 
  }

</script>

<style scoped>
body,html{
  background: #fff;
  width: 100%;
  height: 100%;
}
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
.register_btn{
  color: #5ebf83;
  fill:#5ebf83;
  font-size: .7rem;
}  
.form_box{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
   padding:0 1.5rem;
}
.logo_icon{
  width: 100%;
  padding: .8rem 0;
}
.logo_icon img{
  width: 2rem;
  display: block;
  margin:0 auto;
}
.form_login{
  width: 100%;
}
.input_container{
  border-bottom: 1px solid #e6e6e6;
  line-height: 2rem;
}
.input_container input{
  font-size: .6rem;
  width: 100%;
}
.login_btn{
  margin:1rem 0;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  background: #aedfc1;
  color: #fff;
  text-align: center;
  font-size: .6rem;
}
</style>
