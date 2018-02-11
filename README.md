# Weex 相关

1. 如何动态插入标签?

有一个需求，请求接口获取信息，
资源类型有1.文本 2.图片
如果配接一个data属性比如这样

```
data(){
  return {
    content: '<text>Sample</text><image>...</image>'
  }
}

```
不过这样无法渲染出接口。通过weex-ui 我们找到了另一种解决方案

```
data(){
   return {
    configList: [
        {type: 'text', content: 'Sample'},
        {type: 'image', content: 'https://..'}
    ]
   }
},
created() {
  fetch...
  //组织data
},
components: {
    textComponent,
    imageComponent
}
//通过prop 传参数
<text-component :textValue="">

//textComponent
<template>
    <text>{{textValue}}</text>
</template>

//imageCompoent 同上。

```
这样就可以动态的渲染出组件了。
 