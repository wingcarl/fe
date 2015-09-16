function ElementStream(elt){
	if(typeof elt === "string") elt = document.getElementById(elt);
	this.elt = elt;
	this.buffer = '';
}

ElementStream.prototype.write(){
	this.buffer += Array.prototype.join.call(arguments,"");
};

ElementStream.prototype.writeln(){
	this.buffer += Array.prototype.join.call(arguments,"")+"\n";
};

ElementStream.prototype.close(){
	this.elt.innerHTML = this.buffer;
	this.buffer = "";
};