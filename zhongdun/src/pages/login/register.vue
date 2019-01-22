<!--  -->
<template>
<div id="register" class="register-container">
    <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
    <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
    </x-header>
    <div class="container">
        <div class="logo-container"><img src="../../images/logo.jpg" alt="logo" class="img-logo"></div>
        
        <div class="form">
            <div class="form-item">
                <img src="../../images/sign1.png" alt="sign" class="img-sign">
                <input type="text" placeholder="请输入手机号" class="form-inpt">
            </div>
            <div class="form-item">
                <img src="../../images/sign2.png" alt="sign" class="img-sign">
                <input type="text" placeholder="请输入验证码" class="form-inpt">
                <div class="yzm-btn">获取验证码</div>
            </div>
            <div class="form-item">
                <img src="../../images/sign3.png" alt="sign" class="img-sign">
                <input type="text" placeholder="请设置密码" class="form-inpt">
            </div>
            <div class="form-item">
                <img src="../../images/sign4.png" alt="sign" class="img-sign">
                <input type="text" placeholder="再次输入密码" class="form-inpt">
            </div>
        </div>
         <div class="login-btn">在线登录</div>
         <div class="khxy"><input type="radio" checked="checked">同意客户协议</div>
         <div class="register-btn">注册</div>
    </div>
    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { XHeader } from 'vux'

export default {
//import引入的组件需要注入到对象中才能使用
components: {XHeader},
data() {
//这里存放数据
return {
    borderColor: {
            borderColor: '#333'
    },
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    back(){
        this.$router.go(-1);//返回上一层
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.register-container{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
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
.container{
    padding: 1rem 1.5rem 0;
}
.logo-container{
    width: 100%;
    text-align: center;
}
.img-logo{
    width: 3rem;
    height: 3rem;
}
.form{
    padding-top: .8rem;
}
.form-item{
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: .5rem;
}
.img-sign{
    width: 1.2rem;
    height: 1.2rem;
    float: left;
    vertical-align: middle;
    padding-top: .3rem;
}
.form-inpt{
    font-size: .7rem;
    padding: .5rem 0 .3rem .8rem;
    width: 50%;
}
.yzm-btn{
    float: right;
    background: #5ebf83;
    color: #fff;
    font-size: .6rem;
    height: 1.5rem;
    padding: .3rem .2rem;
    margin-top: .3rem;
    border-radius: 5px;
}
.login-btn{
    font-size: .7rem;
    float: right;
    padding-top: .5rem;
}
.khxy{
    clear: both;
    font-size: .7rem;
    padding-top: .5rem;
}
.register-btn{
    width: 100%;
    background: #5ebf83;
    height: 2rem;
    text-align: center;
    color: #fff;
    font-size: .8rem;
    line-height: 2rem;
    margin-top: 1.5rem;
    border-radius: 10px;
}
</style>