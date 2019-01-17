<template>
  <div id="organ_details">
    <div class="details_header">
      <x-header :left-options="{backText: ''}"  style="background-color:#f5f5f5;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        机构详情
       <a slot="right">  <x-icon slot="overwrite-left" type="ios-information-outline" size="30" style="fill:#333;position:relative;top:-8px;left:-3px;"></x-icon></a>
      </x-header>
    </div>
    <div class="details_box">
      <div class="details_banner">
        <img src="../../../images/banner.png" alt="">
      </div>
      <div class="details_title_box">
        <p class="details_title">
          <span class=" ellipsis">{{organ.name}}<img src="../../../images/course_icon.png" alt="" class="details_title_icon"></span>
          <img src="../../../images/add_icon.png" alt="" class="details_phone">
        </p>
        <p class="details_certification">
          <span>身份认证</span>
          <span>身份认证</span>
          <span>身份认证</span>
        </p>  
      </div>
      <div class="details_address_box">
        <group>
        <cell title="xxx" value="3.1公里" class="details_address" link="/home" >
          <img slot="icon" width="12" style="display:block;margin-right:5px;" src="../../../images/add_icon.png">
        </cell>
      </group>
      </div>
    </div>
    <div class="details_evaluation">
      <div class="details_evaluation_box_title clear">
        <div class="details_evaluation_box_title_lf">
          <flexbox orient="vertical" :gutter="0">
            <flexbox-item>
              <div > <rater v-model="data" disabled :font-size="20"></rater>5.0</div>
            </flexbox-item>
            <flexbox-item>
              <p style="text-align: left;">
                <span>服务</span><i>5.0</i>
                <span>教学</span><i>5.0</i>
                <span>环境</span><i>5.0</i>
                <span>收费</span><i>5.0</i>
              </p>
            </flexbox-item>
          </flexbox> 
        </div>
        <div class="details_evaluation_box_title_rg">
          <cell value="全部评价（5）" class="details_address" link="/home" >
          </cell>
        </div>
      </div> 
      <div class="details_evaluation_list clear">
        <div class="details_evaluation_list_left">
          <img src="../../../images/icon1.png" alt="">
        </div>
        <div class="details_evaluation_list_rg">
          <flexbox orient="vertical" :gutter="0">
            <flexbox-item><div class="details_evaluation_list_user">学员1213</div></flexbox-item>
            <flexbox-item>
              <div class="details_evaluation_list_star"><rater v-model="data" disabled :font-size="20"></rater>
              </div>
            </flexbox-item>
             <flexbox-item>
              <div class="details_evaluation_list_txt">教的好，拿证快，老师负责。</div>
             </flexbox-item>
            <flexbox-item>
              <div class="details_evaluation_list_other">
                <span>学费：650元</span>
                <span>拿本：2个月</span>
                <span class="loving"><x-icon type="ios-heart-outline" size="20" class="loving_icon"></x-icon>12</span>
              </div>
            </flexbox-item>
          </flexbox> 
        </div>
      </div>
      <div class="details_evaluation_list clear">
        <div class="details_evaluation_list_left">
          <img src="../../../images/icon1.png" alt="">
        </div>
        <div class="details_evaluation_list_rg">
          <flexbox orient="vertical" :gutter="0">
            <flexbox-item><div class="details_evaluation_list_user">学员1213</div></flexbox-item>
            <flexbox-item>
              <div class="details_evaluation_list_star"><rater v-model="data" disabled :font-size="20"></rater>
              </div>
            </flexbox-item>
             <flexbox-item>
              <div class="details_evaluation_list_txt">教的好，拿证快，老师负责。</div>
             </flexbox-item>
            <flexbox-item>
              <div class="details_evaluation_list_other">
                <span>学费：650元</span>
                <span>拿本：2个月</span>
                <span class="loving"><x-icon type="ios-heart-outline" size="20" class="loving_icon"></x-icon>12</span>
              </div>
            </flexbox-item>
          </flexbox> 
        </div>
      </div>
    </div>
    <x-button class="details_address_btn">立即报名</x-button>
  </div>
