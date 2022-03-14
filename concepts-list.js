const add = new Function(
    `a`,
    `b`,
    `c`,
    `
    let sum;
    sum = a + b + c;
    return sum;
`
);
console.log(add(2, 6, 9));

function girl(callback, delay) {
    setTimeout(callback, delay);
}

girl(() => {
    console.log('Call Aditya');
}, 3000);

/* 

FrontEnd:
JavaScript ->
    Event Loop
    Promises && Async Await
    setTimeout && setInterval
    Scope
    hof
    arrays and objects
    hoisting
    prototype and inheritance
    closures
    classes -> call apply bind
    iife -> Immediately Invoked Function Expression -> (()=>{})()
    strict mode
    callback function

    callback hell

    web api

    diff between fetch and axios

    cors

    diff between get, post, put, patch, delete

    anonymous function

    localStorage, cookies, sessionStorage
    var let const
    arrow function
    destructuring
    this
    ... -> spread operator

    currying

    debouncing
    throttler
    toggler

    lazy loading

    primitive values / pimitive data type
    reference value / reference
    coersion
    prototype
    bigint
    constructor function
    function constructor

    diff between function and arrow function

    polyfilling

    generator function

    new keyword
    what is mutability ?
    Object.freeze()
    pure function
    the scope chain
    scope and lexical environment
    event bubbling && event capturing ( capturing is also called as Trailling)

react ->
    useState, useEffect, useRef, useContext, createContext

    fiverr architecture (optional)

    reconsilation (updating of dom, real dom and virtual dom)

    react fragment
    lifecycle of component
    real and virtual dom (reconsilation)
    context-api
    children prop

    Why react fragments

    Routing -> package - react-router-dom

redux ->
    Explain redux to a 5 year old ?
    what is mutability required by redux?
    how does redux compare to react context api?

react-redux ->
    how does react-redux use shallow equality checking ?

react-router-dom ->
    BrowserRouter, Routes, Route, Link
    useNavigate, useParams
    navigate(-1) -> will take you to previous page



Backend: (MVC Pattern)
mongoDb ->
    database
    Terminology in mongoDb:
        Database => Collections => Documents => Fields    

express -> 
    Router
    Routes
    Explain express middleware (middlewares)    
    What is Aggregation in MongoDB?
    What is the difference between MongoDB and MySQL?    

mongoose ->
    Schema => Blue Print
    modules
    mongoose.connect => connection
    Queries (find, findById, etc...)

node.js ->

    node -> event loop

    what is event in nodejs (EventEmitter)

 */

let arr = [1, 2, 3, 4, [6, 5, 4, 3, [1, 2, [6, 5, 4, 3, [1, 2, 3]], 3]]];

let newArr = [];
function flatenAnArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object') {
            newArr.push(arr[i]);
        } else {
            flatenAnArray(arr[i]);
        }
    }
}
flatenAnArray(arr);
console.log('newArr:', newArr.join('_'));

// console.log(5 - "5")

/* .console.log(3 > 2 > 1)
.console.log(true > 1)
.console.log(1 > 1) // false */

/* console.log(true >= 1) // true */

/* Generator Function */
function* numbersGen() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}
let gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
/* Generator Function */

// Javascript: "Infinite" parameters for function?
// Functions can access an array-like object called arguments that contains all the arguments that they received
function print_my_arguments(/**/) {
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
// Javascript: "Infinite" parameters for function?

// Object.create()
const person = {
    name: 'Aditya',
    isHuman: false,
};
const me = Object.create(person);
console.log('me:', me.__proto__);
// Object.create()

/* 
    x=start , y = y1,y2,y3
    halfLife of radio active element
    Radio active element
        write a program to predict the life of radio active
        and also add some radio active element daily 
*/