<template>
  <div>
  	<div id="bmhead">
    	<x-header :left-options="{backText: ''}"><b>我要报名</b></x-header>
    	<div class="ex-topimg"><img src="../../assets/images/bmbanner.png"></div>
    </div>
    <!--选择价格 S-->
    <div class="ex-price">
    	<div class="ex-cour-info">
    		<div>{{jgname}}</div>
    		<!-- <p>制冷与空调安装作业&nbsp;<span class="pricecolor">￥650</span><span class="icoset" @click="removecourse($event)"> <x-icon type="ios-minus-outline" size="18"></x-icon></span></p>
    		<p>制冷与空调安装作业&nbsp;<span class="pricecolor">￥650</span><span class="icoset" @click="removecourse($event)"> <x-icon type="ios-minus-outline" size="18"></x-icon></span></p> -->
    		
    		<p v-for="item in gzcouse" :key="item.name">{{item.name}}&nbsp;<span class="pricecolor">￥{{item.price}}</span><span class="icoset" @click="removecourse($event)"> <x-icon type="ios-minus-outline" size="18"></x-icon></span></p>
    		<p class="addgz">请选择报名工种&nbsp;<span class="icoset"> <x-icon type="ios-plus-outline" size="18"  @click="bml" ></x-icon></span></p>
    		<!--弹框显示 S-->
    		<div v-transfer-dom id="gzs">
		      <popup v-model="show13" position="bottom" max-height="80%">
		        <group>
		        	<div class="content-gz">
		        <!--一级分类-->
		        	<p class="gz-close"> <x-icon type="ios-close-outline" size="25" style="color:#CCC" @click="show13 = false"></x-icon></p>
			         <div>
			         	<p class="ex-titp" style="margin-top:0">生产安全</p>
			         	<ul class="gzfl">
			         		<li  v-for="item1 in enroll" :class="[active1 == item1.name?'active':'']" :key="item1.name" @click="gzs(item1.category_id,item1.name)">{{item1.name}}</li>
			         	</ul>
			         </div>
			     <!--一级分类-->
			     <!--二级分类-->
			         <div v-if="gz">
			         	<p class="ex-titp">工种</p>
			         	<ul class="gzfl">
			         		<li :class="[active2 == item2.name?'active':'']" :key="item2.name" v-for="item2 in enrollTwo" 
			         		@click="fss(item2.id,companyid,item2.name)">{{item2.name}}</li> 
			         		<!-- <li class="-gz-active" v-bind="enrollTwo"></li> -->
			         	</ul>
			         </div>
			     <!--二级分类-->
			     <!--三级分类-->
			         <div v-if="fs">
			         	<p class="ex-titp">新证复审</p>
			         	<ul class="gzfl">
			         		<li v-for="item3 in enrollThree"  :class="[active3 == item3.title?'active':'']" :key="item3.title" 
			         		@click="xz(item3.title,item3.price)">{{item3.title}}</li> 
			         	</ul>
			         </div>
			     <!--三级分类-->
			    </div>
		        </group>
		        <div style="padding: 15px;">
		          <x-button id="ex-sub1" @click.native="gzadd">确定 </x-button>
		        </div>
		      </popup>
		    </div>
		    <!--弹框显示 E-->
    	</div>
    	
    </div>
    <!--选择价格 E-->
    <!--form提交 S-->
    <div id="ex-sub">
    	<group>
	      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name" v-model="username"></x-input>
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
	      <x-input title="手机号码" name="" placeholder="请输入手机号码" keyboard="number"  v-model="mobile"></x-input>
	    </group>
    	<group>
	      <x-input title="验证码" class="weui-vcode" v-model="vcode">
	        <x-button slot="right"  style="background:#5ebf83;color:#FFF" mini @click.native="yzm">发送验证码</x-button>
	      </x-input>
	    </group>
	   	<div style="padding:0.4rem">
	    	<x-button style="background:#5ebf83 !important;color:#FFF  !important;" @click.native="baoming" title="54">立即报名</x-button>
	    </div>
	    <p class="khxy">提交报名表示同意<span>《客户协议》</span></p>
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
			              <td colspan="3">{{username}}</td>
			            </tr>
			            <tr>
			              <td>性别</td>
			              <td colspan="3">{{sex}}</td>
			            </tr>
			             <tr>
			              <td>手机号码</td>
			              <td colspan="3">{{mobile}}</td>
			            </tr>
			             <tr>
			              <td>报名机构</td>
			              <td colspan="3">{{jgname}}</td>
			            </tr>
			             <tr v-for="item in gzcouse">
			              <td>报名工种</td>
			              <td colspan="3">{{item.name}}</td>
			            </tr>
									
			        </x-table>
			    </div>
			    <div id="ex-subtn">
				   <x-button mini style="color:#000;background:#dadada;margin-right:0.3rem"  @click.native="showToast=false">返回修改</x-button>
				   <x-button mini type="primary" @click.native="tijiao">确认提交</x-button>

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
import {enroll} from 'src/service/api';
import {enrollTwo} from 'src/service/api';
import {enrollThree,yzmGet} from 'src/service/api';
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
	    Popup,
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
    Popup,
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
    	work3:'',
    	onplace:'',
    	companyid:'',
			gzcouse:[],
			gzcouse1:[],
    	enroll:[],
    	gz:false,
    	fs:false,
    	jgname:'',
    	show13:false,
    	showToast: false,
    	value1:'1',
    	value1:'2',
    	value1:'3',
    	value1:'4',
    	commonList: [ '先生', '女士'],
    	radioValue: ['先生'],
    	data1:'',
    	addvalue:false,
			active1:'',
			active2:'',
			active3:'',
			username:'',
			mobile:'',
			vcode:'',
			sex:'',
     }
  },
  mounted(){
  	this.jgname=this.$route.query.name;
  },
  methods:{
  	bml(){//加号
			this.show13 = true;
			this.active1 = '';
			this.active2 = '';
			this.active3 = '';
			this.enrollTwo = [];
			this.enrollThree = [];
  		this.companyid=this.$route.query.id;
			enroll({companyId:this.$route.query.id}).then(res=>{
        this.enroll=res.data;
        console.log(this.enroll);
       });
  	},
  	gzs(data1,name){//一级
			this.active1 = name;
			enrollTwo({parentId:data1}).then(res=>{
			    this.enrollTwo=res.data;
			    this.gz = true;
			    this.$forceUpdate();
			    console.log(this.enrollTwo);
			   });
  	},
  	fss(data1,data2,data3){//二级
  		//请求参数 categoryId companyId
  		this.active2=data3;
  		data2=this.companyid;
  		enrollThree({categoryId:data1,companyId:data2}).then(res=>{
        this.enrollThree=res.data;
        this.$forceUpdate();
        this.fs = true;
        console.log(this.enrollThree);
       });
  	},
  	xz(data,price){//三级
			let gzcouse1 = [];
     	this.work3 = data;
  		this.price = price;
  		this.active3 = data;
			gzcouse1.push({name:this.work3,price:this.price});
			this.gzcouse1 = gzcouse1;
  		console.log(this.gzcouse1);
		},
		gzadd(){//确定
			this.show13 = false;
			this.gzcouse = this.gzcouse1;
			console.log(this.gzcouse);
		},
		tijiao(){
			this.$router.push({path:'/step3'});
		},
		change (val, label) {
			console.log(label[0])
			this.sex = label[0];
		},
		baoming(){
			let username = this.username;
			let mobile = this.mobile;
			let vcode = this.vcode;
			if(username == ''){
				this.$vux.toast.show({
            text: '请填写姓名',
            type:'text',
            position: 'middle'
				})
			}else if(mobile == ''){
				this.$vux.toast.show({
            text: '请填写手机号',
            type:'text',
            position: 'middle'
				})
			}else if(vcode == ''){
				this.$vux.toast.show({
            text: '请填写验证码',
            type:'text',
            position: 'middle'
				})
			}else{
				this.showToast = true;
			}
			console.log(this.username);
		},
    removecourse(e){
    	e.currentTarget.parentElement.remove();
		},
		yzm(){
			let mobile = this.mobile;
			yzmGet({mobile:mobile}).then(res=>{
				console.log(res);
       });
		},
    log (str) {
      console.log(str)
    }
  },
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
	
}
.ex-cour-info>div{
	font-size:0.75rem;
	color:#000;
	margin-bottom:0.3rem;
}
.ex-cour-info>p{
	font-size:0.66rem;
	color:#5ebf83;
	font-weight:-bold;
	line-height: 0.9rem;
	
}
.ex-cour-info .icoset{
	margin-left:0.3rem;
	position: relative;
	top:0.2rem;
}
.addgz{
	color:#CCC !important;
	font-size:0.62rem;
	margin-top:0.3rem;
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

/*客户协议*/
.khxy{font-size:0.66rem;text-align:center;color:#999;margin-top:0.2rem;}
.khxy>span{
	color:#83d19d;
}
/*弹框显示 content-gz ex-titp gzfl*/
.content-gz{border-radius: 0.3rem}
#gzs>div{border-radius:  0.6rem 0.6rem 0 0;background:#FFF;}
#gzs .weui-cells:before,#gzs .weui-cells:after{border:none;}
.content-gz{padding:0 0.5rem 0 0.5rem;}
.ex-titp{font-size:0.68rem;margin-top:1rem;}
.gzfl{font-size:0.54rem;}
.gzfl li{display: inline-block;background: #e8e8e8;color:#111;padding:0.4rem 0.5rem;border-radius:0.3rem;margin-right:0.34rem;margin-top: 0.5rem;border:1px solid #e8e8e8;}
#ex-sub1{background-color: #5ebf83;border-radius:0.6rem;font-size:0.68rem;margin-top:1.6rem;color:#FFF}
.active{
	border:1px solid #5ebf83 !important;background:#FFF !important;color: #5ebf83 !important
}
.gz-close{text-align: right}
.gz-close .vux-x-icon {
  fill: #999;
}
</style>