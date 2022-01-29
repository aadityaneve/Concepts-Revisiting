function stockItUp(arr, weaks) {
    let obj = {
        0: 550,
        1: 240,
        2: 84,
        3: 159,
        4: 80,
        5: 160,
        6: 252,
    };

    let j = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            sum += obj[j];
        }
        j++;
    }
    console.log(sum * weaks);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let weaks = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    stockItUp(arr, weaks);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4
  0 1 1 1 0 0 1`);
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
