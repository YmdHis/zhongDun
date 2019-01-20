
<template>
  <div style="background:#FFF ">
    <div id="bmhead">
      <x-header :left-options="{backText: ''}"><b>创建帖子</b><a slot="right" class="fubu" style="color:#5ebf83;font-size: 0.62rem">发布</a>
      </x-header>
    </div>
 	<div class="posting">
 		<div class="postingcontent">
	 		<group>
	      		<x-textarea placeholder="说点什么吧..." style="font-size:0.6rem"></x-textarea>
	   		 </group>
   		</div>
   		 <div class="insertimg">
   		 	<img src="../../assets/images/addimg3.png">
   		 </div>
 	</div>
 	<!--分组-->
 	<div class="fenzu">
 		<p>选择分组</p>
 		<ul>
 			<li>电工作业</li>
 			<li class="posting-active">焊工作业</li>
 			<li>制冷空调</li>
 			<li>高空作业</li>
 			<li>危化品作业</li>
 			<li>培训机构</li>
 		</ul>
 	</div>
  </div>
 </div>
</template>
<script type="text/javascript">
  import {XHeader,XInput,Group,XTextarea} from 'vux'
  export default {
  components: {
     XHeader,XInput,Group,XTextarea
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
/*评论 area*/
.postingcontent .weui-cells{margin-top:0 !important;}
.postingcontent .weui-cells:after{border:none;}
.posting{background:#FFF;}
.insertimg{border-bottom:1px solid #eaeaea;}
.insertimg>img{max-width:5.2rem;margin-bottom:0.4rem;margin-left:0.6rem;}

/*分组*/
.fenzu{padding:0.6rem;}
.fenzu>p{font-size:0.76rem;margin-bottom:0.6rem;color:#333;font-weight:bold;}
.fenzu>ul>li{
	font-size:0.64rem;display:inline-block;border:1px solid #CCC;border-radius:0.6rem;padding:0.2rem 0.4rem;margin-bottom:0.6rem;
}
.posting-active{
	background:#5ebf83 !important;color:#FFF !important;border-color:#5ebf83 !important;
}
</style>