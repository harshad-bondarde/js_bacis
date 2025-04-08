var a=1
console.log(a)
let b=1
console.log(b)
// const c=1
// c=9        ERROR
// console.log(c)

let firstname="harkirat"
let age=10
let ismarried=false
// console.log("this persons name is "+firstname + " and their age is" +  age)
if(ismarried){
    console.log(firstname+" is married")
}
else{
    console.log(firstname+" is not married")
}
let sum=0
for(let i=0;i<=100;i++){
    sum+=i
}
console.log(sum)

let person1="harkirat"
let person2="raman"
let person3="kirat"
const ages=["harkirat","raman","kirat"]
console.log(ages[0])
console.log(ages[1])
console.log(ages[2])

let large=0
//array of numbers
const num=[21,22,23,24,25]
for(let i=0;i<num.length;i++){
    if(num[i]%2==0)
            console.log(num[i]);
    if(num[i]>large)
            large=num[i]
}
console.log(large)


const personarray=["harkirat","raman","priya"]
const genarray=["male","male","female"]
for(let i=0;i<genarray.length;i++){
    if(genarray[i]=="male")
        console.log(personarray[i])
}

//objects 
const users1={
    firstName: "harkirat",
    gender:"male"

}
console.log(users1["firstName"])
// console.log(users1.firstName) or we can do this 

//array of numbers
const users=[1,2,3]
//array of strings
const users2=["harkirat","raman"]
console.log("--------------------")
//array of objects
const allusers=[
    {
        Name: "harkirat",
        gender: "male"
    } ,
    {
        Name: "raman",
        gender: "male"
    },
    {
        Name: "priya",
        gender: "female"
    }
]

for(let i=0;i<allusers.length;i++){
    if(allusers[i].gender=="male")
            console.log(allusers[i]["Name"])
}

