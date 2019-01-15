<template>
	<div id="ex-step1">
		<div>
			<!--上部分 S-->
			<div id="topbg">
				<div>众盾安全</div>
			</div>
			<div>
				<div id="choosecity">	
				  <div>
				    <group><cell title="选择考试城市" :value="LocationCity" is-link></cell></group>
				  </div>
				</div>
			</div>
			<!--上部分 E-->
			<!--学习阶段 S-->
			<div id="jieduan">
				<p class="ex-choose-city" @click="lk">证书状态</p>
				<div>
 				     <x-button  mini plain style="border-radius:99px;margin-right:0.4rem;padding-left:0.6rem" v-for="item in wpList" :key="item.name"
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
					<li v-for="item1 in gzlists" class="ex-gongzhong-li" @click="choosegz(item1.children)">
						<div>
							<img :src='item1.icon'>
							<p>{{item1.name}}</p>
						</div>
						<!-- <div v-transfer-dom>
					      <popup v-model="show13" position="bottom" max-height="50%">
					        <group>
					         	 <cell v-for="item2 in item1.children"  :title="item2.name" :key="item2.id"></cell>
					        </group>
					        <div style="padding: 10px;">
					          <x-button @click.native="show13 = false" type="primary"> 关闭</x-button>
					        </div>
					      </popup>
					    </div> -->
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
	//
import BMap from 'BMap'
import {showlist} from 'src/service/api'
import {ChinaAddressV4Data,XAddress,TransferDom, Popup, Group, Cell, XButton, XSwitch, Toast,
 Value2nameFilter as value2name } from 'vux'
	export default{
		 directives: {
		    TransferDom
		  },
		data() {
		    return {
					LocationCity:"定位中",
		      title:'',
		      value_0_1: [],
		      value: [],
		      addressData: ChinaAddressV4Data,
		      showAddress: false,
		      show13: false,
		      wpList: [
		        {
		          name: '有证'
		        },
		        {
		          name: '无证'
		        }
		      ],
		      active:'有证',
		      gzlists:[]
		    }
		  },
		components: {
			XAddress,
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
			},
			onShadowChange (ids, names) {
				//   console.log(ids, names)
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
		 mounted(){
		 	showlist().then(res=>{
		 		this.gzlists =res.data;
		 		console.log(this.gzlists);
		 		//alert(this.gzlist)
		 	});
		 	this.getLocation(); 
		 }
	}
</script>
<style type="text/css">
	/* body{
		font-family：'微软雅黑'
		 display: flex !important; 
	    flex-flow: column; 
	    min-height: 100vh;
	} */
	#ex-step1>div:nth-of-type(1){ display: flex; 
      display: -webkit-flex;  
      /* vh 相对于可视区域的高度 */
      min-height: 100vh;  
      /* 设置主轴方向 */
      flex-direction: column;   }
	.ex-next{height:2rem;background: #5ebf83;color:#FFF;line-height:2rem; position: fixed;
		bottom:0;font-size:0.64rem;
		width:100%;text-align:center;}
	#topbg{background: url(../../assets/images/topbg.png);height: 5rem;background-size:cover;background-repeat: no-repeat;overflow:hidden;}
	#topbg>div{color:#ffffff;font-size:0.8rem;text-align:center;padding-top:2rem;}
	#choosecity .vux-popup-picker-value{font-size:0.66rem;}
	#jieduan{margin-top:0.3rem;background:#FFF;padding:0.4rem;}
	.ex-choose-city{font-weight:bold;font-size:0.67rem;color:#505050;}
	#ex-gongzhong{padding:0.4rem;padding-top:0.8rem;background:#FFF;}
	.ex-gongzhong-ul{}
	.ex-gongzhong-li{margin-top:0.8rem;width:20%;margin-right:5%;overflow:hidden;display: inline-block}
	.ex-gongzhong-li:nth-of-type(4n){margin-right:0;}
	.ex-gongzhong-li>div{display: block;}
	.ex-gongzhong-li>div>img{width:1.5rem;height:1.5rem;display: block;margin:0 auto;}
	.ex-gongzhong-li>div>p{text-align:center;margin:0.3rem 0;color:#999;font-size:0.6rem;}
	.emptyitem{
		width:0;
		visibility: hidden;
	}
	.active{
		border:1px solid #5ebf83 !important;
		background: #5ebf83 !important;
		color:#FFF !important;
	}

</style>