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