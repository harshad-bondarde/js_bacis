// function asyncfunction(){
//     return new Promise(function(){
//         //do some async logic here
//         resolve("hi there")
//     });
//     return p;
// }



// function asyncfunction(){
//     return new Promise(function(resolve){
//         //do some async logic here
//       setTimeout(function(){  
//       resolve("hi there")
//       },1000)
//     });
//     return p;
//   }
  
//   async function main(){
//     //no callbacks,no .then syntax
//     let value=await asyncfunction();
//     //if we wont write await promise will be pennding  
//     console.log(value);
//   }
//   main();

//---------------------------------------------------------------------------
function asyncfunction(){
    return new Promise(function(resolve){
        setTimeout(function(){  
        resolve("hi there!!!")
        },3000)
    });
    return p;
  }
  
  async function main(){
    let value=await asyncfunction(); //this thread will wait till 3 sec and  will stored in web apis  and main stack will continue to execute 
    //this will be immediately printed after waiting for 3 secs

    //if we dont write await here it will returned the promissed object not the resolved object which would be there after 3 secs 
    //so we should write await here

    //this sub-thread will wait till 3 secs after that only hi there 1 will get print but HELLO will be printed
    console.log(value)
    console.log("hi there 1");
  }
  main();
  console.log("HELLO")
  setTimeout(()=>console.log("after 6 sec"),6000)
//-------------------------------------------------------------------------------
// function asyncfunction(){
//     return new Promise(function(resolve){
//         setTimeout(function(){  
//         resolve("hi there!!!")
//         },3000)
//     });
//     return p;
//   }
  
// async function main(){

//     asyncfunction().then(function(value){  ////////this would also work 
//         console.log(value);
//     })
//     console.log("hi there 1");
// }
// main();
// console.log("HELLO")
// setTimeout(()=>console.log("after 6 sec"),6000)