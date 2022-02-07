function highFrequency(arr, size) {
    let obj = {};
    for (let i = 0; i < size; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }

    let highFrequencyValue = -1;
    let highFrequencyKey = -1;
    for (let x in obj) {
        if (obj[x] > highFrequencyValue) {
            highFrequencyValue = obj[x];
            highFrequencyKey = x;
        }
    }
    console.log(highFrequencyKey);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        highFrequency(arr, size);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
    6
    1 4 4 4 5 3
    11
    1 2 3 4 5 4 3 2 1 3 4`);
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
