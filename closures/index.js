/* 

    Function bundled together with its lexical scope forms a closure.

*/

function outer() {
    var a = 7;

    function inner() {
        console.log(a);
    }

    return inner
}

var z = outer();
console.log(z)
z();
