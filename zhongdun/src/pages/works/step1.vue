<template>
	<div id="ex-step1">
		<div>
			<!--上部分 S-->
			<div id="topbg">
				<div>众盾安全</div>
			</div>
			<div>
				<div id="choosecity">	
					<div>选择考试城市</div>
					<div>       
						<router-link  to="city">
							<span>北京市</span>
							<span> <x-icon type="ios-arrow-forward" size="17" style="vertical-align: middle;color:#999"></x-icon></span>
						</router-link>
					</div>
				</div>
			</div>
			<!--上部分 E-->
			<!--学习阶段 S-->
			<div id="jieduan">
				<p class="ex-choose-city" @click="lk">学习阶段</p>
				<div>
 				     <x-button  mini plain style="border-radius:99px;margin-right:0.12rem" v-for="item in wpList" :key="item.name"
					    :class="{active : active == item.name}" 
					    @click.native="selected(item.name)">
						{{item.name}}
					</x-button >
				</div>
			</div>
			<!--学习阶段 E-->                           
			<!-- 选择工种 S -->
			<div id="ex-gongzhong">
				<p class="ex-choose-city">选择工种</p>
				<ul class="ex-gongzhong-ul">
					<li v-for="item1 in gongzhong" class="ex-gongzhong-li" @click="choosegz(item1.children)">
						<div>
							<img :src='item1.imgsrc'>
							<p>{{item1.name}}</p>
						</div>
						<div v-transfer-dom>
					      <popup v-model="show13" position="bottom" max-height="50%">
					        <group>
					         	 <cell v-for="item2 in item1.children"  :title="item2.text" :key="item2.id"></cell>
					        </group>
					        <div style="padding: 10px;">
					          <x-button @click.native="show13 = false" type="primary"> 关闭</x-button>
					        </div>
					      </popup>
					    </div>
					</li>
				</ul>
			</div>
			<!-- 选择工种 E -->
		</div>
		<div class="ex-next">
			下一步
		</div>
	</div>
</template>
<script type="text/javascript">
import { TransferDom, Popup, Group, Cell, XButton, XSwitch, Toast, XAddress, ChinaAddressData } from 'vux'
	export default{
		 directives: {
		    TransferDom
		  },
		data() {
		    return {
		      show13: false,
		      wpList: [
		        {
		          name: '已报名'
		        },
		        {
		          name: '未报名'
		        },
		        {
		          name: '已报名(复审)'
		        }
		      ],
		      active:'',
		      gongzhong:[
		    	{
		    		id:'1',
		    		name:'电工作业1',
		    		imgsrc:require('@/assets/images/courseico.png'),
		    		children:[
		    			{
		    				id:'12',
		    				text :'工种子类1'
		    			},
		    			{
		    				id:'13',
		    				text :'工种子类2'
		    			},
		    			{
		    				id:'14',
		    				text :'工种子类3'
		    			},
		    			{
		    				id:'15',
		    				text :'工种子类1'
		    			},
		    			{
		    				id:'16',
		    				text :'工种子类2'
		    			},
		    			{
		    				id:'17',
		    				text :'工种子类3'
		    			}
		    		]
		    	},
		    	{
		    		id:'2',
		    		name:'电工作业2',
		    		imgsrc:require('@/assets/images/courseico.png')
		    	},
		    	{
		    		id:'3',
		    		name:'电工作业3',
		    		imgsrc:require('@/assets/images/courseico.png')
		    	},
		    	{
		    		id:'4',
		    		name:'电工作业4',
		    		imgsrc:require('@/assets/images/courseico.png')
		    	},
		    	{
		    		id:'5',
		    		name:'电工作业5',
		    		imgsrc:require('@/assets/images/courseico.png')
		    	},
		    	{
		    		id:'6',
		    		name:'电工作业6',
		    		imgsrc:require('@/assets/images/courseico.png')
		    	},
		   	 ]
		    }
		  },
		components: {
		    Popup,
		    Group,
		    Cell,
		    XSwitch,
		    Toast,
		    XAddress,
		    XButton
		  },
		  created:function(){
		  },
		 methods:{
		 
		 	lk:function(){
		 		this.$vux.alert.show({
			    title: "提示",
			    content: "哈哈哈"
			})
		 	},
		 	selected:function(name){
   				this.active = name;
			},
			choosegz:function(children){
				if(children){
					this.show13=true
			    }
			}
		 }
	}
</script>
<style type="text/css">
	body{
		font-family：'微软雅黑'
		 display: flex !important; 
	    flex-flow: column; 
	    min-height: 100vh;
	}
	#ex-step1>div:nth-of-type(1){ display: flex; 
      display: -webkit-flex;  
      /* vh 相对于可视区域的高度 */
      min-height: 100vh;  
      /* 设置主轴方向 */
      flex-direction: column;   }
	.ex-next{height:1.5rem;background: #5ebf83;color:#FFF;line-height:1.5rem; position: fixed;
		bottom:0;font-size:0.4rem;
		width:100%;height: 1.5rem;text-align:center;}
	#topbg{background: url(../../assets/images/topbg.png);height: 3.4rem;background-size:cover;background-repeat: no-repeat;overflow:hidden;}
	#topbg>div{color:#ffffff;font-size:0.56rem;text-align:center;padding-top:1rem;}
	#choosecity{overflow:hidden;padding:0.4rem 0.4rem;background:#FFF;vertical-align: middle;}
	#choosecity>div:nth-of-type(1){
		float:left;font-size:0.45rem;font-weight: bold;color:#444;
	}
	#choosecity>div:nth-of-type(2){
		color:#999 ;
		float:right;
	}
	#jieduan{margin-top:0.3rem;background:#FFF;padding:0.4rem;}
	.ex-choose-city{font-weight:bold;font-size:0.44rem;color:#505050;}
	#ex-gongzhong{padding:0.4rem;background:#FFF;}
	.ex-gongzhong-ul{}
	.ex-gongzhong-li{margin-top:0.3rem;width:20%;margin-right:5%;overflow:hidden;display: inline-block}
	.ex-gongzhong-li:nth-of-type(4n){margin-right:0;}
	.ex-gongzhong-li>div{display: block;}
	.ex-gongzhong-li>div>img{width:1rem;height:1rem;display: block;margin:0 auto;}
	.ex-gongzhong-li>div>p{text-align:center;margin:0.3rem 0;color:#999;}
	.emptyitem{
		width:0;
		visibility: hidden;
	}
	.active{
		border:1px solid #5ebf83 !important;
		background: #5ebf83 !important;
		color:#FFF !important;
	}

	/*组件css*/
	@import '~vux/src/styles/close.less';

.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.popup2 {
  padding-bottom:15px;
  height:400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
</style>