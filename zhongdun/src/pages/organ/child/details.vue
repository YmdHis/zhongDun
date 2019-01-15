<template>
  <div id="organ_details">
    <div class="details_header">
      <x-header :left-options="{backText: ''}" style="background-color:#f5f5f5;color: #333;">
        机构详情
       
      </x-header>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  },
  data () {
    return {
    }
  },
  methods:{
   
  }
}
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  
</style>