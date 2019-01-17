# **众盾APP后端接口文档**

#### 域名
> http://zdapp.808w.com

#### 返回数据格式

> JSON

#### HTTP请求方式
> GET|POST



#### 公用返回字段

> | 返回字段 | 字段类型      | 说明                             |
> | :------- | :------------ | :------------------------------- |
> | status   | int           | 返回结果状态。1：正常；0：异常。 |
> | msg      | string        | 返回信息                         |
> | time     | string        | 返回时间戳                       |
> | data     | string\|array | 业务相关数据                     |



------

## 一、新闻相关接口

### 1\. 首页推荐新闻列表

URL

> http://zdapp.808w.com/app/news/indexlist

接口功能

> 获取首页推荐新闻列表

请求参数

> | 参数 | 必选 | 类型 | 说明 |
> | :--- | :--- | :--- | ---- |
> | 无   |      |      |      |

业务相关数据

> | 数组字段  | 字段类型 | 说明           |
> | :-------- | :------- | :------------- |
> | id        | int      | 新闻分类id     |
> | name      | string   | 新闻分类名     |
> | thumbnail | string   | 新闻分类缩略图 |
> | articles  | array    | 此分类下的文章 |





> 接口示例
>
> 地址：http://zdapp.808w.com/app/news/indexlist

``` javascript

```

------

### 2\. 新闻文章列表

URL

> http://zdapp.808w.com/app/news/showlist

接口功能

> ```
> 新闻文章列表
> ```

请求参数

> | 参数 | 必选 | 类型 | 说明       |
> | :--- | :--- | :--- | ---------- |
> | id   | 是   | int  | 新闻分类id |

业务相关数据

> | 数组字段       | 字段类型 | 说明           |
> | :------------- | :------- | :------------- |
> | id             | int      | 文章id         |
> | post_hits      | int      | 文章点击次数   |
> | post_like      | int      | 文章点赞次数   |
> | post_title     | string   | 文章标题       |
> | published_time | int      | 文章发布时间戳 |
> | thumbnail      | string   | 文章缩略图     |





> 接口示例

> 地址：http://zdapp.808w.com/app/news/showlist?id=196

``` javascript

```

------

### 3\. 新闻文章内容

URL

> http://zdapp.808w.com/app/news/article

接口功能

> ```
> 新闻文章内容
> ```

请求参数

> | 参数 | 必选 | 类型 | 说明       |
> | :--- | :--- | :--- | ---------- |
> | id   | 是   | int  | 文章id     |
> | cid  | 否   | int  | 所属分类id |

业务相关数据

> | 数组字段    | 字段类型 | 说明         |
> | :---------- | :------- | :----------- |
> | article     | array    | 文章所有信息 |
> | nextArticle | array    | 下篇文章     |
> | prevArticle | array    | 上篇文章     |



> 接口示例

> 地址：http://zdapp.808w.com/app/news/article?id=731&cid=196

```javascript

```

------



## 二、工种相关接口

###  1.工种分类接口

URL

> http://zdapp.808w.com/app/category/showlist

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数 | 必选 | 类型 | 说明 |
> | :--- | :--- | :--- | ---- |
> | 无   |      |      |      |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 工种id   |
> | name     | string   | 工种名称 |
> | icon     | string   | 工种图标 |
> | children | array    | 子分类   |



> 接口示例

> 地址：http://zdapp.808w.com/app/category/showlist

```javascript

```

-----------



## 三、机构相关接口

### 1.机构列表接口

URL

> http://zdapp.808w.com/app/company/showlist

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | type      | 否   | string | ‘default’：默认排序，‘map’：距离，‘comment’：评论数，‘price’：价格 |
> | longitude | 是   | string | 经度                                                         |
> | latitude  | 是   | string | 纬度                                                         |
> | category  | 否   | int    | 工种分类id                                                   |
> | range     | 否   | int    | 距离范围                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 机构id   |
> | name     | string   | 机构名称 |
> | icon     | string   | 机构图片 |
> | latitude | string   | 经度     |
> | latitude | string   | 纬度     |



> 接口示例

> 地址：http://zdapp.808w.com/app/company/showlist?type=map&range=30&category=1

```javascript

```

------

### 2.机构详细内容接口

URL

