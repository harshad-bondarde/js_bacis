// //arrow functions----------------------------------------
// function sum(a,b){
//     return a+b
// }

// const sum=(a,b) =>{
//     return a+b
// }
// const ans=sum(1,2)
// console.log(ans)

//map-------------------------------------------------------------
//gievn an array return array multiplied by 2
const input=[1,2,3,4,5];
const newarr=[]

// for(let i=0;i<input.length;i++){
//     newarr.push(input[i]*2)
// }
// console.log(newarr)

const ans=input.map((it)=>{
    return it*3
}) 

// or we can do like this 
// const ans=input.map(transform)
function transform(it){
    return it*2
}

console.log(ans)

//filter------------------------------------------------
const arr=[1,2,3,4,5]
const final=arr.filter((it)=>{
    if(it%2==0)
        return it
})
console.log(final)