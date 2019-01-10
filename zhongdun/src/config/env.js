/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = '/images/';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = 'http://zdapp.808w.com';
    imgBaseUrl = 'http://zdapp.808w.com/images/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}