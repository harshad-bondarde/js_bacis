// const fs=require("fs");
// fs.readFile("name.txt","utf-8",function(err,data){
//     console.log(data)
// })

// console.log("hi there") //compiler will print hi there and parallely read the file and will print the file data

setTimeout(function(){
    console.log("from inside async fn")
},3000)

for(let i=0;i<1e9;i++){
    if(i==1e9-1)
        console.log("done")
}
//web api will run timer parallely if webapi completes before loop it will go in callback queue and will run after the loop

