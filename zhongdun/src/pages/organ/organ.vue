<template>
  <div id="organ">
    <tab :line-width="3" custom-bar-width="10px" active-color="#5ebf83" bar-active-color="5ebf83">
      <tab-item selected @on-item-click="">培训机构</tab-item>
      <tab-item @on-item-click="">培训老师</tab-item>
      <tab-item @on-item-click="">申请入驻</tab-item>
    </tab>
    <x-switch title="set max-height=50%" v-model="show13"></x-switch>
    <div v-transfer-dom>
      <popup v-model="show13" position="bottom" max-height="50%">
        <group>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="show13 = false" plain type="primary"> Close Me </x-button>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom  } from 'vux'
import {shouyeNews} from 'src/service/api'

export default {
  directives: {
    TransferDom
  },
	components: {
		Tab,
		TabItem,
    Popup,
    XSwitch,
    Cell,
    Group,
    XButton
	},
	data () {
	    return {
        show13: false,
	    }
  	},
  mounted(){
    shouyeNews().then(res => {
      console.log(res);
    })
  },
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

</style>