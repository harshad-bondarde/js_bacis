//arrays

const array=[1,2,3]
array.push(4)
console.log(array)
array.pop()
console.log(array)
array.shift() //removes the first ele
console.log(array)
array.unshift(90) //put element at first index
console.log(array)


// to concat two arrays
const first=[1,2,3]
const second=[4,5,6]
console.log(first.concat(second))

//---------------------
function printthis(s){
    console.log(s)
}
const arr=[2,4,6]
arr.forEach(printthis) //forEach applys input function to every element of the array



