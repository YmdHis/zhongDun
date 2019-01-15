<template>
  <div id="home">
    <div class="banner">
      <div class="header_box clear">
        <div class="header_address">
           <section class="header_address_a" @click="getLocation()">
            <img src="../../images/add_icon.png" alt="" class="header_address_icon">
            武汉
         </section>
        </div>
        <div class="header_search">
          <img src="../../images/sear_icon.png" alt="" class="header_search_icon">
          <input type="text" placeholder="请输入机构名称">
          <img src="../../images/sy_icon.png" alt="" class="header_search_sy">
        </div>
        <div class="header_login">
           <router-link to="/login" class="header_login_a">
            登录
         </router-link>
        </div>
      </div>
    </div>
    <div class="module_block">
      <div class="module_block_list">
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/icon1.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/icon2.png" alt="">
            <p>课程学习</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/icon3.png" alt="">
            <p>发现问题</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/icon4.png" alt="">
            <p>试题学习</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/icon5.png" alt="">
            <p>机构介绍</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/icon6.png" alt="">
            <p>个人中心</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/icon7.png" alt="">
            <p>证书查询</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/icon8.png" alt="">
            <p>VIP专区</p>
         </router-link>
      </div>
    </div>
    <div class="module_block hot_module" >
      <div class="hot_title">
        <h2>
          热门中心
        </h2>
        <router-link to="/enter" class="more_link">全部></router-link>
      </div>
      <div class="module_block_list hot_module_list" style="padding-bottom: 0;">
        <router-link to="/enter" class="hot_module_a">
            <p>报名</p>
           <img src="../../images/bao1.png" alt="">
        </router-link>
        <router-link to="/enter" class="hot_module_a">
            <p>机构介绍</p>
           <img src="../../images/bao2.png" alt="">
        </router-link>
         <router-link to="/enter" class="hot_module_a" style="border-right: none;">
            <p>重点资讯</p>
           <img src="../../images/bao3.png" alt="">
        </router-link>
      </div>
    </div>
     <div class="module_block home-last">
      <tab :line-width="1" active-color='#5ebf83' custom-bar-width="50px" >
        <tab-item selected @on-item-click="onClick('news')">推荐</tab-item>
        <tab-item @on-item-click="onClick('course')">课程精选</tab-item>
        <tab-item  @on-item-click="onClick('video')">免费试听</tab-item>
      </tab>
      <div class="news_box" v-if="active_tab=='news'">
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
              <div class="course_txt">
                <p class="course_txt_title">
                  <span class="ellipsis">制冷与空调安装维修</span>
                  <i></i>
                </p>
                <p class="course_price">￥850</p>
                <div class="course_class">
                  <span>制冷空调(初训)</span>
                </div>
                <div class="course_box_btn">
                  <router-link :to="{path: '/', query: {}}"  class="course_btn">
                    试听
                  </router-link>
                  <router-link :to="{path: '/', query: {}}"  class="course_btn">
                    购买
                  </router-link>
                </div>
              </div>
            </li>
            <li class="course_li">
              <section >
                <img src="../../images/banner.png" alt="" class="course_img">
              </section>
              <div class="course_txt">
                <p class="course_txt_title">
                  <span class="ellipsis">制冷与空调安装维修</span>
                  <i></i>
                </p>
                <p class="course_price">￥850</p>
                <div class="course_class">
                  <span>制冷空调(初训)</span>
                </div>
                <div class="course_box_btn">
                  <router-link :to="{path: '/', query: {}}"  class="course_btn">
                    试听
                  </router-link>
                  <router-link :to="{path: '/', query: {}}"  class="course_btn">
                    购买
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
       <div class="video_box" v-if="active_tab=='video'">
         <div class="news_title">
            <h3>课程列表</h3>
            <span>全部></span>
          </div>
          <div class="video_list">
            <router-link to="/enter" class="video_list_a">
              <img src="../../images/leson1.jpg" alt="">
              <p class="ellipsis">电气作业(初训)</p>
            </router-link>
             <router-link to="/enter" class="video_list_a">
              <img src="../../images/leson2.jpg" alt="">
              <p class="ellipsis">高压电工作业</p>
            </router-link>
             <router-link to="/enter" class="video_list_a">
              <img src="../../images/leson3.jpg" alt="">
              <p class="ellipsis">制冷工作业</p>
            </router-link>
            <router-link to="/enter" class="video_list_a">
              <img src="../../images/leson4.jpg" alt="">
              <p class="ellipsis">继电保护作业</p>
            </router-link>
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
import {shouyeNews} from 'src/service/api'
import {formatDate} from 'src/assets/js/time'
import BMap from 'BMap'
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
      },
    getLocation(){
      // 百度地图API功能
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);  
        console.log("lng:"+r.point.lng);
        console.log("lat:"+r.point.lat);
      }
      else {
        console.log('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true})
    //关于状态码
    //BMAP_STATUS_SUCCESS 检索成功。对应数值“0”。
    //BMAP_STATUS_CITY_LIST 城市列表。对应数值“1”。
    //BMAP_STATUS_UNKNOWN_LOCATION  位置结果未知。对应数值“2”。
    //BMAP_STATUS_UNKNOWN_ROUTE 导航结果未知。对应数值“3”。
    //BMAP_STATUS_INVALID_KEY 非法密钥。对应数值“4”。
    //BMAP_STATUS_INVALID_REQUEST 非法请求。对应数值“5”。
    //BMAP_STATUS_PERMISSION_DENIED 没有权限。对应数值“6”。(自 1.1 新增)
    //BMAP_STATUS_SERVICE_UNAVAILABLE 服务不可用。对应数值“7”。(自 1.1 新增)
    //BMAP_STATUS_TIMEOUT 超时。对应数值“8”。(自 1.1 新增)
    }
  },
  mounted(){
    shouyeNews().then(res => {
      this.newslist = res.data;
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
    position: relative;
    width: 100%;
    height: 8rem;
    background: url(../../images/banner.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .header_box{
    position: relative;
    padding: .5rem;
    width: 100%;
  }
  .header_address{
    float: left;
    font-size: .7rem;
    width: 3rem;
    height:1.2rem;
    line-height: 1.2rem;
    padding-left: .5rem;
  }
  .header_address_icon{
    height: .6rem;
  }
  .header_search img{
    vertical-align: middle;
  }
  .header_search input{
    width: 6rem;
  }
  .header_search .header_search_icon{
    width: .6rem;
  }
  .header_search .header_search_sy{
    height: .6rem;
  }
  .header_address_a{
    color: #808080;
  }
  .header_search {
   float: left;
    font-size: .7rem;
    width: 9rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background: #fff;
    border-radius: 1rem;
    position: relative;
    margin: 0 .5rem;
  }
  .header_login{
    float: left;
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
    margin-bottom: .8rem;
    padding-bottom: .8rem;
     border-bottom: 1px solid #e9e9e9;

   }
   .module_block_a{
    width: 25%;
    padding-top: .8rem;
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
    border-top: 1px solid #e9e9e9;
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
    border-right: 1px solid #e9e9e9;
   }
   .hot_module_a img{
      display: block;
      width: 4rem;
     /* height: 4rem;*/
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
   .course_txt{
    width: 100%;
    position: relative;
    text-align:left;
   }
   .course_txt_title{
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
   }
   .course_txt_title i{
    float:right;
    width: 3rem;
      background: url(../../images/course_icon.png) no-repeat;
    background-size: 100% 100%;
   }
   .course_txt_title span{
   font-size: .6rem;
    font-weight: bold;
    display: block;
    width: 70%;
    text-align: left;
   }
   .course_price{
    font-size: .6rem;
    line-height: 1.5rem;
   }
   .course_class{
     font-size: .6rem;
    color: #656565;
   }
   .course_box_btn{
    position: absolute;
    right: 0;
    bottom: .1rem;
   }
  .course_btn{
    font-size: .5rem;
    color: #5ebf83;
    border: 1px solid #5ebf83;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-left: .2rem;
    padding: .1rem .3rem;
  }
  .video_list{
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: .5rem; 
  }
  .video_list_a{
    width: 50%;
  }
  .video_list_a img{
    display: block;
    width: 7rem;
    height: 4rem;
    margin: 0 auto;
  }
  .video_list_a p{
    font-size: .6rem;
    padding: .5rem 0;
    color: #333;
  }
   .home-last{
    margin-bottom: 3rem; 
    border-top: 1px solid #e9e9e9;
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
