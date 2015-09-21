//荷兰国旗问题
//三指针问题
function threeColor(arr){
	var begin = 0;
	var current = 0;
	var end = arr.length-1;
	while(current < end){
		if(arr[current] == 2) {//如果值为2 则说明该值应该是位于尾部
			swap(arr,current,end);
			end--;
		}else if(arr[current] == 1){//如果值为1 则说明该值应该是位于中部
			current++;
		}else if(arr[current] == 0){//如果值为0 则说明该值应该位于头部
			if(current != begin){
				swap(arr,current,begin);
				current++;
				begin++;
			}else if(current == begin){
				current++;
				begin++;
			}
		}
	}
}

function swap(arr,i,j){
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function threeColorMain(){
	var arr = [1,2,0,0,1,2,1,1,2]
	threeColor(arr);
	console.log(arr);

}