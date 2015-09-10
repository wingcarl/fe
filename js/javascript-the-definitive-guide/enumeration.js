function enumeration(namesToValues){
	var enumeration = function(){ throw "can't Instantiate Enumerations";};//不能使用new来创建enumeration实例

	var proto = enumeration.prototype = {
		constructor: enumeration,
		toString: function(){return this.name;},
		valueOf: function(){return this.value;},
		toJSON: function(){return this.name;}
	};

	enumeration.values = [];

	for(name in namesToValues){
		var e = inherit(proto);
		e.name = name;
		e.value = namesToValues[name];
		enumeration[name] = e;
		enumeration.values.push(e);
	}

	enumeration.foreach = function(f,c){
		for(var i=0; i<this.values.length; i++) f.call(c,this.values[i]);
	};

	return enumeration;

}

function Card(suit,rank){
	this.suit = suit;
	this.rank = rank;
}

Card.Suit = enumeration({'Clubs':1,'Diamands':2,'Hearts':3,'Spades':4});
Card.Rank = enumeration({Two:2,Three:3,Four:4,Five:4,Six:6,Seven:7,Eight:8,Nine:9,Ten:10,Jack:11,Queen:12,King:13,Ace:14});

Card.prototype.toString = function(){
	return this.rank.toString() + " of " + this.suit.toString();
};

Card.prototype.compareTo = function(that){
	if(this.rank < that.rank) return -1;
	if(this.rank > that.rank) return 1;
	return 0;
};

Card.orderByRank = function(a,b) { return a.compareTo(b);};

Card.orderBySuit = function(a,b){
	if(a.suit < b.suit) return -1;
	if(a.suit > b.suit) return 1;
	if(a.rank < b.rank) return -1;
	if(a.rank > b.rank) return 1;
	return 0;
};

function Deck(){
	var cards = this.cards = [];
	Card.Suit.foreach(function(s){
		Card.Rank.foreach(function(r){
			cards.push(new Card(s,r));
		});
	});
}

//洗牌的方法
Deck.prototype.shuffle = function(){
	var deck = this.cards,len = deck.length;
	for(var i = len-1; i>0; i--){
		var r = Math.floor(Math.random()*(i+1)),temp;
		temp = deck[i],deck[i] = deck[r],deck[r] = temp;
	}
	return this;
}

Deck.prototype.deal = function(n){
	if(this.cards.length < n) throw "Out of cards";
	return this.cards.splice(this.cards.length-n,n);
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

