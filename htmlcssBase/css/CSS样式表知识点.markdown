#CSS样式表知识点  



+ 引入时使用
```
<link href="style.css" rel="stylesheet">
```  




##CSS常用属性    

+ width/height 长宽  

+ background 可以指定颜色。  

	+ 背景属于复合属性，可以有多个属性。可以写在一行，可以分为多行来写。尽量使用复合属性来写。    

	+ eg. background:blue no-repeat fixed center top   

	+ background-attachment background-image background-color  

	+ url()可以指定背景图片  

		+ no-repeat(不重复)  

		+ repeat-x repeat-y repeat  

		+ 10px 50px 控制背景图片的位置，x轴，y轴的位置。 可以给予百分数。 可以直接使用left center right。  

		+ fixed/scroll 图片固定，不会随着滚动条的移动而移动  

+ border 边框样式  

	+ 10px solid gray  

+ padding 内边距  

	+ 盒子里面的内容距离盒子边的距离  

	+ padding-top etc.  

	+ **盒子的width/height不包括padding的距离**  

+ margin 外边距  

	+ margin-bottom margin-top。**两个盒子之间的上下外边距会叠加**  

	+ 两个盒子相互包含。**里面的外边距会传递给父级**  

	+ margin-left:auto margin-right:auto;会自动居中。  
+ 文本字体
  + font-size 文字大小(*最小的是12px，保证文字大小都是偶数*）
  + font-family 文字字体(*可以直接写中文*），可以加多个字体
  + font-color blue/red/... rgb(165,56,59) 十六进制色彩值#a3c3aa
  + line-height 行高 **如果要使文字上下居中，则把line-height 设为盒子的width
  + text-align 文本的水平对齐方式 left center right
  + text-indent *使用em作为单位会以文字作为单位*  
  + font-weight bold normal
  + font-style italic normal  斜体
  + text-decoration underline overline line-throught 上划线、下划线、删除线  
  + letter-spacing/word-spacing 控制字间距/字母间距  
##CSS盒模型  
+ 页面中盒子的大小等于border+padding+width/height  
##常用标签
+ a标签可以作为链接，锚点(#+id)，下载的作用。
+ 标题标签 ```<h1><h2><h3>```
+ 段落标签 ```<p>```
+ 语气加强 ```<strong>  <em>```
+ 区分样式 ```<span>```
##样式的覆盖顺序
+ 同级样式默认后者覆盖前者。多级覆盖后级，class高于普通选择符
+ ```普通标签选择符<class<id<style行间样式<JS修改```
##默认样式重置
```
<style>
body,p,h1,h2,h3,h4,h5,h6,dl,dd{margin:0;font-size:12px;}
ol,ul{list-style:none;padding:0;margin:0;}
a{text-decoration:none;}
img{border:none;}
</style>
```
##内联/块
+ 内联，内嵌，行内：
    + 后面可以接着跟同类型的元素
    + 内容撑开宽度
    + 内嵌不支持宽高
    + 不支持上下的内外边距
    + 代码换行被解析
+ 块：
    + 独占一行
    + 没有宽度时，默认占满一行的宽度
    + 支持所有的CSS命令
+ inline-block
    + 内联和块的结合体
    + 代码换行被解析
    + IE6 IE7不支持inline-block
##CSS实战
+ 有时候要去掉默认的内容,**样式重置**。eg.body的margin=0。ul el list-style=none。
```
<style>
*{padding:0;margin:0;}
li{list-style:none}
</style>
```