//LCS 最长公共子序列求解
function LCS(arr1,arr2){
	var c = [];
	var b = [];
	for(var i=0;i<=arr1.length;i++){
		c[i] = [];
		b[i] = [];
		for(var j=0;j<=arr2.length;j++){
			c[i][j] = 0;
			b[i][j] = 0;
		}
	}
	for(var i=0;i<arr1.length;i++){
		for(var j=0;j<arr2.length;j++){
			if(arr1[i] == arr2[j]){
				c[i+1][j+1] = c[i][j]+1;
				b[i+1][j+1] = 'lefttop';
			}
			else if(c[i][j+1] >= c[i+1][j]){
				c[i+1][j+1] = c[i][j+1];
				b[i+1][j+1] = 'top';
			}	
			else{
				c[i+1][j+1] = c[i+1][j];
				b[i+1][j+1] = 'left';
			}
				
		}
	}
	var lcs = [];
	var i = c.length-1;
	var j = c[0].length-1;
	while(i>0 && j>0){
		if(b[i][j]=='lefttop'){
			lcs.push(arr1[i-1]);
			i--;
			j--;
		}
		else if(b[i][j] == 'top')
			i--;
		else if(b[i][j] == 'left')
			j--;
	}
	return lcs.reverse();
}

function editDistance(a,b){
	for(var i=0;i<=a.length;i++){
		dp[i] = [];
		
		for(var j=0;j<=b.length;j++){
			dp[i][j] = 0;
			
		}
	}
	var sourceLen = a.length;
	var targetLen = b.length;
	var i,j;
	for(i=0;i<=sourceLen;i++){
		dp[i][0] = i;
	}
}