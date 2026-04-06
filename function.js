function statement(params) {
    console.log("throw statement")
}

console.log(expre)//show undefined
// console.log(expre())//throw type error as not defined
var expre =function xyx(){
    return 1
} //named function expression
// console.log(expre())
// console.log(xyx())//throw ref  error as not defined

// A function is first-class when it is treated like a value (passed, returned, stored).
function sayHi() {
  return "Hi";
}

function wrapper(fn) {
  return fn;
}

wrapper(sayHi)(); // "Hi"