function rotateBy90Deg(matrix) {
    let N = matrix.length;
    for (let i = 0; i < parseInt(N / 2); i++) {
        for (let j = i; j < N - i - 1; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[N - 1 - j][i];
            matrix[N - 1 - j][i] = matrix[N - 1 - i][N - 1 - j];
            matrix[N - 1 - i][N - 1 - j] = matrix[j][N - 1 - i];
            matrix[j][N - 1 - i] = temp;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    let matrix = [];
    for (let i = 0; i < +input[0]; i++) {
        let matSize = +input[++lines];
        for (let j = 0; j < matSize; j++) {
            let row = input[++lines].trim().split(' ').map(Number);
            matrix.push(row);
        }
        rotateBy90Deg(matrix);
        matrix = [];
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8
  3
  1 2 3
  4 5 6
  7 8 9`);
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
