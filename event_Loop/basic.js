// JavaScript code is executed sequentially, asynchronous tasks, such as timers or AJAX requests, are scheduled and managed by the event loop, allowing other code to continue executing.

// The event loop continuously checks the event queue for tasks. If the main execution context is empty and the event queue has tasks waiting to be executed, the event loop will dequeue the tasks one by one and execute their callback functions


// Main Execution  : Context: When a JavaScript program starts running, it begins in the MAIN EXECUTION context. 
// 
// Any synchronous code is executed line by line in this context.

// Event Queue: Asynchronous operations are scheduled to be executed later and are placed in the event queue once they are completed. Each operation in the queue contains a callback function to be executed when the operation is finished.
