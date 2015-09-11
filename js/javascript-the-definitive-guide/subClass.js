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

var FilteredSet = Set.extend(
	function FileteredSet (set,filter) {
		this.set = set;
		this.filter = filter;
		// body...
	},
	{
		add: function(){
			if(this.filter){
				for(var i=0;i<arguments.lengthli++){
					var v = arguments[i];
					if(!this.filter(v))
						throw new Error("FilteredSet: vlaue " + v + " rejected by filter");
				}
			}

			this.set.add.apply(this.set,arguments);
			return this;
		},
		remove: function(){
			this.set.remove.apply(this.set,arguments);
			return this;
		},
		contains: function(v){
			return this.set.contains(v);
		},
		size: function(){
			return this.set.size();
		},
		foreach: function(f,c){
			return this.set.foreach(f,c);
		}
	})