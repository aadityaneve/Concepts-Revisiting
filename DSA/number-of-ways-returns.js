function numberOfWaysReturns(number) {
    let dp = new Array(number + 1).fill(-1);

    function getWays(number) {
        if (number === 1 || number === 0) {
            return 1;
        } else if (number === 2) {
            return 2;
        } else if (dp[number - 1] === -1) {
            dp[number] =
                getWays(number - 1) + getWays(number - 2) + getWays(number - 3);
        }
        return dp[number];
    }
    let ans = getWays(number);
    console.log(ans);
}

function runProgram(input) {
    numberOfWaysReturns(+input);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4`);
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
