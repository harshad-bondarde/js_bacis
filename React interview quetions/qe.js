// 1) What is JSX and how is it converted into JavaScript?

// JSX: Syntax extension for JavaScript, mainly used with React.
// HTML in JS: Allows writing HTML-like code inside JavaScript for easier readability and maintenance.
// Expressions: Embed JavaScript expressions in JSX using {}.

// 2) What is a React component?
// A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. 

    // Functional Components: Functional components are simply JavaScript functions. 
    // Class Components: A class component requires you to extend from React. Component and create a render function . It must have the render() method returning JSX 

// props
    // The Data is passed from one component to another.	
    // It is Immutable (cannot be modified).	
    // Props are read-only.
// state 
    // It is Mutable ( can be modified).
    // The Data is passed within the component only.
    // The state is both read and write.

//Hooks 
//Hooks are special functions in React that let you use state, lifecycle methods, and other React features in functional components, which were previously only available in class components.

//Usestate hook
// The useState hook allows you to add state to functional components. It returns a state variable and a setter function to update that state. When the state changes, React re-renders the component with the updated value.

// useEffect
// useEffect is a React hook that allows functional components to perform side effects such as fetching data, setting up subscriptions, or directly manipulating the DOM. It runs after the component renders

// useRef
// The useRef hook creates a mutable object that persists across renders without causing re-renders. It is commonly used to access DOM elements or store mutable values.

// usememo
// Memoizes computed values
// Returns the result of a function
// Avoids expensive recalculations on re-render
// Key idea: caches value

// useCallback
// Memoizes functions
// 	Returns the function itself
// Prevents re-creating functions on re-render
// Key idea: caches function

// Custom Hooks
// Custom hooks are reusable functions that let you extract and share logic between functional components. They are JavaScript functions whose names start with use and can call other hooks like useState or useEffect.
    // Always call hooks at the top level of your component or custom hook.
    // Only call hooks from React functional components or custom hooks.
    // Custom hooks should always start with use, like useFetch or useForm.


// Local State
    // Data managed within a single component.
    // Controlled using useState or useReducer inside the component.
    // Used for UI-related data like form inputs, modals, or toggles.
// Global State
    // Data shared across multiple components.
    // Managed using Context API, Redux, or zustand
    // Used for application-wide data like user authentication, theme settings, or shopping cart contents.

// How can you optimize state updates for performance in React?
    // Use useMemo and useCallback to avoid unnecessary re-renders.
    // Use state management libraries efficiently (e.g., Redux selectors, Zustand slices).

// How do you handle asynchronous state updates in React?
    // Use the functional form of setState when the new state depends on the previous state:
    // setCount(prevCount => prevCount + 1);

// How does React.memo help improve performance?
    // React.memo is a higher-order component that prevents unnecessary re-renders of functional components. It re-renders a component only if its props have changed, 

// How does React handle re-rendering when state or props change?
    //When state or props change, React creates a new Virtual DOM for the component.
    // It compares the new Virtual DOM with the previous one (diffing algorithm) to detect changes.
    // Only the necessary parts of the real DOM are updated.

// map(): Returns a new array, which can contain JSX elements to be rendered. This is the preferred method for rendering lists in React.
// forEach(): Does not return a new array, so it cannot directly produce elements for rendering. It’s only useful for side effects.

// What is React Router and why is it used?
// React Router is a library that enables client-side routing in React applications. It allows you to create single-page applications (SPAs) where navigation between views happens without a full page reload, making apps faster and smoother.