// string functions 

// to find the length of the string
var s="game"
console.log(s.length)
console.log("game".length)

var str="hi my name is harshad"
//if we want to find index of harshad
let target="harshad"
console.log(str.indexOf("harshad"))
console.log(str.indexOf(target))
//else it will give -1
//if same words are in string then we can get last index using lastIndexOf(target)

//we can slice the string using 
console.log(str.slice(0,5))

console.log(str.replace("harshad","rohini"))
console.log(str) //does not replece original string

const words=str.split(" ")
console.log(words)
let str1="hg1jhg1jg1jg1jhg1jhg1jh1"
const words2=str1.split("1")
console.log(words2)

//trim function trims the extra spaces at the beginning and at the end 
console.log("   hi i am boy    ".trim());

//upper case and lower case functions 
console.log(str.toLowerCase())
console.log(str.toUpperCase())

