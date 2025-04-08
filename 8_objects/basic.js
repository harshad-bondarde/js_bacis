const mySym=Symbol("key1") //to declare a symbol

const jsuser={
    name :"hitesh", //name is alyways compiled like a string js like "name"
    //we can access this using jsuser.name

    "email":"h@123", //so this "email" is also valid
    logindays:["Monday","Saturday"],
    [mySym]:"key2"  //jsuser[mysym]
}

console.log(typeof jsuser[mySym])
jsuser.email="hitesh@123"
// Object.freeze(jsuser) //now we wont get erroron changing the values but values wont get changed 
jsuser.greeting=function(){
    console.log(`hello,${this.name}`)
}
console.log(jsuser.greeting())