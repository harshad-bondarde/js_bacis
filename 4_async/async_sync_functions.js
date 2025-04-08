//synchronuos 
// means together one after another         sequemtial 
//only one thing happening at a one time 

//asynchronous means happens in parts
//multiple things are contex switching with each other


//js can delegate and can context switch tooo

//all functions till now were synchronous functions 

function findSum(n){
    let ans=0
    for(let i=0;i<=n;i++)
            ans+=i

    return ans
}
function findsumtill(){
    console.log(findSum(100));
}
// setTimeout(findsumtill,2000)
//or // setTimeout(()=>console.log(findSum(100)),2000) //wait till 2 sec and then pform function 
console.log("Hello world")
 




