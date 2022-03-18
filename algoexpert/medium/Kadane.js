function kadanesAlgorithm(array) {
  // Write your code here.
	//iterate through the array
	//keep track of the maximum sum
	// keep track of the current sum
	
	let maxSum = array[0];
	let currSum = array[0];
	
	for(let i = 1 ; i < array.length; i++){
		let num = array[i]
		currSum = Math.max(num , currSum + num)
		maxSum = Math.max(maxSum , currSum)
	}
	
	return maxSum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
