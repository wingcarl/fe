//可移植的文档遍历函数

/*
*返回元素e的第n层祖先元素，如果不存在此类元素或者该元素不为element则返回null
*/
function parent(e,n){
	if(n === undefined) n = 1;
	while(n-- && e) e = e.parentNode;
	if(!e || e.nodeType !== 1) return null;
	return e;
}

/*
*返回元素e的第n个兄弟元素
*如果n为正，返回后续兄弟元素
*if n<0 return e's previous siblings
*if n=0 return itself
*/
function sibling(e,n){
	while(e && n !== 0){
		if(n > 0){
			if(e.nextElementSibling) e = e.nextElementSibling;
			else {
				for(e=e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling)
					;
			}
			n--;
		}
		else{
			if(e.previousElementSibling) e = e.previousElementSibling;
			else{
				for(e=e.prevousSibling; e&&e.nodeType !== 1; e = e.previousSibling)
					;
			}
			n++
		}
	}
	return e;
}

function textContent(e){
	var child,type,s="";
	for(child = e.firstChild; child != null; child = child.nextSibling){
		type = child.nodeType;
		if(type === 3 || type === 4)
			s += child.nodeValue;
		else if(type === 1)
			s += textContent(child);
	}
	return s;
}