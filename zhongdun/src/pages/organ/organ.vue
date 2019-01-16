<template>
  <div id="organ">
    <div class="header_box clear">
        <div class="header_address">
           <section class="header_address_a ellipsis">
            <img src="../../images/add_icon.png" alt="" class="header_address_icon">
            {{LocationCity}}
         </section>
        </div>
        <div class="header_search">
          <img src="../../images/sear_icon.png" alt="" class="header_search_icon">
          <input type="text" placeholder="请输入机构名称">
          <img src="../../images/sy_icon.png" alt="" class="header_search_sy">
        </div>
        <div class="header_login">
           <router-link to="/login" class="header_login_a">
            <img src="../../images/user.png" alt="" class="header_login_user">
         </router-link>
        </div>
    </div>
    <div class="organ_species">
       <tab :line-width="3" custom-bar-width="10px" active-color="#5ebf83" bar-active-color="5ebf83">
      <tab-item selected @on-item-click="" class="organ_species_tit">培训机构</tab-item>
      <tab-item @on-item-click="" class="organ_species_tit">培训老师</tab-item>
      <tab-item @on-item-click="" class="organ_species_tit">申请入驻</tab-item>
    </tab>
    </div>
    <div class="organ_choose_title">
      <flexbox :gutter="0">
      <flexbox-item><div class="organ_choose_t">综合</div></flexbox-item>
      <flexbox-item><div class="organ_choose_t">距离</div></flexbox-item>
      <flexbox-item><div class="organ_choose_t">价格</div></flexbox-item>
      <flexbox-item><div class="organ_choose_t">评价</div></flexbox-item>
       <flexbox-item><div class="organ_choose_t organ_choose_icon">筛选<img src="../../images/choose_icon.jpg" alt=""></div></flexbox-item>
    </flexbox>
    </div>
    <div class="origan_box">
      <div class="origan_list">
        <router-link to="/organDetail" > 
          <flexbox>
            <flexbox-item :span="4"><div class="origan_list_imgBox">
              <img src="../../images/banner.png" alt="" class="origan_img">
            </div>
            </flexbox-item>
            <flexbox-item>
              <div class="origan_txt">
                  <flexbox>
                    <flexbox-item class="ellipsis"><span class="origan_txt_title">制冷与空调安装维修</span></flexbox-item>
                    <flexbox-item :span="3"><img src="../../images/course_icon.png" alt="" class="origan_txt_title_img"></flexbox-item>
                  </flexbox>
                  <p class="origan_evaluation">
                   <rater v-model="data" :font-size="15" disabled></rater> 
                      37条
                    </p>
                  <div class="origan_class">
                    <flexbox>
                      <flexbox-item :span="3"><div class="origan_buy">￥650</div></flexbox-item>
                      <flexbox-item><div class="origan_curse ellipsis"><span>电工</span><span>焊工</span></div></flexbox-item>
                      <flexbox-item :span="3"><div class="origan_km">3.1公里</div></flexbox-item>
                    </flexbox>
                  </div>
                </div>
            </flexbox-item>
          </flexbox> 
      </router-link>
      </div>
    </div>
   <foot-nav></foot-nav>
  </div>
</template>

<script>
import { Tab, TabItem, Flexbox, FlexboxItem,Rater} from 'vux'
import {shouyeNews} from 'src/service/api'
import footNav from 'src/components/footNav'
import BMap from 'BMap'

export default {
 
	components: {
		Tab,
		TabItem,
    Flexbox, 
    FlexboxItem,
    Rater,
    footNav
	},
	data () {
	    return {
        data:5,
         LocationCity:"定位中",
	    }
  	},
  mounted(){
   this.getLocation();  
  },
   methods:{
    gotoAddress(path){
        this.$router.push(path)
      },
    getLocation(){
      let _this = this;
      const geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function getinfo(position){
          let city = position.address.city;
          _this.LocationCity = city;
          //console.log(city);
      }, function(e) {
          _this.LocationCity = "定位失败"
          //console.log('fail');
      }, {provider: 'baidu'});
    }
  },
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

#organ{
  background:#fff;
  font-size: 14px;
}
.header_login_user{
  height: .9rem;
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
  .header_search img{
    vertical-align: middle;
  }
  .header_search input{
    width: 6rem;
    text-align: center;
    background: none;
  }
  .header_search .header_search_icon{
    width: .6rem;
  }
  .header_search .header_search_sy{
    height: .6rem;
  }
  .header_address_a{
    color: #808080;
    font-size: .2rem;
  }
  .header_search {
   float: left;
    font-size: .7rem;
    width: 8.8rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background: #fff;
    border-radius: 1rem;
    position: relative;
    margin: 0 .5rem;
    text-align: center;
    background: #f2f2f2;
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
.organ_species_tit{
  font-size: .7rem;
}
.organ_choose_title{
   padding:.5rem 0;
   border-bottom:1px solid #e9e9e9;
}
.organ_choose_t{
  text-align: center;
  font-size: .5rem;
  border-right:1px solid #e9e9e9;
}
.organ_choose_icon{
  border-right:none;
}
.organ_choose_icon img{
  height: .6rem;
  vertical-align: middle;
  padding-left: .2rem;
}
.origan_list{
  padding: 0.5rem;
    border-bottom: 1px solid #e9e9e9;
}
.origan_img{
  width: 100%;
  height: 3rem;
  vertical-align: middle;
}
.origan_txt_title{
  font-size: 0.7rem;
    color: #333;
}
.origan_txt_title_img{
  height: .5rem;
  padding-left: .3rem;
}
.origan_buy{
  font-size: .7rem;
  font-weight: bold;
  color: #666;
}
.origan_curse span{
  padding-right: .1rem;
}
.origan_evaluation{
  padding:.2rem 0;
  color: #343434;
}
.origan_curse,
.origan_km{
  color: #333;
}
</style>