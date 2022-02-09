function sumExistsOrNot(numbersArr, K) {
    let dp = [];
    for (let i = 0; i < numbersArr.length + 1; i++) {
        dp.push([]);
        for (let j = 0; j < K + 1; j++) {
            if (i === 0) dp[i][j] = false;
            if (j === 0) dp[i][j] = true;
        }
    }
    // console.log('dp:', dp);

    for (let i = 1; i < numbersArr.length + 1; i++) {
        for (let j = 1; j < K + 1; j++) {
            if (numbersArr[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - numbersArr[i - 1]];
            }
        }
    }

    // console.log('dp:', dp)
    return dp[numbersArr.length][K];

    /* function getSubsets(arr, newArr, curr) {
        if (curr === arr.length) {
            // console.log(newArr);
            return;
        }

        getSubsets(arr, newArr, curr + 1);
        getSubsets(arr, newArr.concat(arr[curr]), curr + 1);
    }
    getSubsets(arr, [], 0); */
}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    let K = +input[2];
    let ans = sumExistsOrNot(arr, K);
    if(ans) {
        console.log('yes');
    }else {
        console.log('no');
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
