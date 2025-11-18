// A closure is a function that allows access to variables from its outer function and global variables, even after the outer function has finished executing. This enables functions to “remember” their environment
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar);
    }
    return inner;
}
const closure = outer(); 
closure(); 

// This will print "I'm in the outer scope!" because the inner function has access to the outer function's variables even after it has finished executing

// Lexical Scoping :-
// Closures are based on lexical scoping, meaning that a function’s scope is determined by where the function is defined, not where it is executed
//----------------------------------------------------------------------------------------------------------------------------------
// function counter() {
//     // Private variable
//         let count = 0; 
        
//         return function () {
//          // Access and modify the private variable
//             count++;
//             return count;
//         };
//     }
    
//     const increment = counter();
//     console.log(increment());
//     console.log(increment());
//     console.log(increment()); 
    // Output: 1, 2, 3
    // The count variable is private to the counter function and cannot be accessed directly from outside.

//---------------------------------------------------------------------------------------------------------------------------------
    const counter = (function () { // IIFE (Immediately Invoked Function Expression) to create a private scope
        let count = 0;  
    
        return {
            increment: function () {
                count++;
                console.log(count);
            },
            reset: function () {
                count = 0;
                console.log("Counter reset");
            },
        };
    })();//this is IIFE syntax
    
    counter.increment(); 
    counter.increment(); 
    counter.reset();      
//--------------------------------------------------------------------------------------------------------------------------------
function Person(name) {
    this.name = name;
    
    this.sayName = function () {
        console.log(this.name);
    };

    setTimeout(function () {
        console.log(this.name); 
        // Undefined because 'this' refers to global object
    }.bind(this), 1000); 
    // Fix with bind
}

const G = new Person("GFG");
G.sayName(); 
//---------------------------------------------------------------------------------------------------------------------------
// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addTwo = add(2);  // First function call with 2 //takes series of arguments and returns a function that takes the next argument
console.log(addTwo(3));  // Output: 5

