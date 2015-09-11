function defineSubClass(superClass, constructor, methods, statics){
	constructor.prototype = inherit(superClass.prototype);
	constructor.prototype.constructor = constructor;

	if(methods) extend(constructor.prototype,methods);
	if(statics) extend(constructor,statics);
	return constructor;
}

Function.prototype.extend = function(constructor,methods,statics){
	return defineSubClass(this,constructor,methods,statics);
}

function filterSetSubClass(superClass,filter){
	var constructor = function(){
		superClass.apply(this,arguments);
	}//构造函数
	var proto = constructor.prototype = inherit(superClass.prototype);//它的原型
	proto.constructor = constructor;
	proto.add = function(){
		for(var i=0;i<arguments.length;i++){
			var v = arguments[i];
			if(!filter(v)) throw ("value " + v + " rejected by filter");
		}
		superClass.prototype.add.apply(this,arguments);
	};
	return constructor;
}