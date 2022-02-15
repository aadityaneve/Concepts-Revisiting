function implementGcd(number1, number2) {
    function gcd(number1, number2) {
        if (number2 != 0) return gcd(number2, number1 % number2);
        else return number1;
    }
    let ans = gcd(number1, number2);
    console.log(ans);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let [number1, number2] = input[++lines].trim().split(' ').map(Number);
        implementGcd(number1, number2);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  24 36
  2 25`);
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
