let result = 0;
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

    /* let sum = 0;
    let count = 0;
    console.log('Math.sqrt(number):', parseInt(Math.sqrt(number)))
    for (let i = 1; i <= Math.sqrt(number); i++) {
        sum += i ** power;
        console.log('sum:', sum);
        if (number === sum) {
            count++;
        }
    }
    console.log(count); */
}

function runProgram(input) {
    let [number, power] = input.trim().split(' ').map(Number);
    let ans = powerSum(number, power);
    console.log(ans)
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
