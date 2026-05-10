// This async keyword make this function as a async function and what ever it return always promise even normal value wrap into promise and return it 

let p=new Promise((res,rej)=>{
    res("Promise Resolved ")
})
async function asyncFunc(){
    return p
}

const dataFunc =asyncFunc()
dataFunc.then((res)=>{
    console.log(res);
    
})