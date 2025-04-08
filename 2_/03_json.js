// json javascript object notation
// const users={
//     name:"harshad",
//     age:24,
//     gender:"male"
// }
// console.log(users.name)
const users={
    name:"harshad",
    age:24,
    gender:"male"
}
//if we want ton send this data
const users1=JSON.stringify(users)
// const users1='{"name":"harkirat","age":24,"gender":"male"}'
// //this is string

console.log(users1)
//this is a string having data of the object

const user=JSON.parse(users1)
console.log(user)
console.log(user.gender)