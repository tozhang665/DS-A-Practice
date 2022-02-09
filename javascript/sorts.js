let data = [1,2,3,10,22,12,124,12,-123,14,23,4,5,6,7,8,888888]

let bubbleSort = (data) =>{
  let resultArr = data.slice();
  let sorted = false;
  while(!sorted){
    sorted = true;
    for(let i = 1, n = resultArr.length; i < n; i++){
      if(resultArr[i-1] > resultArr[i] ){
        sorted = false;
        let temp = resultArr[i-1]
        resultArr[i-1] = resultArr[i]
        resultArr[i] = temp
      }
    }
  }
  return resultArr
}
console.log(bubbleSort(data))


let bSearch = (data,target) =>{
  if(data.length === 0) return -1;
  const midpoint = Math.floor(data.length / 2);
  if(data[midpoint] > target){
    return bSearch(data.slice(0,midpoint),target)
  }else if(data[midpoint]< target){
    const subResult = bSearch(data.slice(midpoint+1),target)
    return subResult === -1 ? -1 : subResult + midpoint + 1;
  }else{
    return midpoint
  }
}


console.log(bSearch(bubbleSort(data),10))