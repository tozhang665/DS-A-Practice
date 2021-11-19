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