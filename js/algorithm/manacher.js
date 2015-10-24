//Manacher算法 
//最大回文子串
//计算p数组
//假定p[0]...p[i-1]全部已知，来计算p[i]
//求出三元组 a,p[a],p[a]+a
//最大的p[k]+k 记作mx，该位置就是p[0]~p[i-1]所能控制住的范围
//若p[i]的i大于mx 则重新计算p[i]
//若p[i]的i小于mx 则利用 p[2*k-i]与mx-i之间较小的值来赋值
//
function manacher(str){
	var nstr = '$';
	for(var i=0;i<str.length;i++){
		nstr += '#';
		nstr += str[i];
	}
	nstr += '#';
	var mx = 1;
	var id = 0;
	var p = new Array(nstr.length);
	p[0] = 1;
	for(var i=1;i<nstr.length;i++){
		if(mx > i)
			p[i] = Math.min(p[2*id-i],mx-i);
		else
			p[i] = 1;
		for(;nstr[i+p[i]]==nstr[i-p[i]];p[i]++);
		if(mx < i+p[i]){
			mx = i+p[i];
			id = i;
		}
	}
	var maxLength = 0;
	var maxIndex = 0;
	for(var i=0;i<nstr.length;i++){
		if(p[i] > maxLength){
			maxLength = p[i];
			maxIndex = i;
		}
	}
	var rstr = nstr.substring(maxIndex-maxLength+1,maxIndex+maxLength);
	rstr = rstr.replace(/#/g,'');
	return rstr
}

function manacherTest(){
	manacher('acbbcacda');
}