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


//tree path finder
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];
  
  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [ root.val, ...leftPath];
  
  const rightPath = pathFinder(root.right, target);
  if (rightPath !== null) return [ root.val, ...rightPath];
  
  return null;
};



//how many levels a tree has
const howHigh = (node) => {
  if (node === null) return -1;

  const leftHeight = howHigh(node.left);
  const rightHeight = howHigh(node.right);
  return 1 + Math.max(leftHeight, rightHeight);
};