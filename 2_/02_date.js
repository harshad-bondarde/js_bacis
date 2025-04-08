//Date is a premade class 
const currentDate=new Date();
console.log(currentDate)

console.log(currentDate.getDate())
console.log(currentDate.getFullYear())

console.log(currentDate.getTime()) //gives total miliseconds since 1 jan 1970



//how to calc time taken to run the algo-----
let b=new Date()
let before=b.getTime()
let a=0;

for(let i=0;i<1e7;i++){
    a+=i
}

let c=new Date()
let after=c.getTime()
console.log(after-before)