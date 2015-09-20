function permutation(str,from,to){
	if(from == to){
		var s = '';
		for(var i=0;i<=to;i++){
			s += str[i]; 
		}
		console.log(s);
		return;
	}
	for(var i=from;i<=to;i++){
		str = swap(str,from,i);
		permutation(str,from+1,to);
		str = swap(str,from,i);
	}
}
function mainConsole(){
	permutation('abc',0,2);
}
function swap(str,i,j){
	var s = str.split('');
	var tmp = s[i];
	s[i] = s[j];
	s[j] = tmp;
	str = s.join('');
	return str;
}