// Function Currying
// function currying is the way

function multiply(x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

/* function outer() {
    let a = 5;
    return function inner(b) {
        console.log(a + b);
    };
}

let x = outer();
x(10); */

// Use case for closures : function currying

// console.log(this);

/* let interval = setInterval(() => {}, 1000);

useEffect(() => {
    console.log(data);

    popup ? null : () => clearInterval(interval);
}, [data]);
 */


/* function first() {
    console.log('first');
    second();
}

function second() {
    console.log('second');
}

first(); */
