<template>
  <div id="personFild">
    <div class="person_head">
      <img src="../../images/person_bg.png" alt="" class="person_head_bg">
      <div class="person_login">
        <router-link to="/login" class="login_a">
          <img src="../../images/user_img.png" alt="">
          <span>立即登录</span>
        </router-link>
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
    }
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
.footer_nav{
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    background: url(../../images/footer_navBg.png) no-repeat center;
    background-size: 100% 100%;
    height: 2.6rem;
  }
  .footer_nav_item{
    -ms-flex: 1;
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
    padding-top: .7rem;
  }
  .footer_nav_item img{
    width: 1rem;
    height: 1rem;
    margin-top: .1rem;
    fill: #ccc;
  }
  .footer_nav_item span{
    font-size: .45rem;
    color: #656565;
  }
  .footer_nav_item .home-img{
   background: #5ebf83;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 5px solid #fff;
  }
  .footer_nav_item .home-img img{
    display: block;
    margin: 0 auto;
    padding-top: .5rem;
  }
  .footer_nav_item .home-img span{
    color: #fff;
  }
</style>