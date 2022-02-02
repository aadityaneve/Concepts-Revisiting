function evenOddBitwiseAnd(arr) {
    /* Bit Wise And :: TC: O(N), SC: O(1) */
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] & (1 === 1)) {
            console.log('ODD');
        } else {
            console.log('EVEN');
        }
    }
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    evenOddBitwiseAnd(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3 5 3 4 5 7 4`);
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
