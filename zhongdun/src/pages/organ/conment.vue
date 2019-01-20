<template>
  <div>
    <div id="bmhead">
      <x-header :left-options="{backText: ''}"><b>全部评论</b></x-header>
    </div>
    <!--评论分类 S--> 
    <div class="ex-parts">
      <ul class="conmentlist">
        <li class="active">全部(37)</li>
        <li>好拼(37)</li>
        <li>中评(0)</li>
        <li>差评(0)</li>
        <li>差评(0)</li>
        <li>带图点评(0)</li>
        <li>服务热情(0)</li>
        <li>教训耐心(0)</li>
        <li>环境优雅(0)</li>
        <li>收费合理(0)</li>
      </ul>
    </div>
    <!--评论分类 E-->
    <!--评论列表 S--> 
    <div class="ex-parts ex-parts2">
     <ul>
       <li class="conmentli">
        <!--用户头像 S-->
         <div class="userscu">
           <div>
             <img src="../../images/find_icon1.png">
           </div>
         </div>
        <!--用户头像 E-->
         <div>
          <!--内容一级 S-->
           <div class="userconment">
             <div class="userstar">
                <p>安全操作用户</p>
                 <div class="details_evaluation_list_star">
                  <rater v-model="data" :font-size="16"></rater>
                 </div>
             </div>
             <div class="youzhi">
               <img src="../../images/youzhi.jpg">
             </div>
           </div>
          <!--内容一级 E-->
          <!--内容二级 S-->
          <div class="conment_content">
              老师服务态度很好，咨询过程中，也没有不耐烦，不愿意解决的情况。很认真负责，给安培教育老师点一个攒，还有从报名到现在，一个月就拿到证了，非常感谢安培教育带给我的帮助。
          </div>
          <!--内容二级 E-->
          <!--内容三级 S-->
          <div class="dianzan">
               <span class="loving"> <x-icon type="ios-heart" size="20" class="loving_icon" style="fill:#fb8e52;"></x-icon>23</span>
          </div>
          <!--内容三级 E-->
         </div>
       </li>

        <li class="conmentli">
        <!--用户头像 S-->
         <div class="userscu">
           <div>
             <img src="../../images/find_icon2.png">
           </div>
         </div>
        <!--用户头像 E-->
         <div>
          <!--内容一级 S-->
           <div class="userconment">
             <div class="userstar">
                <p>5255462用户</p>
                 <div class="details_evaluation_list_star">
                  <rater v-model="data" :font-size="16"></rater>
                 </div>
             </div>
             <div class="youzhi">
               <!-- <img src="../../images/youzhi.jpg"> -->
             </div>
           </div>
          <!--内容一级 E-->
          <!--内容二级 S-->
          <div class="conment_content">
              安培教育很好，老师好，拿证也效率，安培教育顶你上去
          </div>
          <!--内容二级 E-->
          <!--内容三级 S-->
          <div class="dianzan">
               <span class="loving"> <x-icon type="ios-heart" size="20" class="loving_icon"></x-icon>2</span>
          </div>
          <!--内容三级 E-->
         </div>
       </li>
       <li class="conmentli">
        <!--用户头像 S-->
         <div class="userscu">
           <div>
             <img src="../../images/find_icon3.png">
           </div>
         </div>
        <!--用户头像 E-->
         <div>
          <!--内容一级 S-->
           <div class="userconment">
             <div class="userstar">
                <p>5255462用户</p>
                 <div class="details_evaluation_list_star">
                  <rater v-model="data" :font-size="16"></rater>
                 </div>
             </div>
             <div class="youzhi">
               <!-- <img src="../../images/youzhi.jpg"> -->
             </div>
           </div>
          <!--内容一级 E-->
          <!--内容二级 S-->
          <div class="conment_content">
              安培教育很好，老师好，拿证也效率，安培教育顶你上去
          </div>
          <!--内容二级 E-->
          <!--内容三级 S-->
          <div class="dianzan">
               <span class="loving"> <x-icon type="ios-heart" size="20" class="loving_icon"></x-icon>2</span>
          </div>
          <!--内容三级 E-->
         </div>
       </li>
     </ul>
    </div>
    <!--评论列表 E-->      
  <div class="ex-next">
   我要点评
  </div>
 </div>
</template>
<script type="text/javascript">
  import {XHeader,XInput,Group, Rater} from 'vux'
  export default {
    data(){
      return{
          data:5
      }
    },
  components: {
     XHeader,XInput,Group,Rater
    },
  methods: {
     
  }
}
</script>
<style type="text/css">
/*报名投不样式*/
#bmhead .vux-header{
background: #FFF;
}
#bmhead .vux-header-title{
  color:#222;
}
#bmhead .vux-header .vux-header-left .left-arrow:before{
  border-color:#333;
}
/*评论分类*/
.ex-parts{padding:0.4rem;background:#FFF;margin-bottom:0.6rem;}
.ex-parts2{padding-bottom:0.8rem;}
.conmentlist{font-size:0.66rem;margin-top:0.4rem;}
.active{background-color:#5ebf83 !important;color:#f3f3f3 !important;}
.conmentlist>li{display: inline-block;background:#ecebeb;color:#848383;padding:0.2rem 0.4rem;border-radius:0.7rem;margin-bottom:0.5rem;margin-right:0.3rem;;font-size:0.6rem;}
.active{background-color:#5ebf83;color:#FFF;}
/*评论列表*/
.conmentli{overflow: hidden;border-bottom:1px solid #efeded;margin-bottom:0.6rem;}
.userscu{float: left;width:11%;}
.userscu>div{border-radius: 50%;}
.userscu>div>img{max-width:100%;}
.conmentli>div:nth-of-type(2){float: right;width:86%;}
.userconment{
overflow:hidden;
height:2.2rem;
}
.userstar{
  width:4rem;
  float: left;
  font-size:0.64rem;
}
.userstar >p{
  color:#328e55;
  margin-bottom: 0.2rem
}
.youzhi{
  float: right;width:2.4rem;}
.youzhi img{max-width:100%;}
.conment_content{font-size:0.66rem;color:#000;}
.dianzan{overflow: hidden;line-height: 1rem;padding-bottom:0.5rem;}
.loving{
  float: right;
  padding-top: 10px;
  padding-right: 10px;
  font-size:0.4rem;
  color:#999;
  
}
.loving_icon{
  fill: #999;
  vertical-align: middle;
  padding-right: 5px;
}
/*底部按钮*/
.ex-next{height:2rem;background: #5ebf83;color:#FFF;line-height:2rem; position: fixed;
    bottom:0;font-size:0.66rem;
    width:100%;text-align:center;}
</style>