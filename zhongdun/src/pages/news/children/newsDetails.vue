<template>
  <div id="newsList" style="background: #fff;">
    <div class="header">
      <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        新闻详情
      </x-header>
    </div>
    <div class="news_box">
      
    </div>
  </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem,} from 'vux'
import {newsDetails} from 'src/service/api'
export default {
  components: {
    XHeader,
    Flexbox, 
    FlexboxItem,
  },
  data () {
    return {
      list:[],
       borderColor: {
        borderColor: '#333'
      },
    }
  },
  methods:{
   back(){
        this.$router.go(-1);//返回上一层
    },
  },
   mounted(){
    newsDetails({id:this.$route.query.id}).then(res => {
      this.list = res;
      console.log(this.list);
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

</style>