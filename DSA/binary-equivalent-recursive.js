function binaryEquivalentRecursive(number) {
    // console.log('number:', number)

    let binary = [];
    function recursive(number, i) {
        if (number === 0) {
            return;
        }

        binary[i] = number % 2;
        recursive(Math.floor(number / 2), i + 1);
    }
    recursive(number, 0);
    console.log(binary.reverse().join(''));

    /* let binary = [];
    let i = 0;
    while (number > 0) {
        binary[i] = number % 2;
        number = Math.floor(number / 2);
        i++;
    }
    console.log(binary.reverse().join('')); */
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        binaryEquivalentRecursive(+input[++lines]);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  15
  128`);
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
