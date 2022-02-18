function numberOfWays(number) {
    let dp = new Array(number + 1).fill(-1);
    function getWays(number) {
        if (number < 0) return 0;
        if (number === 0) return 1;

        if (dp[number] === -1)
            dp[number] =
                getWays(number - 1) + getWays(number - 2) + getWays(number - 3);

        return dp[number];
    }
    let ans = getWays(number);
    // console.log('dp:', dp);
    console.log(ans);
}

function runProgram(input) {
    let number = +input;
    numberOfWays(number);
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
