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

//分治法
//时间复杂度O(nlogn)
function maxSumArrayHalf(arr,from,to){

	if(!arr instanceof Array)
		throw new Error("param's type is error!only array is ok!");
	if(from == to)
		return arr[from];
	var middle = Math.floor((from+to)/2);
	var m1 = maxSumArrayHalf(arr,from,middle);
	var m2 = maxSumArrayHalf(arr,middle+1,to);
	var left = arr[middle],now = arr[middle];
	for(var i=middle-1;i>=from;i--){
		now += arr[i];
		left = Math.max(now,left);
	}
	var right = arr[middle+1];
	now = arr[middle+1];
	for(var i=middle+2;i<=to;i++){
		now += arr[i];
		right = Math.max(now,right);
	}
	var m3 = left + right;
	return Math.max(m1,m2,m3);
}

//动态规划
//O(n)
function maxSubArrayPlan(arr){
	var sum = arr[0];
	var result = arr[0];
	for(var i=1;i<arr.length;i++){
		if(sum > 0)
			sum += arr[i];
		else 
			sum = arr[i];
		if(sum > result)
			result = sum; 
	}
	return result;
}

//分析法
//O(n)
function maxSubArrayAnalysis(arr){
	var p = [],m=[];
	p[0] = arr[0];
	for(var i=1;i<arr.length;i++){
		p[i] = p[i-1]+arr[i];
	}
	m[0] = 0;
	for(var i=1;i<arr.length;i++){
		var cp = p.slice(0,i)
		var min = Math.min.apply(this,cp);
		min = min<0?min:0;
		m[i] = min;
	}
	var pMin = [];
	for(var i=0;i<m.length;i++){
		pMin[i] = p[i] - m[i]; 
	}
	var max = Math.max.apply(this,pMin);
	return max;
	//console.log(p);
}