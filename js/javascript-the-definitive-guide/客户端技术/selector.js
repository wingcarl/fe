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

function reverse(n){
	//创建一个DocumentFragment作为临时容器
	var f = document.createDocumentFragment(); 
	//给documentFragment添加节点时，该节点自动会从n中删除
	while(n.lastChild) f.appendChild(n.lastChild);
	n.appendChild(f);
}

(function(){
	if(document.createElement("div").outerHTML) return;

	function outerHTMLGetter(){
		var container = document.createElement("div");
		container.appendChild(this.cloneNode(true));
		return container.innerHTML;
	}

	function outerHTMLSetter(value){
		var container = documetn.createElement("div");
		container.innerHTML = value;
		while(container.firstChild)
			this.parentNode.inserBefore(container.firstChild,this);
		this.parentNode.removeChild(this);
	}

	if(Object.defineProperty){
		Object.defineProperty(Element.prototype,"outerHTML",{
			get : outerHTMLGetter,
			set : outerHTMLSetter,
			enumerable: false,
			configurable: true
		});
	}
	else{
		Element.prototype.__defineGetter__("outerHTML",outerHTMLGetter);
		Element.prototype.__defineSetter__("outerHTML",outerHTMLSetter);
	}
})

var Insert = (function()}{
	if(document.createElement("div").inserAdjacentHTML){
		return{
			before : function(e,h){e.inserAdjacentHTML("beforebegin",h);},
			after : function(e,h){e.inserAdjacentHTML("afterend",h);},
			atStart : function(e,h){e.inserAdjacentHTML("afterbegin",h);},
			atEnd : function(e,h){e.inserAdjacentHTML("beforeend",h);}
		};
	}
	function fragment(html){
		var elt = document.createElement("div");
		var frag = document.createDocumentFragment();
		elt.innerHTML = html;
		while(elt.firstChild)
			frag.appendChild(elt.firstChild);
		return frag;
	}

	var Insert = {
		before : function(elt,html){
			elt.parentNode.insertBefore(fragment(html),elt);
		},
		after : function(elt,html){
			elt.parentNode.insertBefore(fragment(html),elt.nextSibling);
		},
		atStart : function(elt,html){
			elt.parentNode.insertBefore(fargment(html),elt.firstChild);
		},
		atEnd: function(elt,html){
			elt.appendChild(fragment(html));
		}
	};

	Element.prototype.inserAdjacentHTML = function(pos,html){
		switch(pos.toLowerCase()){
			case "beforebegin": return Insert.before(this,html);
			case "afterend": return Insert.after(this,html);
			case "afterbegin": return Insert.atStart(this,html);
			case "beforeend": return Insert.atEnd(this,html);
		}
	};
	return Insert;
}());