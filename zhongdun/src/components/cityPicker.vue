<template>
  	<div id="city_picker">
        <div class="header clear">
            <img src="../images/close.png" class="img-close" @click="closeBtn()"/>
            <p class="header-title">选择地址</p>
        </div>
        <div>
            当前定位城市：{{guessCity}}  重新定位
        </div>
        <section>
            <ul>
                <li v-for="(value, key, index) in sortgroupcity" :key="key">
                    <h4>{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="clear">
                        <li v-for="item in value" :key="item.id" class="ellipsis" >{{item.name}}</li>
                    </ul>
                </li>
            </ul>
        </section>
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
        }
    },
}

</script>
<style scoped>
#city_picker{
    background: #f5f5f5;
}
.header{
    width: 100%;
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
</style>

