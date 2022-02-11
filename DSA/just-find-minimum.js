let stack = [];
function findMinimum(operation, value) {
    switch (operation) {
        case 'PUSH':
            stack.push(value);
            break;
        case 'POP':
            if (stack.length !== 0) {
                stack.pop();
            } else {
                console.log('EMPTY');
            }
            break;
        case 'MIN':
            if (stack.length === 0) {
                console.log('EMPTY');
            } else {
                console.log(Math.min(...stack));
            }
            break;
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let [operation, value] = input[++lines].trim().split(' ');
        findMinimum(operation, value);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`17
  PUSH 5
  PUSH 7
  PUSH 3
  PUSH 8
  PUSH 10
  MIN
  POP
  POP
  MIN
  POP
  MIN
  POP
  POP
  POP
  POP
  MIN
  MIN
  `);
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
