function objectmethods(obj){
    console.log("original object: ",obj)

    let keys=Object.keys(obj)
    console.log("After Object.keys(): ",keys)
    
    let values=Object.values(obj)
    console.log("After Object.values(): ",values)
    
    let entries=Object.entries(obj)
    console.log("After Object.entries(): ",entries)
    

}

const sample={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}

objectmethods(sample)

let obj2={
    name:"harshad"
}
console.log(obj2.hasOwnProperty("name"))
console.log(obj2.hasOwnProperty("age "))

let newobj=Object.assign({},obj2,{newProperty: "newValue"})//original object does not change 
console.log(newobj)
console.log(obj2)