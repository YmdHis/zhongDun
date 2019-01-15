<template>
  <div>
    <!--搜索框-->
    <div id="searchbox">
      <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search">  
        </search>
        <div id="search_kinds">
          <div  v-for="item in wpList" :key="item.name"
              :class="{active : active == item.name}" 
              @click="selected(item.name)" >{{item.name}}
          </div>
        </div>
  </div>
   <!--搜索框 E-->
   <!--历史搜索 S-->
<div id="search_con">
  <div class="serach_history">
    <p class="searchtit">历史搜索</p>
    <div style="border:1px solid #fff;min-height: 3.4rem;height:2.2rem;overflow:hidden" id="searcha">
      <div>专工考证</div>
      <div>专业制冷工考证</div>
      <div>专业制冷证</div>
      <div>专业制冷工考证</div>
       <div>专工考证</div>
      <div>专业制冷工考证</div>
      <div>专业制冷证</div>
      <div>专业制冷工考证</div>
    </div>
    <p style="text-align: center"><x-icon type="ios-arrow-down" size="24" @click="showmore" id="x-t"></x-icon></p>
  </div>
  <!--历史搜索 E-->
  <!--搜索发现 S-->
  <div class="serach_history">
    <p class="searchtit">搜索发现</p>
    <div class="search_find">
      <div>专工考证</div>
      <div>专业制冷工考证</div>
      <div>专业制冷证</div>
      <div>专业制冷工考证</div>
    </div>
  </div>
</div>
  <!--搜索发现 E-->
</div>
</template>
<script>
import { Search} from 'vux'
export default {
  components: {
    Search
  },
  methods: {
    setFocus () {
    //  this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    selected(name){
        this.active = name;
      },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },showmore(){
      if($('#searcha').height()<82){
        $("#searcha").animate(
          {height:"100%"},function(){
            $('#x-t').removeAttr('type');
          }
        )
      }else{
        $("#searcha").animate(
          {height:"2.2rem"},function(){
            $('#x-t').attr('type','ios-arrow-up');
          }
         
        )
      } 
    }
  },
  data () {
    return {
      results: [],
      value: '安全生产考证报名',
       wpList: [
            {
              name: '全部'
            },
            {
              name: '机构'
            },
            {
              name: '工种'
            }
          ],
          active:'全部'
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
<style type="text/css">
#searchbox{padding-top:0.8rem;background: url(../../assets/images/topbg.png);height: 6rem;background-size:cover;background-repeat: no-repeat;overflow:hidden; }
  #searchbox .weui-search-bar{background: transparent;font-size:0.66rem;}
  #searchbox .weui-search-bar__cancel-btn{color:#333;padding-top:0.1rem;}
  #searchbox form{padding:0.1rem 0;border-radius:0.8rem;}
  #searchbox .weui-search-bar:before,#searchbox .weui-search-bar:after{border:none;}
  .active{color:#333 !important;border-bottom:2px solid #333;}
  #searchbox .weui-search-bar__label {
    padding-top:0.15rem !important;
  }
  #search_con{border-radius:0.3rem;position: relative;top:-1.02rem;background: #FFF;overflow:hidden;}
  #searchbox .vux-search-fixed{position: relative !important;background: transparent !important;}
  #search_kinds{display: flex;justify-content: space-around;margin-top:0.38rem;}
    #search_kinds>div{font-size:0.62rem;padding-bottom:0.2rem;}
   .serach_history{
      padding:0.4rem;
      background: #FFF
    }
  .searchtit{font-size:0.67rem;color:#333;font-weight:bold;margin-bottom:0.5rem;margin-top:0.4rem;}
  .serach_history>div{padding:0 0.2rem}
  .serach_history>div>div{font-size:0.62rem;display: inline-block;background:#f1f0f0;padding:0.15rem 0.3rem;border-radius:0.2rem;margin-bottom:0.3rem;}

</style>