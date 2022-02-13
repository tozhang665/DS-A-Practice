function findClosestValueInBst(tree, target) {
  // Write your code here.
	let smallestDifference = Infinity
	let smallestValue = Infinity
	
	let queue = [tree]

	while(queue.length > 0){
		let currentNode = queue.shift()
		if(Math.abs(target - currentNode.value) < smallestDifference){
			smallestDifference = Math.abs(target - currentNode.value)
			smallestValue = currentNode.value
		}
		
		if(currentNode.left){
			queue.push(currentNode.left)
		}
		if(currentNode.right){
			queue.push(currentNode.right)
		}		
	}
	return smallestValue
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
