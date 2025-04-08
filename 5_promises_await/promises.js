// function findsum(n){
//     let ans=0
//     for(let i=0;i<=n;i++)
//             ans+=i
//     return ans
// }

// function findsumtill100(){
//     return findsum(100);
// }

// setTimeout(findsumtill100,3000)

// console.log("hello world") //this will run first since setTimeout is async function
//--------------------------------------------------------------------



    // const fs=require('fs');

    // function readfile(cb){ //just a wrapper 
    //     fs.readFile("a.txt","utf-8",function(err,data){ //all aync functions you will write will of type seTimeout or fs.readFile
    //         cb(data);
    //     })
    // }

    // function onDone(data){
    //     console.log(data)
    // }
    // readfile(onDone)

//-----------------------------------------------------
// //promisses makes this code more readable 
// // promisses are to reduce use of callbacks
// //cleaner way of using the promisses

//     // with PROMISSES

//     const fs=require('fs');
//     function readfile(){
//         return new Promise(function(resolve){ 
//             fs.readFile("a.txt","utf-8",function(err,data){ //all aync functions you will write will of type seTimeout or fs.readFile
//                 resolve(data);
//             });
//         })
//     }

//     function onDone(data){
//         console.log(data)
//     }

//     readfile().then(onDone);//function synchronously returns prpmise not data
//     //.then functions defines where to send the data
   
//     // line 51 runs like var a=readfile(); promise gets returned in a
//     // a.then(onDone) now we know location where to send the data
//-------------------------------------------------------

// function promisifiedMyOwnSetTimeout(duration){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(); //.then will run only if this function is called inside the promise // resolve is connected to then 
//         },duration)
//     });
// }

// const ans=promisifiedMyOwnSetTimeout(1000) //returns promise which is pending 
// console.log(ans)
// ans.then(()=>console.log("timeout is done"))

// Promise.resolve().then(()=>{
//     console.log("hi")
// })
// // this will print hi 
//----------------------------------------------------------

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("network req is obtained")
//         resolve() //changes state from pending to fulfilled 
//     },2000)
// }).then(()=>console.log("work is done after the network request"))

//-------------------------------------------------------------------
// const promisethree=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@gamil.com"})
//     },2000)
// })
// promisethree.then(function(user){
//     console.log(user) //resolve will pass the data to then 
// })
//--------------------------------------------------------------------
// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true; //if error is true then resolve wont run since we are trying to get the value that we diddnt computed we will get an error 
//         if(!error){
//             resolve({username:"hiten",password:"123"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })
// promisefour.then(function(user){
//     console.log(user)
//     return user.username
// }).then((name)=>{ //will return value from above linked function
//     console.log(name)
// }).catch(function(error){ //if error comes or resolve dont run 
//     console.log(error)
// }).finally(()=>console.log("promise is resolve or rejected "))

//------------------------------------------------------------------------

////////////////////////////ASYNC - AWAIT ///////////////////////
// const promisefive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"five",password:"5"})
//         }
//         else{
//             reject('ERROR: Something went wrong in 5') //this will pass to catch
//         }
//     },1000)
// })

// async function consumethefive(){
//     try{
//         const response=await promisefive
//         console.log(response)
//     }
//     catch(error){
//         console.log(error);
//     }
//     //async await needs try and catch to handle error 
// }
// consumethefive()