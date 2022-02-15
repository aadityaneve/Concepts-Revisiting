function nearestGreaterElement(arr) {
    // console.log('arr:', arr);
    var stack = [];
    var newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            newArr[i] = stack[stack.length - 1];
        } else {
            newArr[i] = -1;
        }
        stack[stack.length] = arr[i];
    }
    console.log(newArr.join(' '));
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        nearestGreaterElement(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    4
    1 3 2 4`);
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
