function computeJoinPoints(s1, s2) {
    function sumOfDigits(num) {
        let sum = 0;
        while (num !== 0) {
            let n = num % 10;
            num = parseInt(num / 10);
            sum += n;
        }
        return sum;
    }

    let finalS1 = s1;
    let finalS2 = s2;
    while (s1 !== s2 && finalS1 <= 20000000 && finalS2 <= 20000000) {
        if (finalS1 < finalS2) finalS1 += sumOfDigits(finalS1);
        else if (finalS2 < finalS1) finalS2 += sumOfDigits(finalS2);

        if (finalS1 === finalS2) return finalS1;
    }

    return -1;
}

let ans = computeJoinPoints(471, 480);
console.log('ans:', ans);
