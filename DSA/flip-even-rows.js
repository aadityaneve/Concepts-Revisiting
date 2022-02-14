function runProgram(input) {
    input = input.trim().split('\n');
    let [row, col] = input[0].trim().split(' ').map(Number);
    let lines = 0;
    for (let i = 0; i < row; i++) {
        let arr = input[++lines].trim().split(' ').map(Number);
        if (lines % 2 === 0) {
            let start = 0;
            let end = arr.length - 1;
            while (start < end) {
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;

                start++;
                end--;
            }
        }
        console.log(arr.join(' '));
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4 2
  1 2
  3 4
  5 6
  7 8
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
