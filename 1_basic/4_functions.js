function findsum(a,b) {
    return a+b
}
let a=findsum(2,3)
console.log(a)

//function as a input to other functions

function sum(num1,num2,funtocall){
    let result=num1+num2
    funtocall(result)
}

function displayResult(data){
    console.log("result of the sum is " + data)
}
function displayResultPassive(data){
    console.log("Sum's result is :  "+data)
}

const ans=sum(1,2,displayResult)
const ans2=sum(1,2,displayResultPassive)

console.log("---------------------------------")

function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}

function calcarth(a,b,type){
    const value=type(a,b)
    return value
}

console.log(calcarth(3,4,sub))