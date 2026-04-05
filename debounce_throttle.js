function callingLog(){
    console.log("called")
}

// function debounce(fn , delay){
//     let timerId
    
//     return function(){
//         clearTimeout(timerId)
//         timerId =setTimeout(()=>{
//             fn()
//         },delay)
//     }
// }
function throttle(fn , delay){
    let flag =true
    return function(...arg){
        if(flag){
            fn.apply(this, arg)
            flag=false
            setTimeout(()=>{
                flag=true
            },delay)
        }
    }
}
let calledDebunce = throttle(callingLog,500)
calledDebunce()