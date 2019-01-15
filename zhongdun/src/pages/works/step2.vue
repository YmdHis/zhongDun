<template>
  <div>
  	<div id="bmhead">
    	<x-header :left-options="{backText: ''}"><b>我要报名</b></x-header>
    	
    	<div class="ex-topimg"><img src="../../assets/images/bmbanner.png"></div>
    </div>
    <!--选择价格 S-->
    <div class="ex-price">
    	<div class="ex-cour-info">
    		<p>安培教育</p>
    		<p>制冷与空调安装作业&nbsp;<span class="pricecolor">￥650</span></p>
    	</div>
    	<div>
    		<x-icon type="ios-arrow-right" size="24"></x-icon>
    	</div>
    </div>
    <!--选择价格 E-->
    <!--form提交 S-->
    <div id="ex-sub">
    	<group>
	      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
	    </group>
	    <group>
	   		<div id="sex1">
	   			<div>性别</div>
	   			<div>
     	 			<checklist  :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>
     	 		</div>
	   		</div>
	    </group>
	    <group>
	      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
	    </group>
    	<group>
	      <x-input title="验证码" class="weui-vcode">
	        <x-button slot="right"  style="background:#5ebf83;color:#FFF" mini>发送验证码</x-button>
	      </x-input>
	    </group>
	   	<div style="padding:0.4rem">
	    	<x-button style="background:#5ebf83;color:#FFF" @click.native=" showToast= true" title="54">立即报名</x-button>
	    </div>
   	</div>
    <!--form提交 E-->
    <!--弹框内容-->
    <div>
	 <div>
	  <!--   <x-switch v-model="showToast" title="show toast"></x-switch> -->
	    <div v-transfer-dom>
	      <x-dialog v-model="showToast" class="dialog-demo">
	        <div>
	          	<!--弹框表格 S-->
			      <div style="padding:15px;">
			        <p class="ex-checktit">请核对的信息</p>
			        <x-table full-bordered style="background-color:#fff;" id="ex-tables">
			            <tr>
			              <td>姓名</td>
			              <td colspan="3">1</td>
			            </tr>
			            <tr>
			              <td>性别</td>
			              <td colspan="3">2</td>
			            </tr>
			             <tr>
			              <td>手机号码</td>
			              <td colspan="3">55465445</td>
			            </tr>
			             <tr>
			              <td>报名机构</td>
			              <td colspan="3">5454</td>
			            </tr>
			             <tr>
			              <td>报名工种</td>
			              <td colspan="3">看了</td>
			            </tr>
			        </x-table>
			    </div>
			    <div id="ex-subtn">
				   <x-button mini style="color:#000;background:#dadada;margin-right:0.3rem"  @click.native="showToast=false">返回修改</x-button>
				   <x-button mini type="primary" >确认提交</x-button>
			   </div>
			    <!--弹框表格 E-->
	        </div>
	      </x-dialog>
	    </div>
	  </div>
    </div>
    <!--弹框内容-->
  </div>
</template>

<script>
import {
		XDialog,
		XButton, 
		Group,
		Checklist,
		XHeader,
	    Actionsheet,
	    ButtonTab,
	    ButtonTabItem,
	    XInput,
	    Cell,
	    XTable,
	 	TransferDomDirective as TransferDom
} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
  	 XTable,
    XButton,
    Group,
  	Checklist,
  	Group,
  	Cell,
  	XInput,
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    XDialog
  },
  data () {
    return {
    	showToast: false,
    	value1:'1',
    	value1:'2',
    	value1:'3',
    	value1:'4',
    	commonList: [ '先生', '女士'],
    	radioValue: ['先生']
     }
  },
  methods:{
  	 change (val, label) {
      console.log('change', val, label)
    },
     doShowToast () {
      this.$vux.toast.show({
        //text: 'toast'
      })
    }
  }
}
</script>

<style>
.overwrite-title-demo {
  margin-top: 5px;
}
#bmhead .vux-header{
	background: #FFF
}
#bmhead .vux-header-title{
	color:#222;
}
#bmhead .vux-header .vux-header-left .left-arrow:before{
	border-color:#333;
}
.ex-topimg img{max-width:100%;}
.ex-price .vux-x-icon{
	 fill: #666;
}
.ex-price{
	overflow:hidden;
	background: #FFF;
	padding:0.4rem;
}
.ex-cour-info{
	float:left;
	width:90%;
}
.ex-cour-info>p:nth-of-type(1){
	font-size:0.75rem;
	color:#000;
	margin-bottom:0.3rem;
}
.ex-cour-info>p:nth-of-type(2){
	font-size:0.66rem;
	color:#83d19d;
	font-weight:-bold;
	line-height: 0.9rem
}
.ex-price>div:nth-of-type(2){
	float:right;
	width:10%;
	padding-top:0.6rem;
}
.pricecolor{
	color:#666;font-weight:400
}
/*设置form样式*/
#ex-sub .weui-cells{font-size:0.66rem;}
#ex-sub .weui-cell__hd>label{
	width:3.3rem !important;
	text-align:left !important;
	color:#333;

}
#ex-sub{margin-top:0.5rem;}
#ex-sub .weui-cells{margin-top:0;}
#ex-sub input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{ 
color:#CCC; 
font-size:0.6rem; 
}
#ex-sub  .weui-cells:after{border-bottom:none;}
#ex-sub .vux-x-input{padding-top:0.4rem;padding-bottom:0.4rem;}

/*以下设置性别单选框*/
#sex1 .weui-cells_checkbox label {
    width: 3.2rem;
    display: inline-block;
}
#sex1 .weui-cells_checkbox label div{display:inline-block;}
#sex1{overflow:hidden;}
#sex1>div:nth-of-type(1){float: left;padding:0.6rem;width:3.3rem;}
#sex1>div:nth-of-type(2){float: left;}
/*弹框样式*/
@import '~vux/src/styles/close';
.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
/*弹框表格样式设置*/
.ex-checktit{color:#5ebf83;font-size:0.7rem;margin-bottom:0.5rem;text-align:left;}
#ex-tables>tr>td:nth-of-type(1){font-size:0.66rem;color:#666;}
#ex-tables>tr>td:nth-of-type(2){color:#333;font-size:0.66rem;}
#ex-subtn{text-align:right;margin-bottom:0.4rem;margin-top:0;}
#ex-subtn button{border-radius:1px;background: #5ebf83;margin-right:0.64rem;font-size:0.54rem;}
</style>