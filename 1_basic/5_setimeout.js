function greet(){
    console.log("hello world")
}

setTimeout(greet,3*1000)
//wait for 3 secs
setInterval(greet,1*1000)
//calls at every 2 sec 

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 0);
// }  
// since settimeout is asynchronous, it will wait for the loop to finish and then print the value of i
// in this case var is function scoped for whole for loop var will be same variable so at last i will contain 5 and all the console.log will print 5