<template>
  <div id="personFild">
    <div class="person_head">
      <img src="../../images/person_bg.png" alt="" class="person_head_bg">
      <div class="person_login">
        <router-link to="/login" class="login_a" v-if="this.$route.query.isLogin==false">
          <img src="../../images/user_img.png" alt="">
          <span>立即登录</span>
        </router-link>
        <p v-else class="login_a">
           <img src="../../images/user_img.png" alt="">
          <span>{{this.$route.query.username}}</span>
        </p>
      </div>
    </div>
    <div class="person_box person_icon_box">
      <flexbox :gutter="0">
        <flexbox-item>
          <div class="person_listIcon">
            <div class="person_list_img">
              <img src="../../images/person_icon1.png" alt="">
            </div>
            <span>我的机构</span>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="person_listIcon">
            <div class="person_list_img">
              <img src="../../images/person_icon2.png" alt="">
            </div>
            <span>我的课程</span>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="person_listIcon">
            <div class="person_list_img">
              <img src="../../images/person_icon3.png" alt="">
            </div>
            <span>我的试题</span>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="person_listIcon">
            <div class="person_list_img">
              <img src="../../images/person_icon4.png" alt="">
            </div>
            <span>我的动态</span>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="person_box" style="margin-top: -.5rem;">
      <group>
        <cell title="我的订单" is-link style="font-size: .6rem;">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon11.png">
        </cell>
        <cell title="我的收藏" is-link style="font-size: .6rem;">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon22.png">
        </cell>
        <cell title="我的点赞" is-link style="font-size: .6rem;">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon33.png">
        </cell>
        <cell title="我的评论" is-link style="font-size: .6rem;">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon44.png">
        </cell>
      </group>
    </div>
    <div class="person_box" style="margin-top: -.5rem;">
      <group>
        <cell title="我的设置" is-link style="font-size: .6rem;">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon55.png">
        </cell>
      </group>
    </div>
    <div class="login_exit" @click="loginout">退出账号</div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import footNav from 'src/components/footNav'
import {Flexbox, FlexboxItem, Group,Cell,} from 'vux'

export default {
   data () {
    return {
      }
    },
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    footNav
  },
  methods:{
    gotoAddress(path){
      this.$router.push(path)
    },
     //退出登录
    loginout() {
        //清空当前用户数据
        this.$route.query.username = "";
        alert("退出成功！");
        //登录或注册入口显示
        this.$route.query.isLogin = true;
        
    },
  }
}
</script>
<style>
.person_head{
  width: 100%;
  height:7rem;
  position:relative;

}
.person_head_bg{
  position: absolute;
  width: 100%;
  top:0;
  left:0;
  height: 7rem;
}
.person_login{
  position: absolute;
  width: 100%;
  z-index: 99;
  text-align: center;
  padding-top: 1.5rem;
}
.person_login img{
  width: 3rem;
  display: block;
  margin: 0 auto;
}
.login_a span{
  font-size: .6rem;
  color: #fff;
}
.person_box{
  background: #fff;
}
.person_icon_box{
  padding: .6rem ;
}
.person_listIcon{
  text-align: center;
}
.person_list_img{
  width: 1.2rem;
  height: 1.8rem;
  line-height: 2rem;
  margin: 0 auto;
}
.person_list_img img{
  width: 100%;
 vertical-align: middle;
}
.person_listIcon span{
  font-size: .6rem;
  color: #4e4e4e;
}
.login_exit{
  background: #ff4b4b;
  width: 5rem;
  color: #fff;
  font-size: .6rem;
  margin: 1rem auto;
  text-align: center;
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: .2rem;
}
</style>