function invoke(f,start,interval,end){
	if(!start) start = 0;
	if(arguments.length <= 2)
		setTimeout(f,start);
	else{
		setTimeout(repeat,start);
		function repeat(){
			var h = setInterval(f,interval);

			if(end) setTimeout(function(){clearInterval(h);},end);
		}
	}
}

function urlArgs(){
	var args = {};
	var query = location.search.substring(1);
	var pairs = query.split('&');
	for(var i=0; i<pairs.length; i++){
		var pos = pairs[i].indexOf('=');
			if(pos == -1) continue;
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos+1);
			value = decodeURIComponent(value);
			args[name] = value;
	}
	return args;
}

var browser = (function(){
	var s = navigator.userAgent.toLowerCase();
	var match = /(webkit)[ \/]([\w.]+)/.exec(s) ||
	/(opera)(?:.*version)?[\/]([\w.]+)/.exec(s) ||
	/(msie)([\w.]+)/.exec(s)||
	!/compatible/.text(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s)||
	[];
	alert(match[0]);
	return {name:match[1] || "",version:match[2]||"0"};
}())