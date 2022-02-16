let arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

let obj = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};

let result = '';
let num = 1904;
for (let i = arr.length - 1; i >= 0; i--) {
    let currentSymbol = obj[arr[i]];
    if (num === 0) break;
    if (arr[i] > num) continue;
    let count = Math.floor(num / arr[i]);
    for (let j = 0; j < count; j++) {
        result += currentSymbol;
    }
    num = num % arr[i];
}
console.log('result:', result);
