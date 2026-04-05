let users = [{
    firstName: "DOnald", lastname: 'Trump', age: 70
},
{
    firstName: "Cristano", lastname: 'Ronaldo', age: 35
}

    , {
    firstName: "Elon", lastname: 'Musk', age: 50

},
{
    firstName: "Virat", lastname: 'kohli', age: 35

},
]
//get fullname in an array
// let fullname = users.map((item)=> item.firstName + item.lastname)
// console.log(fullname)

//Count the each age number and give its output as{50:1 ,35:2,70:1}

// const output = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = acc[curr.age] + 1
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc
// }, {})
// console.log(output)

// Filter the firstname who age is < 60 

const filteredName= users.filter((item)=> item.age < 60).map((item)=> item.firstName)
console.log(filteredName)

const filterByreducer = users.reduce((prev, curr)=>{
    if(curr.age < 60){
        prev.push(curr.firstName)
    }
    return prev
},[])
console.log(filterByreducer)