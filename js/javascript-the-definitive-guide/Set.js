function Set(){
	this.values = {};
	this.n = 0;
	this.add.apply(this,arguments);
}

Set.prototype.add = function(){
	for(var i=0; i<arguments.length; i++){
		var val = arguments[i];
		var str = Set._v2s(val);
		if(!this.values.hasOwnProperty(str)){
			this.values[str] = val;
			this.n++;
		}
	}
	return this;
}

Set.prototype.remove = function(){
	for(var i=0; i<arguments.length; i++){
		var str = Set._v2s(arguments[i]);
		if(this.values.hasOwnProperty(str)){
			delete this.values[str];
			this.n--;
		}
	}
}

Set.prototype.contains = function(value){
	return this.values.hasOwnProperty(Set._v2s(value));
}

Set.prototype.size = function(){
	return this.n;
}

Set.prototype.foreach = function(f,context){
	for(var s in this.values){
		if(this.values.hasOwnProperty(s)){
			f.call(context,this.values[s]);
		}
	}
}

Set._v2s = function(val){
	switch(val){
		case undefined: return 'u';
		case null: return 'n';
		case true: return 't';
		case false: return 'f';
		default: switch(typeof val){
			case 'number': return '#' + val;
			case 'string': return '"' + val;
				default:return '@' + objectId(val);
		}
	}


	function objectId(o){
		var prop = "|**objectId**|";
		if(!o.hasOwnProperty(prop)){
			o[prop] = Set._v2s.next++;
		}
		return o[prop];
	}
};

Set._v2s.next = 100;

extend(Set.prototype,{
	toString:function(){
		var s = "{";
		i = 0;
		this.foreach(function(v){s += ((i++ > 0)?",":"")+ v;});
		return s + "}";
	},
	toLocaleString:function(){
		var s = "{",i=0;
		this.foreach(function(v){
			if(i++>0) s+=", ";
			if(v == null) s+=v;
			else s += v.toLocaleString();
		});
		return s+"}";
	},
	toArray:function(){
		var a = [];
		this.foreach(function(v){a.push(v);});
		return a;
	}
});

Set.prototype.toJSON = Set.prototype.toArray;
function extend(o,p){
	for(prop in p){
		o[prop] = p[prop];
	}
	return o;
}
function inherit(p){
	if(p == null) throw TypeError();
	if(Object.create)
		return Object.create(p);
	var t = typeof p;
	if(t !== "object" && t !== "function") throw TypeError();
	function f(){};
	f.prototype = p;
	return new f();
}
function SingletonSet(member){
	this.member = member;
}

SingletonSet.prototype = inherit(Set.prototype);

extend(SingletonSet.prototype,{
	constructor:SingletonSet,
	add:function(){throw "read-only set";},
	remove:function(){throw "read-only set";},
	size:function(){return 1;},
	foreach:function(f,context){f.call(context,this.member);},
	contains:function(x){return x === this.member;}

});

SingletonSet.prototype.equals = function(that){
	return that instanceof Set && that.size()==1 && that.contains(this.member);
};

function NotNullSet(){
	Set.apply(this,arguments);
}
NotNullSet.prototype = inherit(Set.prototype);
NotNullSet.prototype.constructor = NotNullSet;
NotNullSet.prototype.add = function(){
	for(var i=0; i < arguments.length; i++)
		if(arguments[i] == null)
			throw new Error("Cant't add null or undefined to a NotNullSet");
	return Set.prototype.add.apply(this,arguments);
}

function filterSetSubClass(superclass,filter){
	var constructor = function(){
		superclass.apply(this,arguments);
	}//构造函数
	var proto = constructor.prototype = inherit(superclass.prototype);//它的原型
	proto.constructor = constructor;
	proto.add = function(){
		for(var i=0;i<arguments.length;i++){
			var v = arguments[i];
			if(!filter(v)) throw ("value " + v + " rejected by filter");
		}
		superclass.prototype.add.apply(this,arguments);
	};
	return constructor;
}