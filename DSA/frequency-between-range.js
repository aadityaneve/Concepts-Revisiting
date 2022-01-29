function frequencyBetweenRange(arr, rangeArr) {
    let count = 0;

    for (let i = rangeArr[0] - 1; i < rangeArr[1]; i++) {
        if (arr[i] === rangeArr[2]) {
            count++;
        }
    }

    console.log(count);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let [arrSize, querries] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    lines = 1;
    for (let i = 0; i < querries; i++) {
        frequencyBetweenRange(
            arr,
            input[++lines].trim().split(' ').map(Number)
        );
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`6 2
  1 5 3 2 3 2 
  3 6 2
  4 4 2
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
