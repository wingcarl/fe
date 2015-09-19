//寻找旋转数组
//arr = [0,1,2,4,5,6,7]
function findRotateArray(arr,n){
	var i = 0,j=arr.length-1;
	var pos = n;
	while(i<=pos){
		var tmp = arr[pos];
		arr[pos] = arr[i];
		arr[i] = tmp;
		i++;
		pos--;
	}
	pos = n+1;
	while(j>pos){
		var tmp = arr[pos];
		arr[pos] = arr[j];
		arr[j] = tmp;
		j--;
		pos++;
	}
	return arr.reverse();
}

function changeArr(arr){
	var i = 0;
	var j = arr.length-1;
	while(i<j){
		
		i++;
		j--;
	}
	console.log(arr);
}