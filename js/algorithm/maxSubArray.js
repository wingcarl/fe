//求最大子数组和
//暴力法 时间复杂度 O(n^3)
function maxSubArray(arr){
	if(!arr instanceof Array)
		throw new Error("param's type is error!only array is ok!");
	var currSum;
	var maxSum = arr[0];
	for(var i=0;i<arr.length;i++){
		for(var j=i;j<arr.length;j++){
			currSum = 0;
			for(var k=i;k<=j;k++){
				currSum += arr[k];
			}
			if(currSum > maxSum)
				maxSum = currSum;
		}
	}
	return maxSum;
}