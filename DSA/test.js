function hani(x) {
    if (x < 1) return 1;
    return hani(x - 1) + bani(x);
}

function bani(x) {
    if (x < 2) return 1;
    return hani(x - 1) + Math.floor(x / 2);
}
let ans = hani(6);
console.log('ans:', ans);
