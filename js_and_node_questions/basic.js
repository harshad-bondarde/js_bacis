// 1)
// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); this will print 456 
// bcz when obj are used as key in object, they are converted to string and the string representation of an object is "[object Object]"
// so a["[object Object]"] = 456 and a["[object Object]"] = 123, so the last one will override the first one


// 2)
// function sum(a,b,c,d){
//     return {
//         value: a + b + c + d,
//     }
// }
// console.log(sum(1,2,3,4).value)

// 3)
// let a = [1, 2, 3];
// let b = a;
// b[0] = 100;
// console.log(a);
// this will print [100, 2, 3] because b is a reference to the same array as a, so changing b will also change a
// in js arrays are references to the same object in memory, so when you assign one array to another, they both point to the same object in memory.

// 4)
// const obj1 = { a: 1 };
// const obj2 = { a: 1 };
// console.log(obj1 == obj2);  false
// console.log(obj1 === obj2); false
//in js comparison objects are compared by reference, not by value. so even if they have the same properties and values, they are still different objects in memory.

// 5)
// (function() {
//     var a = b = 5;
// })();
// console.log(typeof a); 
// console.log(typeof b);
// this will print undefined and number respectively. a is var but b is not declared with var, so b is a global variable and a is a local variable. so a is undefined and b is 5.

// 6)
// console.log(1 < 2 < 3); //    1<3 
// console.log(3 > 2 > 1); // 3>2 1   1>1 false

// 7)
// console.log('A');
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// console.log('D');
// A D C B    synchronous code will run first, then microtasks (promise) and then macrotasks (setTimeout)

// 8)
// What is the ‘this’ keyword in JavaScript?
// ‘this’ stores the current execution context of the JavaScript program. Thus, when it use inside a function, the value of ‘this’ will change depending on how the function is defined, how it is invoked, and the default execution context.

// 9)
// What is the difference between ViewState and SessionState?
// ViewState: It is specific to a single page in a session.
// SessionState: It is user specific that can access all the data on the web pages.


// 10)
// == this first converts operands to same types and then compares them (COMPARES VALUES)
//example: 1 == '1' // true   false==0 // true
// === this compares both value and type, so no conversion is done (COMPARES VALUES AND TYPE)

// 11)
// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;

// hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
//
// function hoistedFunction(){ 
//   console.log(" Hello world! ");
// } 

// Hoisting takes place in the local scope as well
// function doSomething(){
//   x = 33;
//   console.log(x);
//   var x;
// } 

// "use strict";
// x = 23; // Gives an error since 'x' is not declared
// var x; 

// 12)
// typeof of NaN will return a Number. (Not-a-Number)

// 10. What is an Immediately Invoked Function in JavaScript?
//  is a function that runs as soon as it is defined.
// first () tells compiler that it’s a function expression. second () calls the function immediately.
// 

//13) 13. Explain “this” keyword.
// The value of the “this” keyword will always depend on the object that is invoking the function.\

// function doSomething() {
//   console.log(this);
// }
// doSomething();
// Since the function is invoked in the global context, the function is a property of the global object. this will print window object 

// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
// }
// obj.getName();
// Here, the function is invoked as a method of the obj object. So, this will refer to the obj object and print "vivek".

// 23. What are callbacks?
// A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.

//node questions -----------------------------------------------------------------------------------------------

// 1) Event loop  blocking operations - synchronoes op
                //   non-blocking operations - asynchronous op

    // if current request is added in event queue and then in event loop 
        //Event Loop sees blocking operation
        // It must be executed directly on the main thread, OR sent to the thread pool
        // That thread is blocked (busy) until the work completes
        // The thread pool has only 4 threads by default.
        // So:
        // If 4 blocking requests come at the same time → all threads get busy
        // 5th request must wait, slowing down the server
    // if the operation is non blocking then it will be processed and response will be sent to client
        // Event Loop sees non-blocking operation
        // It delegates it to the libuv thread pool (or OS)
        // Event Loop does NOT wait, instead moves to next request
        // When operation finishes, a callback is pushed to event queue

// Event Loop picks it and sends the response back to client
    // if the operation is blocking then it will be sent in thread(limited ) pool and thread will be blocked until the operation is completed
    // console.log("1")
    // fs.readFileSync('file.txt', 'utf8', (err, data) => {
        //  console.log(result)
        // })
    // console.log("2")   // this will print 1 result and 2 blocking operation will block the thread until it is completed
    // console.log("1")
    // fs.readFile('file.txt', 'utf-8', (err, data) => { asynchronous operation
        //  console.log(result)
        // })
    // console.log("2")   // this will print 1 2 and result non blocking operation will not block the thread 

// 2) npm ->NPM stands for the Node Package Manager. It is the package manager for the  NodeJS environment
        // - NPM uses a package.json file in NodeJS projects to track project dependencies, versions, scripts, and metadata like the project's name and version.

        //NPM is accessed by a command-line interface (CLI). Common commands include npm install to install packages, npm update to update them, and npm uninstall to remove them.