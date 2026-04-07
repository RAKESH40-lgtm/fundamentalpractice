"use strict"
// this in global space  : this is based on the js run time 
// console.log(this)

// this inside a function : it's depend on strict mode in this it
// s undefined  or not (global object)
// function xy(){
//     console.log(this)
// }
// value of this depend on how function is called
// xy() //undefined
// window.xy() //window  : this will print with browser runtime 

// this inside object method print the object 

const student = {
    name: "abc",
    data: function () {
        console.log(this.name)
    }
}
const student2 = {
    name: "def"
}
// student.data.call(student2, "arg1", "arg2")   // invoke immediately, args listed individually
// student.data.apply(student2, ["arg1", "arg2"]) // invoke immediately, args passed as array
// const studdetails = student.data.bind(student2, "arg1", "arg2") // returns new function
// studdetails()  // now invoke

// this inside arrow function works only with enclosing lexical context by obje

const obj = {
    a: 1,
    b: () => {
        console.log(this)// this print here lexical context environment

    },
    c:
        function () {
            const d = () => {
                console.log(this)// this print here lexical context environment -object

            }

            d()
        }
}
obj.b()
obj.c()
// This in Dom take value of its element

