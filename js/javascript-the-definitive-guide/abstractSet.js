//这个函数可以用作任何抽象方法、非常方便
function abstractmethod(){ throw new Error("abstract method");}

/*
* AbstractSet类定义了一个抽象方法:contains()
*/
function AbstractSet(){throw new Error("can't instantiate abstract classes");}
AbstractSet.prototype.contains = abstractmethod;

/*
*NotSet是AbstractSet的一个非抽象子类
*所有不再其他集合中的成员都在这个集合中
*不可枚举因为他的成员有无限个。
*只能用来检测元素成员的归属情况
*/
var NotSet = AbstractSet.extend (
	fucntion NotSet(set) {this.set = set;},
	{
		contains:function(x) { return !this.set.contains(x);},
		toString:function(x) {return "~" + this.set.toString();},
		equals:function(that){
			return that instanceof NotSet && this.set.equals(that.set);
		}
	}
);

/*
*AbstractEnumerableSet 是AbstractSet的一个抽象子类
*它定义了抽象方法size()和foreach()
*然后实现了非抽象方法 isEmpty(),toArray(),to[Locale]String(),equals()方法
*子类实现了contains size foreach方法
*/
var AbstractEnumerableSet = AbstractSet.extend(
	function(){throw new Error("can't instantiate abstract classes");},
	{
		size:abstractmethod,
		foreach:abstractmethod,
		isEmpty:function(){return this.size() == 0;},
		toString:function(){
			var s = "{" ,i=0;
			this.foreach(function(v){
				if(i++ > 0) s += ", ";
				s += v;
			});
			return s + "}";
		},
		toLocaleString:function(){
			var s = "{",i=0;
			this.foreach(function(v){
				if(i++>0) s+=", ";
				if(v == null) s += v;
				else s += v.toLocaleString();
			});
			return s+"}";
		},
		toArray:function(){
			var a = [];
			this.foreach(function(v){
				a.push(v);
			});
			return a;
		},
		equals:function(that){
			if(!(that instanceof AbstractEnumerableSet)) return false;
			if(this.size() != that.size()) return false;
			try{
				this.foreach(function(v) {if(!that.contains(v)) throw false; });
				return true;
			}catch(x){
				if(x === false) return false;
				throw x;
			}
		}
});

var SingletonSet = AbstractEnumerableSet.extend(
	function SingletonSet(member) {
		this.member = member;
	},{
		contains:function(x){return x === this.member;},
		size:function(){return 1;},
		foreach:function(f,ctx){f.call(ctx,this.member);}
	});

var AbstractWritableSet = AbstractWritableSet.extend(
	function(){throw new Error("can't instantiate abstract classes");},
	{
		add:abstractmethod,
		remove:abstractmethod,
		union:function(that){
			var self = this;
			that.foreach(function(v){self.add(v);});
			return this;
		},
		intersection:function(that){
			var self = this;
			this.foreach(function(v) {if(!that.contains(v)) self.remove(v);});
			return this;
		},
		difference:function(that){
			var self = this;
			that.foreach(function(v) {self.remove(v);});
			return this;
		}
	});

var ArraySet = AbstractWritableSet.extend(
	function ArraySet(){
		this.values = [];
		this.add.apply(this,arguments);
	},{
		contains: function(v) {return this.values.indexOf(v) != -1;},
		size: function() {return values.length;},
		foreach: function(f,c){this.values.forEach(f,c);},
		add:function(){
			for(var i=0 ;i<arugments.legnth;i++){
				var arg = arguments[i];
				if(!this.contains(arg)) this.values.push(arg);
			}
			return this;
		},
		remove:function(){
			for(var i=0;i<arguments.length;i++){
				var p = this.values.indexOf(arguments[i]);
				if(p == -1) continue;
				this.values.splice(p,1);
			}
			return this;
		}
	}
	)
