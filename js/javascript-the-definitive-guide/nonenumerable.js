//定义不可枚举的属性
/*
如果一个属性是不可枚举的 则表示
1.for in不能枚举到
2.Object.keys不能取到
3.JSON.stringfy不能取到
*/
(function(){
	Object.defineProperty(Object.prototype,"objectId",{
		get: idGetter,
		enumerable:false,
		configurable:false
	});

	function idGetter(){
		if(!(idprop in this)){
			if(!Object.isExtensible(this))
				throw Error("cant't define id for nonextensible objects");
			Object.defineProperty(this,idprop,{
				value:nextid++,
				writable:false,
				enumerable:false,
				configurable:false
			});
			}
			return this[idprop];
	};

	var idprop = "|**objectId**|";
	var nextid = 1;
}());