</template>

<script>
import BMap from 'BMap'
import { XHeader,Flexbox, FlexboxItem,Group,CellBox,Cell,XButton, Rater} from 'vux'
import {organDetails} from 'src/service/api'
export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
     Rater,
     CellBox,
    XButton
  },
  data () {
    return {
      data:5,
      xxx:"",
      organ:[],
      borderColor: {
        borderColor: '#333'
      },
    }
  },
  methods:{
   back(){
        this.$router.go(-1);//返回上一层
    }
     // getCity(lng, lat) {
     //      console.log(lng, lat)
     //  },
  },
   mounted(){
    organDetails({companyId:1}).then(res => {
      this.organ = res.data;
      console.log(this.organ);
      this.lng=this.organ.longitude;
      this.lat=this.organ.latitude;
      let point = new BMap.Point(this.lng,this.lat);
      console.log(point);
      let gc = new BMap.Geocoder(); 
      gc.getLocation(point, function(rs){
        // 百度地图解析城市名
        console.log(rs.addressComponents.city);
        //或者其他信息
        console.log(rs.address);
        this.xxx = rs.address;
      }); 
    })
  }
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
.details_banner img{
  display: block;
  width: 100%;
  height: 8rem;
}
.details_title_box{
  width: 100%;
  background: #fff;
  font-size: .5rem;
  text-align: left;
  padding:.5rem;
  
}
.details_title{
  padding-bottom: .5rem;
  font-size: .7rem;
  border-bottom: 1px solid #f5f5f5;
}
.details_title span{
  display: inline-block;
  width: 70%;
}
.details_certification{
  padding-top: .5rem;
}
.details_certification span{
  display: inline-block;
  padding-right: .4rem;
}
.details_title img{
  height: .5rem;
  padding-left: .3rem;
}
.details_title .details_phone{
  float: right;
  height: .8rem;
}
.details_address_box{
  background: #fff;
  margin-top: -.5rem;
}
.details_address{
  text-align: left;
  font-size: .6rem;
  color: #666;
}
.details_address_btn{
  position: fixed;
  width: 100%;
  bottom: 0;
  background:#5ebf83;
  color: #fff;
}
.details_evaluation{
  background: #fff;
  margin-top: .5rem;
  margin-bottom: 2rem;
}
.details_evaluation_list{
  padding:.3rem;
}
.details_evaluation_img img{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.details_evaluation_list_left{
  float: left;
}
.details_evaluation_list_left img{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.details_evaluation_list_rg{
  padding-left: 2.5rem;
  width: 100%;
  text-align: left;
}
.details_evaluation_list_user{
  color: #999;
  font-size: .5rem;
  line-height: .8rem;
      padding-left: .1rem;
}
.details_evaluation_list_star{
   margin-top: -.4rem;
}
.details_evaluation_list_txt{
  font-size: .7rem;
  width: 9.5rem;
}
.details_evaluation_list_other span{
  color: #999;
  font-size: .6rem;
  padding-right: .5rem;
}
.loving{
  float: right;
  padding-top: 10px;
  padding-right: 10px;
}
.loving_icon{
  fill: #999;
  vertical-align: middle;
  padding-right: 5px;
}
.details_evaluation_title{
  width: 100%;
}
.details_evaluation_box_title{
  padding: .5rem 0;
  padding-left: .5rem;
  border-bottom: 1px solid #f5f5f5;
}
.details_evaluation_box_title_lf{
   float: left;
    font-size: .5rem;
    width: 9rem;
    color: #999;
    line-height: 1rem;
}
.details_evaluation_box_title_lf i{
  padding-right: 5px;
  color: #fb8e52;
}
.details_evaluation_box_title_rg{
  float: right;
  font-size: .6rem;
  color: #999;
}
</style>