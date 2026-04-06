// for(var i=0 ;i< 3 ;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
// for(let i=0 ;i< 3 ;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

function outer (){
    let a=0
    return function inner(){
        if(a === 0){
            a++
        }else{
           return a
        }
      
    }
}
const calledOnce=outer()
calledOnce()
calledOnce()
calledOnce()
console.log(calledOnce())

