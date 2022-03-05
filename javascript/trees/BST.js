const hasPath = (graph, src, dst) => {

  let visited = new Set()
  
  let queue = [src]
  
  while(queue.length > 0){
    let node = queue.shift()
    if(node === dst) return true
    for(let neighbor of graph[node]){
      if(!visited.has(neighbor)){
        visited.add(neighbor)
        queue.push(neighbor)
      }
    }
    
  }
  
  return false
  
};


