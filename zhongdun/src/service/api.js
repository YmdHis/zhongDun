import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.baseURL = 'http://zdapp.808w.com';
axios.defaults.timeout = 117000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//POST传参序列化
axios.interceptors.request.use((config) => {
    //在发送请求之前做些什么
    if(config.method  === 'post'||'get'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    //对请求错误做些什么
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
       if(!res.code=='0'){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export function fetch(type='GET',url, params) {
    return new Promise((resolve, reject) => {
      type = type.toUpperCase();

      if(type == "POST"){
          axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
      }else if(type == "GET"){
        axios.get(url,{params:params})
          .then(response => {
            resolve(response.data);
          },err => {
             reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      }
    })
}



//首页新闻
export const shouyeNews = (params) => fetch('GET','/app/news/indexlist',params);
