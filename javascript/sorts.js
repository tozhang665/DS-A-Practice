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




Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) return this;

  if (!func) func = (left, right) => {
    return left < right ? -1 : left > right ? 1 : 0;
  };

  const midpoint = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, midpoint).mergeSort(func);
  const sortedRight = this.slice(midpoint).mergeSort(func);
  return merge(sortedLeft, sortedRight, func);
};

function merge(left, right, comparator) {
  let merged = [];

  while (left.length && right.length) {
    switch (comparator(left[0], right[0])) {
      case -1:
        merged.push(left.shift());
        break;
      case 0:
        merged.push(left.shift());
        break;
      case 1:
        merged.push(right.shift());
        break;
    }
  }

  merged = merged.concat(left, right);
  return merged;
}

function jumbleSort(str, alphabet = null) {
  alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.split('');

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 1) break;
      let current = str[i];
      let next = str[i + 1];
      if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
        str[i] = next;
        str[i + 1] = current;
        sorted = false;
      }
    }
  }

  return str.join('');
}


Array.prototype.quickSort = function (func) {
  if (this.length < 2) return this;

  if (!func) {
    func = (x, y) => {
      if (x < y) return - 1;
      return 1;
    };
  }

  const pivot = this[0];
  let left = this.slice(1).filter((el) => func(el, pivot) === -1);
  let right = this.slice(1).filter((el) => func(el, pivot) !== -1);
  let right = this.slice(1).filter((el) => func(el, pivot) !== -1);
  left = left.quickSort(func);
  right = right.quickSort(func);

  return left.concat([pivot]).concat(right);
};