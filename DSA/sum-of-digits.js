let sum = 0;
function sumOfDigits(num) {
    if (num === 0) {
        return;
    } else {
        let n = num % 10;
        // console.log(sum)
        // console.log(n)
        sum += n;
        num = parseInt(num / 10);
        sumOfDigits(num);
    }
}
sumOfDigits(555);
console.log(sum);