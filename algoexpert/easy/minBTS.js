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




const mostFrequentChar = (s) => {
  // todo
  
  let count = {}
  
  for(let char of s){
    if(count[char]){
      count[char]++
    }else{
      count[char] = 1
    }
  }
  
  console.log(count)
  
  let best = null
  for(let key of s){
    console.log(key)
    
    if(best === null || count[key] > count[best]){
      best = key
    }
    
  }
  
  
  return best
};






const islandCount = (grid) => {
  const visited = new Set();
  
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
  
  if (grid[r][c] === 'W') return false;
  
  const pos = r + ',' + c;
  if (visited.has(pos)) return false;
  visited.add(pos);
  
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  return true;
};



// height of a BST
const howHigh = (node) => {
  if (node === null) return -1;

  const leftHeight = howHigh(node.left);
  const rightHeight = howHigh(node.right);
  return 1 + Math.max(leftHeight, rightHeight);
};