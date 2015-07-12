#CSS样式表知识点  

+ 引入时使用	···<link href="style.css" rel="stylesheet"/>···  

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