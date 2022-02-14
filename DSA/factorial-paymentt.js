function factorialPayment(number) {
    function factorial(number) {
        if (number == 0 || number == 1) {
            return 1;
        }

        return number * factorial(number - 1);
    }

    let factorialArr = [];
    for (let i = 1; i <= Math.sqrt(number) + 1; i++) {
        factorialArr.push(factorial(i));
    }
    // console.log('factorialArr:', factorialArr);

    let originalNumber = number;
    let count = 0;
    let i = factorialArr.length - 1;
    while (i >= 0) {
        if (factorialArr[i] > number) {
            i--;
            continue;
        } else {
            if (originalNumber < factorialArr[i]) {
                i--;
                continue;
            } else {
                originalNumber -= factorialArr[i];
                // console.log('factorialArr[i]:', factorialArr[i]);
                count++;
            }
        }
    }
    console.log(count);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        factorialPayment(+input[++lines]);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
    6
    11
    14`);
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
