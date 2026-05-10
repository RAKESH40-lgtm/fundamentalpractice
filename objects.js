// //Objects are used to store the structured data in a key -value pair 
// const user ={
//     name:'rakesh',
//     age:28
// }
// console.log(user)
// //. operator used to add/update the value from the objects , with delete keyword key  can be deleted  from the object 
// by ["string of key"] can access the object but this is used to store the key which contains space-between or access dynamic keys

// user.city="Bengaluru"
// user.name="abc"

// // delete user.city

// console.log(user)
const user ={
    name:'rakesh',
    age:28
}
const user2 =user
user.age=20
/**
 * Here in the above case user2 object is referencing with obj user if user2 get change it affects to original object as it's reference .
 * 
 */
console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
/**
 * 1)Object.keys(user) - returns the keys in an objects as the array format 
 * 2)Object.values(user) -returns the value in an objects as the array format
 * 3)Object.values(user) -return the [keys , values] from objects as the array format 
 */
// This is to iterate over the object using for in 
for(const key in user){
    console.log(key,user[key])
}
/**
 *  Object can be destructure instead of accessing and storing oneby one by using {key_name:alias_name } =object_name
 * and also alias name can be optional 
 */
const {name: userName,age:userAge}=user
console.log(userName)
console.log(userAge)
/**
 * to use for-of with object have to use the above object properties 
 */
for(const [key,value] of Object.entries(user)){
    console.log(key,value)
}
/**
 * To add key dynamic variable by [key_name]
 * Shallow copy through spreadoperator but failed at nested object 
 * Deep copy use StructureClone for deep copy 
 */