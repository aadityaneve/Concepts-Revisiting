function gpAndRecursion(n, r) {
    let sum = 0;
    function recurse(n, r) {
        if (n < 0) {
            return sum.toFixed(4);
        }

        sum += 1 / r ** n;

        return recurse(n - 1, r);
    }
    let ans = recurse(n, r);
    console.log(ans);
}

function runProgram(input) {
    let [n, r] = input.trim().split(' ').map(Number);
    gpAndRecursion(n, r);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3 5`);
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
