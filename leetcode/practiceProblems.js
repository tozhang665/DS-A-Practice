console.log("hello")

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];


const shortestPath = (edges, nodeA, nodeB) => {
  let connections = {}
  
  for(let edge of edges){
    if(!connections[edge[0]]){
      connections[edge[0]] = [edge[1]]
    }else{
      connections[edge[0]].push(edge[1])
    }    
    
    if(!connections[edge[1]]){
      connections[edge[1]] = [edge[0]]
    }else{
      connections[edge[1]].push(edge[0])
    }

  }
  
  let queue = [{node:nodeA, level:0}];
  
  
  let visited = new Set()
  while(queue.length > 0){
    let current = queue.shift();
    
    if(current.node === nodeB){
      return current.level
    }
    
    if(connections[current.node]){
      let neighbors = connections[current.node]
    // console.log(neighbors)
      for(let neighbor of neighbors){
        if(!visited.has(neighbor)){
          queue.push({node:neighbor,level:current.level+1})
          visited.add(neighbor)
        }
        
      }
    }
     
  }
  
  return -1
};



shortestPath(edges, 'w', 'z'); // -> 2








const islandCount = (grid) => {
  // todo
  let movement = [[0,1],[1,0],[-1,0],[0,-1]]
  
  let visited = new Set()
  let islands = 0;
  
  
  
  for(let x = 0; x < grid.length; x++){
    for(let y = 0; y < grid[x].length;y++){
      let current = grid[x][y]
      if(current === "L"){
        // if(!visited.has([x,y])){
        if(!visited.has(x+","+y)){
          visited.add(x+","+y)
           let queue = [[x,y]]
           while(queue.length > 0){
             console.log(queue)
             let position = queue.shift(); 
      
             for(let shift of movement){
               
               let newX = position[0] + shift[0]
               let newY = position[1] + shift[1]

               if(newX >= 0 && newX < grid.length){
                 if(newY >= 0 && newY < grid[x].length){
                   
                   
                   
                   if(grid[newX][newY] === "L"){
                     if(!visited.has(newX+","+newY)){
                      visited.add(newX+","+newY)
                      queue.push([newX,newY])  
                     }
                     
                   } 
                   
                   
                   
                   
                   
                 }
               }
               
             }     
           }
          console.log(x+","+y)
          islands++
        }
      }
    }
  }
  // console.log(visited)
  return islands
};




const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3


const grid2 = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

islandCount(grid2); // -> 0


// test_00 [PASS] 82ms 
// test_01 [PASS] 65ms 
// test_02 [PASS] 61ms 
// test_03 [PASS] 63ms 








const allTreePaths = (root) => {
  // todo
  
  if(root=== null) return []
  
  if(root.left ===null && root.right === null) return [[root.val]]
  
  let paths = []
  
  let leftNodes = allTreePaths(root.left)
  let rightNodes = allTreePaths(root.right)
  console.log(leftNodes)
  
  for(let subpaths of leftNodes){
    paths.push([root.val, ...subpaths])
  }
  
  for(let subpaths of rightNodes){
    paths.push([root.val, ...subpaths])
  }
  
  return paths
  
  
};






var threeSum = function(nums) {
  let ans= []
  nums = nums.sort((a,b)=>a-b)
  for(let i = 0; i < nums.length - 2;i++){
      if(nums[i] > 0) break;
      if(nums[i] === nums[i-1]) continue;
      let left = i+1;
      let right = nums.length-1;
      while(left < right){
          let sum = nums[i] + nums[left] + nums[right]
          if(sum < 0){
              left++
          }else if(sum > 0){
              right--
          }else{
              ans.push([nums[i],nums[left],nums[right]])
              
              
              while(left < right && nums[left] === nums[left+1]) left++
              while(left < right && nums[right] === nums[right-1]) right--
              left++
              right--
          }
          
      }
  }
  
  
  return ans
};





/**
 * param {string} num1
 * param {string} num2
 * return {string}
 */

var multiply = function(num1, num2) {
    if(num1 === "0"|| num2==="0") return "0"
    let firstNums = [...num1].reverse()
    let secondNums = [...num2].reverse()
    
    let products = []
    for(let i = 0; i < secondNums.length; i++){
        handleMultiply(firstNums,secondNums[i],i,products)
    }
    let ans = handleAdd(products)
    return ans.reverse().join("")
};


let handleMultiply = (firstNums,secondNum,zeros,products) =>{
    let currentNums = []
    for(let j = 0; j < zeros;j++){
        currentNums.push(0)
    }
    let carry = 0
    let i = 0
    let product = 0
    while(i < firstNums.length || carry > 0){
        let firstNum = firstNums[i] || 0
        product = (parseInt(firstNum) * parseInt(secondNum) )+ carry
        carry  = Math.floor(product / 10)
        product = product % 10
        currentNums.push(product)
        i++
    }
    products.push(currentNums)
}

let handleAdd = (products) =>{
    let end = products[products.length-1].length
    let ans = []
    
    let carry = 0
    let i = 0
    
    while(i < end || carry > 0){
        let sum = carry
        for(let j = 0; j < products.length ;j++){
            let currentNum = products[j][i] !== undefined ? products[j][i] : 0 
            sum += currentNum
        }
        
        carry = Math.floor(sum / 10)
        sum = sum % 10
        ans.push(sum)
        i++
    }
    return ans
}
    
    
    