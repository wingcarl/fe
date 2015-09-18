function classList(e){
	if(e.classList) return e.classList;
	else return new CSSClassList(e);
}
function CSSClassList(e){this.e = e;}

CSSClassList.prototype.contains = function(c){
	if(c.length === 0 || c.indexOf(" ")!=-1)
		throw new Error("Invalid class name: '" + c + "'"); //判断类名是否合法
	var classes = this.e.className;
	if(!classes) return false;
	if(classes === c) return true; //有一个完全匹配的类名

	return classes.search("\\b" + c + "\\b") != -1;
};

