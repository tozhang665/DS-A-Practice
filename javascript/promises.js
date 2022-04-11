class MyPromise1 {
    constructor(executor) {
        // your code here
        this.state = 'pending';
        this.handlers = [];
        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch (err) {
            this._reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        // your code here
        return new MyPromise1((res, rej) => {
            this.handlers.push({
                fulfilled: (value) => {
                    if (typeof onFulfilled !== 'function') {
                        res(value);
                        return
                    } try {
                        res(onFulfilled(value));
                    } catch (err) {
                        rej(err);
                    }
                },
                rejected: (error) => {
                    if (typeof onRejected !== 'function') {
                        rej(error);
                        return;
                    } try {
                        res(onRejected(error));
                    } catch (err) {
                        rej(err);
                    }
                }
            });
            this.exectuteHandlers();
        })
    }

    exectuteHandlers() {
        if (this.state === 'pending') return;
        this.handlers.forEach((handler) => {
            queueMicrotask(() => {
                handler[this.state](this.result);
            })
        })
        this.handlers = [];
    }

    _resolve(value) {
        if (this.state !== 'pending') return;
        if (value instanceof MyPromise1) {
            value.then(this._resolve.bind(this), this._reject.bind(this));
            return;
        }

        this.state = 'fulfilled';
        this.result = value;
        this.exectuteHandlers();
    }

    _reject(error) {
        if (this.state !== 'pending') return;
        this.state = 'rejected';
        this.result = error;
        this.exectuteHandlers();
    }

    catch(onRejected) {
        // your code here
        return this.then(undefined, onRejected);
    }

    static resolve(value) {
        // your code here
        return new MyPromise1((res) => {
            res(value);
        })
    }

    static reject(value) {
        // your code here
        return new MyPromise1((res, rej) => {
            rej(value)
        })
    }
  }
  
  
  // let myFirstPromise = new MyPromise1((res, reject) => {
  //     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  //     // In this example, we use setTimeout(...) to simulate async code.
  //     // In reality, you will probably be using something like XHR or an HTML5 API.
  //     setTimeout(function () {
  //         res("Success!")  // Yay! Everything went well!
  //     }, 100)
  // })
  // myFirstPromise.then((successMessage) => {
  //     // successMessage is whatever we passed in the resolve(...) function above.
  //     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  //     console.log("Yay! " + successMessage)
  // });
  
  
function any(promises){
    let result = new Promise((res, rej)=>{
        let isFulfilled = false;
        const errors= []
        promises.forEach((promise, i)=>{
            promise.then((value)=>{
                if (!isFulfilled) {
                    res(value);
                    isFulfilled= true;
                }
            }, (error)=>{
                errors[i]= error;
                if (errors.length === promises.length) {
                    rej(new AggregateError('No Promise in Promise.any was resolved', errors))
                }
            })
        })
    })
    return result
}



function all(promises) {
    // your code here
    return new Promise((res, rej)=>{
        let resolve = new Array(promises.length);
        if (promises.length=== 0) {
            res(resolve);
            return;
        };

        let pendingCount = promises.length;

        promises.forEach((promise, i)=> {
            Promise.resolve(promise).then(
                function(result) {
                resolve[i] = result;
                pendingCount -= 1;
                if (pendingCount === 0) {
                    res(resolve);
                }
            }, 
                function(err){
                    rej(err);
            })
        });
    });


    
}


let myError = new Error("this is my error")


let myCheck = (input) => {
  return new Promise((res,rej)=>{
    if(input instanceof Error){
      rej("error was passed")
    }
    res("oh hi there")
  })
}

myCheck(10).then((res)=>console.log(res+   "success"),(err)=>console.log(err+    "error"))