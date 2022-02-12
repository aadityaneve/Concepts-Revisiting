function stringDifference(string1, string2) {
    let arr = [];
    for (let i = 0; i < Math.max(string1.length, string2.length); i++) {
        if (string1[i] === string2[i]) continue;
        if (string1[i] > string2[i]) {
            if (i < string1.length) {
                arr.push(string1[i]);
            }
        } else {
            if (i < string2.length) {
                arr.push(string2[i]);
            }
        }
    }
    console.log(arr.join(''));
}

function runProgram(input) {
    input = input.trim().split('\n');
    let string1 = input[0].trim();
    let string2 = input[1].trim();
    stringDifference(string1, string2);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`ABCX
    ABCD`);
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
