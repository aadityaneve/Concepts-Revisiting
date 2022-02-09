function longestConsucutiveSetbits(number) {
    let bitCount = 0;
    // 0101
    while (number != 0) {
        number = number & (number << 1);
        bitCount++;
    }
    console.log(bitCount)
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let number = +input[++lines];
        longestConsucutiveSetbits(number);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4
    1
    0
    4294967295
    13`);
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
