<template>
  <div>
  	<div id="bmhead">
    	<x-header :left-options="{backText: ''}"><b>支付订单</b></x-header>
    	<div class="ex-topimg"><img src="../../assets/images/jf.png"></div>
    </div>
    <!--支付时间价格 S-->
    <div id="ex-order-info">
    	<p>支付剩余时间09:58</p>
    	<p>￥650.00</p>
    	<p>安培教育 -38384383838438</p>
    </div>
    <!--支付时间价格 E-->
    <!--支付码兑换 S-->
    <div id="ex-zfm">
    	<group>
      		<cell title="支付码兑换" is-link >
      		</cell>
      	</group>
    </div>
    <!--支付码兑换 E-->
   <div id="ex-chose-pay">
    <checklist  :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>
  </div>

  <div class="ex-next" @click="queren">
	 确认支付
  </div>
 </div>
</template>
<script type="text/javascript">
	import {XHeader,Group, Cell,Checklist} from 'vux'
	import _ from 'lodash'
	export default {
	components: {
		 XHeader,Group, Cell,Checklist
		},
	methods: {
	    change (val, label) {
	      console.log('change', val, label)
			},
			queren(){
				this.$vux.toast.show({
            text: '支付成功',
            type:'text',
            position: 'middle'
				})
				setTimeout(this.$router.push({path:'/home'}),2000);
				
			},
	  },
	  data () {
	    return {
	      commonList: [ '微信', '支付宝'],
	      radioValue: ['微信']
	    }
	  }
  }
</script>
<style type="text/css">
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
/*订单信息*/
#ex-order-info{
	background: #FFF;
	padding:0.4rem 0;
}
#ex-order-info>p{text-align:center;}
#ex-order-info>p:nth-of-type(1){
	font-size:0.5rem;color:#888;
}
#ex-order-info>p:nth-of-type(2){
	font-size: 0.95rem;color:#000;
	line-height:1.9rem;
}
#ex-order-info>p:nth-of-type(3){
	font-size:0.45rem;
	color: #999
}
/*支付码*/
#ex-zfm .weui-cell_access{padding:0.4rem 0.4rem;}
#ex-chose-pay{margin-top:0.4rem;}

.ex-next{height:2rem;background: #5ebf83;color:#FFF;line-height:2rem; position: fixed;
		bottom:0;font-size:0.66rem;
		width:100%;text-align:center;}
</style>