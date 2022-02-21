function fibonacciReturnsAgain(number) {
    let dp = [0, 1];
    for (let i = 1; i < number; i++) {
        dp.push(-1);
    }

    function getFibonacci(number) {
        if (dp[number - 1] !== -1) return dp[number - 1];
        else
            return (dp[number - 1] =
                getFibonacci(number - 1) + getFibonacci(number - 2));
    }
    getFibonacci(number + 1);
    return dp[dp.length - 1];

    /* function getFibonacci(number) {
        if (number === 0) return 0;
        else if (number === 1) return 1;
        else return getFibonacci(number - 1) + getFibonacci(number - 2);
    }
    return getFibonacci(number); */
}

function runProgram(input) {
    let ans = fibonacciReturnsAgain(+input);
    console.log(ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
        read += input;
    });
    process.stdin.on('end', function () {
        read = read.replace(/\n$/, '');
        read = read.replace(/\n$/, '');
        runProgram(read);
    });
    process.on('SIGINT', function () {
        read = read.replace(/\n$/, '');
        runProgram(read);
        process.exit(0);
    });
}
