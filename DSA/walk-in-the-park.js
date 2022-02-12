function walkInThePark(matrix) {
    let i = 0;
    let j = 0;
    let count = 0;
    let flag = true;
    while (i >= 0 && j >= 0 && i < matrix.length && j < matrix[i].length && flag) {
        // console.log(i+":"+j)
        switch (matrix[i][j]) {
            case 'X':
                flag = false;
                break;
            case 'R':
                matrix[i][j] = 'X';
                j++;
                count++;
                break;
            case 'L':
                matrix[i][j] = 'X';
                j--;
                count++;
                break;
            case 'U':
                matrix[i][j] = 'X';
                i--;
                count++;
                break;
            case 'D':
                matrix[i][j] = 'X';
                i++;
                count++;
                break;
        }
    }

    console.log(count);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    let matrix = [];
    for (let i = 0; i < +input[0]; i++) {
        let [row, col] = input[++lines].trim().split(' ').map(Number);
        for (let j = 0; j < row; j++) {
            let arr = input[++lines].trim().split('');
            matrix.push(arr);
        }
        walkInThePark(matrix);
        matrix = [];
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
  3 4
  RRDR
  LLUD
  LLLL
  `);
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
