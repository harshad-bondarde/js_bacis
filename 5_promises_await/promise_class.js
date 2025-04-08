function kiratsAsyncfunction(){
    let p=new Promise(function(resolve){
        setTimeout(resolve,1000)
    });
    return p;
}
console.log("started")
const value=kiratsAsyncfunction();
value.then(function(){
    console.log("hi there")
})
