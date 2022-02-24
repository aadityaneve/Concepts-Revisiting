let dp = [];
function numberOfCoins(coin, sum) {
    if (coin.length === 1 && sum < coin[0]) {
        console.log(-1);
    } else {
        for (let i = 1; i < coin.length + 1; i++) {
            for (let j = 1; j < sum + 1; j++) {
                if (coin[i - 1] <= j) {
                    dp[i][j] = Math.min(
                        1 + dp[i][j - coin[i - 1]],
                        dp[i - 1][j]
                    );
                } else if (coin[i - 1] > j) {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        console.log(dp[coin.length][sum]);
        // console.log('dp:', dp)
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let [size, sum] = input[0].trim().split(' ').map(Number);
    let coin = input[1].trim().split(' ').map(Number);

    /* DP Initialization */
    for (let i = 0; i < coin.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            if (j === 0) dp[i][j] = 0;
            if (i === 0) dp[i][j] = Number.MAX_VALUE - 1;
        }
    }

    /* DP Second Row Initialization */
    for (let j = 0; j < sum + 1; j++) {
        if (j % coin[0] === 0) {
            dp[1][j] = j / coin[0];
        } else if (j % coin[0] !== 0) {
            dp[1][j] = Number.MAX_VALUE - 1;
        }
    }

    numberOfCoins(coin, sum);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`100 1000000
    27 69 68 13 1 63 28 44 45 67 57 11 8 85 42 20 32 77 39 52 70 24 4 79 7 15 54 88 51 73 89 66 48 56 47 18 2 30 21 49 74 9 99 83 55 95 62 90 22 31 71 98 43 75 25 16 12 64 61 38 40 26 3 96 41 86 5 14 91 33 78 50 23 84 94 36 46 97 53 81 65 34 93 59 6 35 72 10 82 60 19 92 29 87 76 100 80 17 58 37`);
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
