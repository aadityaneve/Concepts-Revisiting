let dp = [];
function maximumApple(weightArr, totalWeight, size) {
    if (size === 0 || totalWeight === 0) {
        return 0;
    }

    if (dp[size - 1] != -1) {
        return dp[size - 1];
    }

    if (weightArr[size - 1] <= totalWeight) {
        return (dp[size] = Math.max(
            maximumApple(
                weightArr,
                totalWeight - weightArr[size - 1],
                size - 1
            ),
            maximumApple(weightArr, totalWeight, size - 1)
        ));
    } else if (weightArr[size - 1] > totalWeight) {
        return (dp[size] = maximumApple(weightArr, totalWeight, size - 1));
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let [size, K] = input[0].trim().split(' ').map(Number);
    let weightArr = input[1].trim().split(' ').map(Number);
    dp = Array(weightArr.length + 1).fill((-1));
    let ans = maximumApple(weightArr, K, weightArr.length);
    console.log('dp:', dp);

    console.log('ans:', ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4 20
  3 10 4 4 `);
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
