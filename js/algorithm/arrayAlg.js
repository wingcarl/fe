//NP问题 数组中n个元素的和为sum
//所有数都为正数
var sumN = 10;
function EnumNum(a,x,i,has,r){
	if(i >= a.length)
		return;
	if(has + a[i] == sumN){
		x[i] = true;
		printArr(a,x);
		x[i] = false;
	}
	else if(has + a[i] <= sumN && has+r>=sumN){
		x[i] = true;
		EnumNum(a,x,i+1,has+a[i],r-a[i]);
	}
	if(has+r-a[i] >= sumN){
		x[i] = false;
		EnumNum(a,x,i+1,has,r-a[i]);
	}
	
}

function aMain(){
	var a = [1,2,3,4,5];
	var x = [false,false,false,false,false];
	var residual = sum(a);
	EnumNum(a,x,0,0,residual);
}

function printArr(a,x){
	var str = '';
	for(var i=0;i<x.length;i++){
		if(x[i]){
			str += a[i]+',';
		}
	}
	str = str.substring(0,str.length-1);
	console.log(str);
}

function sum(arr){
	var total = 0;
	for(var i=0;i<arr.length;i++){
		total += arr[i];
	}
	return total;
}