> http://zdapp.808w.com/app/company/details

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | companyId | 是   | int    | 机构id                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 机构id   |
> | name     | string   | 机构名称 |
> | more     | string   | 机构图片 |
> | latitude | string   | 经度     |
> | latitude | string   | 纬度     |
> | mobile | string   | 电话    |



> 接口示例

> 地址：http://zdapp.808w.com/app/company/details?companyId=1

```javascript

```

------

### 3.机构工种一级分类接口

URL

> http://zdapp.808w.com/app/company/categoryByCompanyId

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | companyId | 是   | int    | 机构id                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 分类id   |
> | name     | string   | 分类名称 |


> 接口示例

> 地址：http://zdapp.808w.com/app/company/categoryByCompanyId?companyId=1

```javascript

```

------

### 4.机构工种二级分类接口

URL

> http://zdapp.808w.com/app/category/two_cateById

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | parentId | 是   | int    | 分类一级id                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 分类id   |
> | name     | string   | 分类名称 |


> 接口示例

> 地址：http://zdapp.808w.com/app/category/two_cateById?parentId=1

```javascript

```

------

### 5.机构工种三级分类接口

URL

> http://zdapp.808w.com/app/company/three_cateById

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | categoryId | 是   | int    | 分类二级id                                                     |
> | companyId | 是   | int    | 机构id                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | title       | string      | 课程名称   |
> | price     | string   | 机构课程价格 |
> | id     | int   | 机构课程id |


> 接口示例

> 地址：http://zdapp.808w.com/app/company/three_cateById?categoryId=187&companyId=1

```javascript

```

------

### 6.机构总点评星级展示

URL

> http://zdapp.808w.com/app/company/companyRemark

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | companyId | 是   | int    | 机构id                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | companyId | int      | 机构id   |
> | rank1     | int   | 服务 |
> | rank2     | int   | 教学 |
> | rank3     | int   | 环境 |
> | rank4     | int   | 收费 |
> | count_comment     | int   | 机构总评论数 |


> 接口示例

> 地址：http://zdapp.808w.com/app/company/companyRemark?companyId=1

```javascript

```

------

### 7.机构评论列表接口

URL

> http://zdapp.808w.com/app/blog/blogs

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | limit | 是   | int    | 每页条数                                                     |
> | page | 是   | int    | 页数                                                     |
> | cat_type | 是   | tring    | 评论类型   机构：company  用户： |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | string      | 评论id   |
> | readed_count     | string   | 阅读数量 |
> | comment_count     | int   | 评论数量 |
> | praise_count     | int   | 点赞数量 |
> | rank1     | int   | 服务 |
> | rank2     | int   | 教学 |
> | rank3     | int   | 环境 |
> | rank4     | int   | 收费 |
> | user_id     | int   | 用户id |
> | title     | string   | 评论标题 |
> | content     | string   | 评论内容 |
> | createdTime     | int   | 评论时间 |


> 接口示例

> 地址：http://zdapp.808w.com/app/blog/blogs?limit=20&page=1&cat_type=company

```javascript

```

------

### 8.立即报名短信验证码接口

URL

> http://zdapp.808w.com/app/public/appSend

接口功能

> ```
> 发送短信验证码
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | mobile | 是   | int    | 手机号                                                   |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | code       | int      | 短信发送状态（0失败，1成功）   |
> | msg     | string   | 返回的信息 |

> 接口示例

> 地址：http://zdapp.808w.com/app/puliic/appSend?mobile=12345678911

```javascript

```

------

### 9.立即报名表单提交接口

URL

> http://zdapp.808w.com/app/public/addOrder

接口功能

> ```
> 提交内容生成订单
> ```

请求参数

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | company_id       | int      | 机构id   |
> | course_ids     | string   | 课程ids |
> | user_nickname     | string   | 姓名 |
> | sex   | string   | 性别 |
> |   mobile   | int   | 手机号 |
> | code     | int   | 验证码 |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | code       | 0,1      | 订单状态（0失败，1成功）   |
> | msg     | string   | 返回的信息 |
> | order_sn       | string      | 订单号   |
> | total_money     | string   | 订单价格 |


> 接口示例

> 地址：http://zdapp.808w.com/app/puliic/addOrder

```javascript

```

------
