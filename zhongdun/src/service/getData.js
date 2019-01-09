import ajax from '../config/ajax'
import {getStore} from '../config/mUtils'


//首页新闻
export const shouyeNews = () => ajax('POST','/app/news/indexlist',{},);