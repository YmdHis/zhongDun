<template>
  <div id="home">
    <div class="banner"></div>
    <div class="module_block">
      <div class="module_block_list">
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
      </div>
    </div>
    <div class="module_block hot_module">
      <div class="hot_title">
        <h2>
          热门中心
        </h2>
        <router-link to="/enter" class="more_link">全部></router-link>
      </div>
      <div class="module_block_list hot_module_list">
        <router-link to="/enter" class="hot_module_a">
            <p>在线报名</p>
           <img src="../../images/banner.png" alt="">
        </router-link>
        <router-link to="/enter" class="hot_module_a">
            <p>在线报名</p>
           <img src="../../images/banner.png" alt="">
        </router-link>
         <router-link to="/enter" class="hot_module_a">
            <p>在线报名</p>
           <img src="../../images/banner.png" alt="">
        </router-link>
         <router-link to="/enter" class="hot_module_a">
            <p>在线报名</p>
           <img src="../../images/banner.png" alt="">
        </router-link>
         <router-link to="/enter" class="hot_module_a">
            <p>在线报名</p>
           <img src="../../images/banner.png" alt="">
        </router-link>
      </div>
    </div>
     <div class="module_block home-last">
      <tab :line-width="1" active-color='#5ebf83' custom-bar-width="50px" >
        <tab-item selected @on-item-click="onClick('news')">推荐</tab-item>
        <tab-item @on-item-click="onClick('course')">课程精选</tab-item>
        <tab-item  @on-item-click="onClick('video')">免费试听</tab-item>
      </tab>
      <div class="grid-demo" v-if="active_tab=='news'">
        <div class="news_list" v-for="item in newslist">
          <div class="news_title">
            <h3 >{{item.name}}</h3>
            <span>全部></span>
          </div>
          <ul>
            <li class="news_list_li" v-for="list in item.articles">
              <p class="ellipsis">
                {{list.post_title}}
              </p>
              <div class="news_imfor_box">
                <span class="news_imfor_txt">众盾安全</span>
                <span class="news_time">{{list.published_time | formatDate}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="course_box" v-if="active_tab=='course'">
        <div class="news_title">
          <h3>课程列表</h3>
          <span>全部></span>
        </div>
        <div class="course_list">
          <ul>
            <li class="course_li">
              <section >
                <img src="../../images/banner.png" alt="" class="course_img">
              </section>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
       <div class="video_box" v-if="active_tab=='video'">
         <div class="news_title">
            <h3>课程列表</h3>
            <span>全部></span>
          </div>
      </div>
    </div>
    <div class="footer_nav">
      <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
        <img src="../../images/banner.png" alt="">
        <span>报名</span>
      </section>
       <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
        <img src="../../images/banner.png" alt="">
        <span>学习</span>
      </section>
      <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item" style="padding: 0;">
        <div class="home-img">
          <img src="../../images/banner.png" alt="">
        </div>
      </section>
      <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
        <img src="../../images/banner.png" alt="">
        <span>发现</span>
      </section>
      <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
        <img src="../../images/banner.png" alt="">
        <span>我的</span>
      </section>
    
    </div>
  </div>
</template>

<script>
import { Tab, TabItem} from 'vux'
import {shouyeNews} from 'src/service/getData'
import {formatDate} from 'src/assets/js/time'
export default {
  components: {
    Tab,
    TabItem,
  },
  data () {
    return {
      active_tab: 'news',
       newslist:[],
    }
  },
   filters: {
     formatDate(time) {
        var date = new Date(time * 1000);
        return formatDate(date, 'yyyy-MM-dd');
      }
  },
  methods:{
    onClick(state){
        this.active_tab = state;
      },
    gotoAddress(path){
        this.$router.push(path)
      }
    },
    mounted(){
        shouyeNews().then(res => {
          this.newslist=res.data;
          console.log(this.newslist);
        });
        
    },
}
</script>

<style scoped>
  body{
    background: #f4f4f4;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
  .banner{
    width: 100%;
    height: 9rem;
    background: url(../../images/banner.png) no-repeat;
    background-size: 100% 100%;
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
    margin-bottom: 1rem;
    padding-bottom: 1rem;

   }
   .module_block_a{
    width: 25%;
    padding-top: 1rem;
   /* display: -ms-flexbox;
    display: flex;*/
    -ms-flex-pack: center;
    justify-content: center;
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
  .hot_title{
    padding: 10px 1rem;
    border-bottom: 1px solid #e9e9e9;
    line-height: 1rem;
    text-align: left;
  }
  .hot_title h2{
    display: inline-block;
    font-size: .6rem;
    border-left: 3px solid #5ebf83;
    padding-left: 5px;
    color: #343434;
  }
   .hot_module_a{
    width: 33.33%;
    padding: .3rem 0;
   }
   .hot_module_a img{
      display: block;
      width: 4rem;
      height: 4rem;
      margin: 0 auto;
   }
   .hot_module_a p{
    font-size: .6rem;
    color: #343434;
    line-height: 2rem;
   }
   .more_link{
    float: right;
    color: #656565;
    font-size: .5rem;
   }
   .news_list,
   .course_box,
   .video_box{
    padding-top: .5rem;
   }
   .news_title{
    width: 100%;
    padding: 0 1rem;
    line-height: 1rem;
    text-align: left;
   }
   .news_title h3{
    display: inline-block;
    font-size: .6rem;
    padding:0 5px;
    color: #fff;
    background: #5ebf83;
    border-radius: 4px;
   }
   .news_title span{
    float: right;
    color: #656565;
    font-size: .5rem;
   }
   .news_list_li{
    padding: 10px 1rem;
    border-bottom: 1px solid #e6e6e6;
   }
   .news_list_li p{
    width: 100%;
    color: #343434;
    font-size: .7rem;
    line-height: 1rem;
    text-align: left;;
   }
   .news_imfor_box{
    margin-top: .5rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
   }
   .news_imfor_txt{
    color: #666;
   }
   .news_time{
    color: #666;
   }
   .course_li{
    display: -ms-flexbox;
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .7rem .8rem;
   }
   .course_img{
    width: 5rem;
    height: 3rem;
    display: block;
    margin-right: .5rem;
   }
   .home-last{
    margin-bottom: 3rem; 
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
