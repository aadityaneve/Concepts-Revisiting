function oddOneOut(arr) {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    if (a === b && b === c) return 1;
    if (a === c && a !== b) return b;
    if (a === b && a !== c) return c;
    if (b === c && b !== a) return a;
    return 0;
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let ans = oddOneOut(arr);
    console.log(ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5 2 5`);
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
