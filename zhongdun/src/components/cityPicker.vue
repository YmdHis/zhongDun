<template>
  	<div id="city_picker">
        <div class="header clear">
            <img src="../images/close.png" class="img-close" @click="closeBtn()"/>
            <p class="header-title">选择地址</p>
        </div>
        <div class="city_input_box">
            <div class="city_input_style">
                <i class="city_input_icon"><img src="../images/sear_icon.png" alt=""></i>
                <input type="search" name="city" placeholder="请输入学校/商务楼/写字楼等" required="required" class="city_input">
            </div>
        </div>
        <div class="city_positioning">
            当前定位城市：{{guessCity}}  重新定位
        </div>
        <section class="city_name_box">
            <ul>
                <li v-for="(value, key, index) in sortgroupcity" :key="key">
                    <h4 :id="key">{{key}}
                        <span v-if="index == 0">（按首字母排序）</span>
                    </h4>
                    <ul class="clear">
                        <li v-for="item in value" :key="item.id" class="ellipsis city_name_li" >{{item.name}}</li>
                    </ul>
                </li>
            </ul>
        </section>
        <aside class="letter-aside">
          <ul>
            <li v-for="(value, key, index) in sortgroupcity" @click="naver(key)" ref="key">
                {{key}}
            </li>
          </ul>
        </aside>
    </div>
</template>

<script>
import data from 'src/config/cityCenter.json'
import {setStore,getStore} from 'src/config/mUtils'

export default {
    components:{
    },
    data(){
        return{
            guessCity: '',   //当前城市
            guessCityid: '', //当前城市id
            groupcity: {},   //所有城市列表
        }
    },
    mounted(){
       this.groupcity = data 
    },
    computed:{
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupcity[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                }
            }
            return sortobj
        }
    },
    methods:{
        //点击图标关闭
        closeBtn(){
            this.$emit("closeMsg", "close");
        },
         naver: function (id) { // 点击右边字母滚动
                let obj = document.getElementById(id);
                 let obj1 = document.getElementById('city_picker');
                console.log(obj);
                let oPos = obj.offsetTop;
                console.log(oPos)
                return window.scrollTo(0, oPos - 36)
            }
    }
     
}

</script>
<style scoped>
#city_picker{
    background: #fff;
}
.header{
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 999;
    padding: .3rem .2rem .7rem;
}
.img-close{
    width: 1rem;
    height: 1rem;
    float: left;
}
.header-title{
    color: #5ebf83;
    font-size: .8rem;
    text-align: center;
}
.city_input_box{
    padding:.3rem .5rem;
    padding-top:2rem; 
    font-size: .7rem;
    width: 100%;
    position: relative;
}
.city_input_style{
    display: block;
    background: #f5f5f5;
    width: 100%;
    padding:.3rem .5rem;
}
.city_submit{
   position: absolute;
   right: 0;
}
.city_input_icon img{
    width: .7rem;
    vertical-align: middle;
}
.city_input{
    width: 12rem;
    background:none;
}
.city_name_box h4{
    background: #f1f1f1;
    font-size: .5rem;
    padding: .5rem;
  }
  .city_name_li{
    padding: .5rem;
     font-size: .7rem;
  }
  .letter-aside{
    position: fixed;
    right: 0;
    top: 5rem;
    width: 2rem;
    text-align: center;
    line-height: 1rem;
    font-size: .5rem;

  }
  .city_positioning{
    font-size: .6rem;
    padding:.5rem .3rem;
  }
</style>

