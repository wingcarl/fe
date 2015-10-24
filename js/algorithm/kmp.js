function caculateNext(arr){
	//var i = 0;
	var next = [-1];
	var k = -1;
	var j = 0;
	while(j<arr.length){
		if(k==-1 || arr[k]==arr[j]){
			j++;
			k++;
			if(arr[j] == arr[k])
				next[j] = next[k];
			else
				next[j] = k;
		}else {
			k = next[k]
		}
		console.log(k+" "+j);
	}
	return next;
}

function kmp(source,pattern){
	var i = 0;
	var ans = -1;
	var j = 0;
	var next = caculateNext(pattern);
	while(i<source.length){
		if(j==-1 || pattern[j]  == source[i]){
			i++;
			j++;
		}else{
			j = next[j];
		}
		if(j == pattern.length){
			ans = i - pattern.length;
			break;
		}
	}
	return ans;
}

function consoleLog(){
	var i = kmp("abcdaab",'daa');
	var next = caculateNext('abababab');
	console.log(next);
	console.log(i);
}