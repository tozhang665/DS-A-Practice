let myPromise = new Promise((res,rej)=>{
  let x = 4
  if(x === 5){
    res("hello")
  }else{
    rej("bye")
  }
})

let fetch2 = (stringHere)=>{
  return new Promise((resolve,reject)=>{
    if(stringHere === "hello"){
      resolve("HIHIHIH")
    }
    else{
      reject("BYBYBYB")
    }
  })
}



//run the 3 promises, and return whichever one fails.

// fetch2("hello").then((message)=>{
//   console.log("THIS IS FETCH 2")
//   console.log(message)})
//   .catch((failure)=>{
//     console.log("THIS IS THE FAIL FOR FETCH 2")
//     console.log(failure)
//   })
  
//   myPromise
//   .then((message)=>{
//     console.log("this succeeded")
//     console.log(message)})
//   .catch((message)=>
//   {
//     console.log("this failed")
//     console.log(message)}
//   )
let myFail = ""

myPromise.catch((message)=> {
  console.log(typeof(message))
  myFail = message
  console.log(myFail)
})
console.log(myFail)

fetch2("hell").catch((message)=> myFail += message)


console.log(myFail)


import react from React
import child from "./sdafaksljhf"

class Todo extends react.Component{
  constructor(props) {
    super(props)
    this.state ={
        "person1": ["todo1","todo2","todo3"],
        "person2": ["todo1","todo2"]
    }
  }

  ComponentDidMount(){
    
  }
  

  render(){
    return(

      <div>
        {this.state.map((ele,idx)=>{
          <child person={ele} key={idx}/>
        })}
      </div>
    )
  }

}

export default Todo