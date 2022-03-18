class HashTable{

  constructor(){
    this.table = new Array(127);
    this.size = 0;
  }


  _hash(key){
    let total = 0;
    for(let i = 0; i < key.length;i++){
      total += key.charCodeAt(i)
    }
    return total % this.table.length
  }

  set(key,value){
    const index = this._hash(key);
    if(this.table[index]){
      for(let i = 0; i < this.table[index].length;i++){
        if(this.table[index][i][0]===key){
          this.table[index][i][1] = value;
          return
        }
      }
      this.table[index].push([key,value])
    }else{
      this.table[index] = []
      this.table[index].push([key,value])
    }
    this.size++;    
  }

  get(key){
    const index = this._hash(key)
    if(this.table[index]){
      for(let i = 0; i < this.table[index].length;i++){
        if(this.table[index][i][0] === key){
          return this.table[index][i][1];
        }
      }
    }else{
      return undefined;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}


const ht = new HashTable()

ht.set("France",111)
ht.set("ǻ",1222)
ht.set("Spain",150);
ht.set("111",192)

console.log(ht.size)
ht.display()