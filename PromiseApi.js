const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 is resolved")

    }, 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P2 is resolved")
        reject("P2 is resolved")

    }, 3000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 is resolved")

    }, 1000)
})

// Promise.all() :return array of success if all promise fullfilled if failed it return an Promise with array

Promise.all([p1, p2, p3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
})

// Promise.allSettled() :return array of success if all promise fullfilled if failed it return an Promise with array settled 

Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
})
// Promise.any() :return  success , and if any 1 failed it , wait till all other get setled but if every promise failed then it return the aggregate of fail , to access this err.error

Promise.any([p1, p2, p3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
    console.error(err.error)
})
// Promise.race() :return first   success (depend on the least time for execution) , and if any 1 failed it return the error

Promise.race([p1, p2, p3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
    console.error(err.error)
})