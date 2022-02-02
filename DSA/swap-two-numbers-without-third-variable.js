function swapTwoNumbersWithoutThirdNumber(A, B) {
    /* Approach-1: Using + and - operator  */
    /* A = A + B;
    B = A - B;
    A = A - B;
    console.log('A:', A, 'B:', B); */

    /* Approach-2: Using BitWise EX-OR */
    A = A ^ B;
    B = A ^ B;
    A = A ^ B;
    console.log('A:', A, 'B:', B);
}

function runProgram(input) {
    let [A, B] = input.trim().split(' ').map(Number);
    swapTwoNumbersWithoutThirdNumber(A, B);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`30 50`);
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
