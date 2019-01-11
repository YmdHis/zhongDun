<template>
<div class="footer_nav">
  <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
    <img src="../images/banner.png" alt="">
    <span>报名</span>
  </section>
   <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
    <img src="../images/banner.png" alt="">
    <span>学习</span>
  </section>
  <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item" style="padding: 0;">
    <div class="home-img">
      <img src="../images/banner.png" alt="">
    </div>
  </section>
  <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
    <img src="../images/banner.png" alt="">
    <span>发现</span>
  </section>
  <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
    <img src="../images/banner.png" alt="">
    <span>我的</span>
  </section>
    
    </div>
</template>

<script>

export default {
 
  data () {
    return {
    }
  },
  methods:{
    gotoAddress(path){
        this.$router.push(path)
      }
  }
}
</script>

<style>
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
    background: url(../images/footer_navBg.png) no-repeat center;
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