function threeSum(arr, target) {
	let sum;
	let num;

	for(let i=0;i<arr.length-2;i++)
		{
			sum=0;
			for(let j=i;j<=i+2;j++)
				{
					sum=sum+arr[j];
				}
			if(sum!=target && sum>=target+1 )
			{
				num=sum;
			}
			
		}

	return num;

}

module.exports = threeSum;
