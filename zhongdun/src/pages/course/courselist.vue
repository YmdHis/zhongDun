<template>
  <div id="courseList">
	<tab :line-width = '1'>
      <tab-item v-for="item in types" :key="item.id" :selected="item.id===1">{{item.title}}</tab-item>
    </tab>
        <div class="course_list">
          <ul>
            <li class="course_li">
              <section >
                <img src="../../images/banner.png" alt="" class="course_img">
              </section>
              <div class="course_txt">
                <p class="course_txt_title">
                  <span class="ellipsis">制冷与空调安装维修</span>
                  <i></i>
                </p>
                <p class="course_price">￥850</p>
                <div class="course_class">
                  <span>制冷空调(初训)</span>
                </div>
                <div class="course_box_btn">
                  <router-link :to="{path: '/', query: {}}"  class="course_btn">
                    试听
                  </router-link>
                  <router-link :to="{path: '/', query: {}}"  class="course_btn">
                    购买
                  </router-link>
                </div>
              </div>
            </li>
            <li class="course_li">
              <section >
                <img src="../../images/banner.png" alt="" class="course_img">
              </section>
              <div class="course_txt">
                <p class="course_txt_title">
                  <span class="ellipsis">制冷与空调安装维修</span>
                  <i></i>
                </p>
                <p class="course_price">￥850</p>
                <div class="course_class">
                  <span>制冷空调(初训)</span>
                </div>
                <div class="course_box_btn">
                  <router-link :to="{path: '/', query: {}}"  class="course_btn">
                    试听
                  </router-link>
                  <router-link :to="{path: '/', query: {}}"  class="course_btn">
                    购买
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
import { Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom  } from 'vux'

export default {
  	name: 'course',
	components: {
		Tab,
		TabItem,
	    Popup,
	    XSwitch,
	    Cell,
	    Group,
	    XButton
	},
	data(){
		return{
			types:[{id:1,title:'电工作业'},{id:2,title:'制冷与空调作业'},{id:3,title:'高处作业'},{id:4,title:'焊接热切割'},{id:5,title:'电工'}],

		}
	},
	methods:{

	}
}
</script>

<style scoped>
	.course_list{
		background: #fff;
	}
	.course_li{
		display: -ms-flexbox;
		display: flex;
		border-bottom: .025rem solid #f1f1f1;
		padding: .7rem .8rem;
	}
	.course_img{
		width: 5rem;
		height: 3rem;
		display: block;
		margin-right: .5rem;
	}
	.course_txt{
		width: 100%;
		position: relative;
		text-align:left;
	}
	.course_txt_title{
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex-pack: justify;
		-webkit-box-pack: justify;
		justify-content: space-between;
		font-size: .5rem;
		color: #333;
	}
	.course_txt_title i{
		float:right;
		width: 3rem;
		background: url(../../images/course_icon.png) no-repeat;
		background-size: 100% 100%;
	}
	.course_txt_title span{
		font-size: .6rem;
		font-weight: bold;
		display: block;
		width: 70%;
		text-align: left;
	}
	.course_price{
		font-size: .6rem;
		line-height: 1.5rem;
	}
	.course_class{
		font-size: .6rem;
		color: #656565;
	}
	.course_box_btn{
		position: absolute;
		right: 0;
		bottom: .1rem;
	}
	.course_btn{
		font-size: .5rem;
		color: #5ebf83;
		border: 1px solid #5ebf83;
		border-top-right-radius: 5px;
		border-bottom-left-radius: 5px;
		margin-left: .2rem;
		padding: .1rem .3rem;
	}
</style>
