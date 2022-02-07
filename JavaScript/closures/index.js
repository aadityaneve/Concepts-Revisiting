function addAll(a) {
    return function add(b) {
        return a + b;
    };
}

let x = addAll(5);
console.log(x(6));
