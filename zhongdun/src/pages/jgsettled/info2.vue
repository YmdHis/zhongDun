<template>
  <div>
    <div id="bmhead">
      <x-header :left-options="{backText: ''}"><b>申请入驻</b></x-header>
    </div>
    <!--基本信息 S--> 
    <div id="ex-sub">
      <p class="jgtit">负责人信息</p>
      <group>
        <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      </group>
      <group>
        <x-input title="职务" name="" placeholder="职务" ></x-input>
      </group>
      <group>
        <x-input title="电话" name="username" placeholder="请输入电话号码"  keyboard="number" ></x-input>
      </group>
    <div style="background:#FFF;padding-bottom:2rem">
      <p class="jgtit" style="margin-top:0.32rem;">身份证号码</p>
      <div class="sfzhm">
        <div>
          <p>上传身份证正面</p>
          <img src="../../assets/images/addimg2.png">
        </div>
        <div>
          <p>上传身份证背面</p>
          <img src="../../assets/images/addimg2.png">
        </div>
      </div>
      <p class="warminfo"><span class="red">*</span>上传图片注意清晰，不超过2M</p>
    </div>
  </div>
  <!--基本信息 E-->   
  <!--弹框显示 S--> 

 <div v-transfer-dom>
  <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '90%', 'background-color': 'white'}">
   <div class="img-box ex-dig">
        <p class="confirminfo">信息确认</p>
        <div>
          <p class="ptit">机构信息</p>
          <p>机构名称：<span>武汉安培教育科技有限公司</span></p>
          <p>联系电话：<span>0.27-888-888</span></p>
          <p>营业执照号码：<span>5945454545454</span></p>
          <p>真实地址：<span>武汉市武昌区积玉桥白云边大厦</span></p>
          <div class="infoimg">
              <div>营业执照副本：</div>
              <div class="jgimg">
                <div><img src="../../assets/images/bmbanner.png"></div>
              </div>
          </div>
          <div class="infoimg">
              <div>机构图片：</div>
              <div class="jgimg">
                <div><img src="../../assets/images/bmbanner.png"></div>
                 <div><img src="../../assets/images/bmbanner.png"></div>
                  <div><img src="../../assets/images/bmbanner.png"></div>
              </div>
          </div>
          <p class="ptit">负责人信息</p>
          <p>姓名：<span>章丘</span></p>
          <p>职务：<span>总经理</span></p>
          <p>电话：<span>1878654556</span></p>
          <p>身份证号码：<span>4212154545664896633</span></p>
         <div class="infoimg">
              <div>营业执照副本：</div>
              <div class="jgimg">
                <div><img src="../../assets/images/bmbanner.png"></div>
              </div>
          </div>
          <div class="infoimg">
              <div>营业执照副本：</div>
              <div class="jgimg">
                <div><img src="../../assets/images/bmbanner.png"></div>
              </div>
          </div>
        </div>
          <div id="ex-subtn">
           <x-button mini style="color:#000;background:#dadada;margin-right:0.3rem"  @click.native="showDialogStyle=false">返回修改</x-button>
           <x-button mini type="primary" @click.native="tijiao">确认提交</x-button>

         </div>
      </div>
   
  </x-dialog>
</div>
  <!--弹框显示 E--> 
  <div class="ex-next1">
   <div @click="toInfo()">返回上层</div>
   <div @click="showDialogStyle=true">确定提交</div>
  </div>
 </div>
</template>
<script type="text/javascript">
  import {XHeader,XInput,Group, XDialog, XButton, XSwitch,TransferDomDirective as TransferDom} from 'vux'
  export default {
 directives: {
TransferDom
  },
  components: {
     XHeader,XInput,Group, XDialog, XButton, XSwitch
    },
  methods: {
     toInfo(){
       this.$router.push("/info1");
     }
  },
  data () {
    return {
       showDialogStyle: false
    }
  }
}
</script>
<style type="text/css" >
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
/*报名信息*/
#ex-sub1{font-size:0.66rem;margin-top:1.6rem;color:#FFF}
#ex-sub .weui-cells{font-size:0.66rem;}
#ex-sub .weui-cell__hd>label{
  width:4.3rem !important;
  text-align:left !important;
  font-size:0.64rem;
  color:#000;
}
#ex-sub{margin-top:0.5rem;}
#ex-sub .weui-cells{margin-top:0;}
#ex-sub input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{ 
color:#CCC; 
font-size:0.6rem; 
}
#ex-sub  .weui-cells:after{border-bottom:none;}
#ex-sub .vux-x-input{padding-top:0.6rem;padding-bottom:0.4rem;}
.jgtit{color:#666;font-size:0.64rem;padding:0 0.6rem;line-height:1.8rem}

/*证件上传*/
.zjsc{overflow:hidden;font-size:0.64rem;padding:0.6rem;}
.zjsc>span{display: block;float:left;width:30%;}
.zjsc>div{float: right;width:70%;position: relative;top:-0.23rem;}
.zjsc>div>div{width:67%;height:1.3rem;background: #FFF;border:1px solid #dadada;display: inline-block;border-radius:0.2rem;height: 1.4rem}
.zjsc>div>a{display: inline-block;width:3.2rem;font-size:0.6rem;background:#5ebf83;color:#FFF;line-height: 1.4rem;text-align:center;border-radius:0.2rem;vertical-align:top;}
.zjsc>div>img{width:4rem;}
.warminfo{font-size:0.6rem;color:#999;padding:0.4rem 0.5rem;}
.sfzhm{display: flex;padding:0.2rem 0.6rem ;justify-content: space-around;}
.sfzhm>div>p{font-size:0.64rem;text-align:center;}
.sfzhm>div>img{width:100%;display: block;margin-top:0.6rem;}
.sfzhm>div{width:38%;}
/*弹框样式*/
.ex-dig{
  font-size:0.66rem;text-align:left;
  padding:0 0.6rem 0.6rem 0.6rem;
  line-height: 1.4rem;
      overflow-y: auto;
    height: 100%;
}
.ex-dig>div>p>span{color:#555;}
.weui-dialog{

  overflow:auto !important;
  width:90% !important;
  max-width:90% !important;
}
.confirminfo{
  font-size:1.1rem;
  border-bottom:1px solid #dadada;text-align:center;line-height: 3.2rem;
  font-weight: bold;
}
.ptit{
  font-size:0.76rem;
  line-height: 1.6rem;
  margin-top:0.6rem;
}
.jgimg{display: flex;justify-content: space-around;}
.jgimg>div{width:30%;min-height: 3rem}
.jgimg>div>img{width:100%;height: 100%}
#ex-subtn{text-align:right;margin-bottom:0.4rem;margin-top:0.6rem;}
#ex-subtn button{border-radius:1px;background: #5ebf83;margin-right:0.64rem;font-size:0.64rem;}

/*底部按钮*/
.ex-next1{position: fixed;bottom:0;width:100%;}
.ex-next1>div{ display: inline-block;width:40%;font-size:0.66rem;height: 2rem;line-height:2rem;text-align:center;}
.ex-next1>div:nth-of-type(1){
  background:#eaeaea;margin-left:5%;
  margin-right:8%;

}
.ex-next1>div:nth-of-type(2){
  background:#5ebf83;color:#FFF;margin-right:5%;
}
</style>