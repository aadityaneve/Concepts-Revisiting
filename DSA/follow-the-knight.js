function followTheKnight(row, col, K) {
    let board = new Array(10);
    for (let i = 0; i < 10; i++) {
        board[i] = new Array(10);
        for (let j = 0; j < 10; j++) {
            board[i][j] = 0;
        }
    }
    // console.log('board:', board.length);

    function takeSteps(K, i, j) {
        if (i < 0 || i > 9 || j < 0 || j > 9) {
            return;
        }

        if (K === 0) {
            board[i][j] = 1;
            return;
        }

        takeSteps(K - 1, i - 2, j + 1);
        takeSteps(K - 1, i - 2, j - 1);
        takeSteps(K - 1, i - 1, j + 2);
        takeSteps(K - 1, i - 1, j - 2);
        takeSteps(K - 1, i + 2, j + 1);
        takeSteps(K - 1, i + 2, j - 1);
        takeSteps(K - 1, i + 1, j - 2);
        takeSteps(K - 1, i + 1, j + 2);
    }
    takeSteps(K, row, col);

    let count = 0;
    for (let x of board) {
        for (let y of x) {
            if (y === 1) {
                count++;
            }
        }
    }
    console.log(count);
}

function runProgram(input) {
    let [row, col, K] = input.trim().split(' ').map(Number);
    followTheKnight(row - 1, col - 1, K);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`6 10 8`);
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
