function powerSum(number, power, i = 1) {
    if (number < 0 || number < Math.pow(i, power)) {
        return 0;
    }
    if (number == 0 || number == Math.pow(i, power)) {
        return 1;
    }
    return (
        powerSum(number - Math.pow(i, power), power, i + 1) +
        powerSum(number, power, i + 1)
    );
}

function runProgram(input) {
    input = input.trim();
    let [number, power] = input.trim().split(' ').map(Number);
    let ans = powerSum(number, power);
    console.log(ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10 2`);
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
