function callingLog() {
    console.log("called")
}

/**
 * Debouncing delays the execution of a function until the user stops triggering the event for a specified time.
 * Debounce Use Cases

✅ Search autocomplete
✅ Form validation
✅ API calls on typing
✅ Save draft functionality
 */
// function debounce(fn , delay){
//     let timerId

//     return function(){
//         clearTimeout(timerId)
//         timerId =setTimeout(()=>{
//             fn()
//         },delay)
//     }
// }

/**
 * Throttling ensures a function executes at most once in a specified interval, no matter how many times the event occurs.
 * Scroll Event

When user scrolls continuously:

You don’t want function firing 100 times/sec
Instead execute every 300ms
 */
function throttle(fn, delay) {
    let flag = true
    return function (...arg) {
        if (flag) {
            fn.apply(this, arg)
            flag = false
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}
let calledDebunce = throttle(callingLog, 500)
calledDebunce()