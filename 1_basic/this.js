const person = {
    name: "ram",
    age: 22,
    greet: function () { //regualr function
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person.greet());
// Output: Hello , you are 22 years old

// const person = {
//     name: "ram",
//     age: 22,
//     greet: () => { //arrow function
//         return `Hello , you are ${this.age} years old`
//     }
// }
// console.log(person.greet());
//this will be undefined in arrow function  
// Because the person object is not a scope.

// In JavaScript:

// Scopes are created by functions, modules, and blocks ({} inside if, for, etc.)
// An object literal like person = { ... } is just a value, not a scope 
//so scope of this keyword here is global object (window in browser, global in nodejs).



// function greet() {
//     console.log('Hello, my name is ' + this.name);
// }

// const person = {
//     name: 'Amit',
//     sayHello: greet
// };
// const anotherPerson = {
//     name: 'Jatin'
// };

// greet(); 
// person.sayHello(); 
// greet.call(anotherPerson); 

// Output
// Hello, my name is undefined
// Hello, my name is Amit
// Hello, my name is Jatin