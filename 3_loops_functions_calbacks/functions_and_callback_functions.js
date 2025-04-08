function findsum(n){
    let ans=0
for(let i=0;i<=n;i++)
        ans+=i
console.log(ans)
}

findsum(10)

// callback functions means passing functions as arguments
function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}

function sumofsq(a,b){    //---try to reduce  this two functions 
    return square(a)+square(b)
}
function sumofcubes(a,b){
    return cube(a)+cube(b)
}

console.log(sumofsq(3,4))
console.log(sumofcubes(3,4))


function performoperation(a,b,op){
    return op(a)+op(b) //here op is a callback function
}
console.log(performoperation(3,6,cube))

const ans=performoperation(3,4,function mul_4_times(n){ 
    return n*n*n*n
})
console.log(ans)

