function buggyUpdate(arr1, arr2) {
    if (
        arr1[0] > arr2[0] ||
        (arr1[0] === arr2[0] && arr1[1] > arr2[1]) ||
        (arr1[1] === arr2[1] && arr1[2] > arr2[2]) ||
        arr1[2] === arr2[2]
    ) {
        console.log('False');
    } else {
        console.log('True');
    }

    /* for (let i = 0; i < arr1.length; i++) {
        
        if (arr1[i] < arr2[i] || arr1[i] === arr2[i]) {
            console.log('True');
            break;
        } else {
            console.log('False');
            break;
        }
    } */

    /* let number1 = Number(arr1.join(''));
    let number2 = Number(arr2.join(''));

    if (number2 > number1) {
        console.log('True');
    } else {
        console.log('False');
    } */
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let arr1 = input[++lines].trim().split('.').map(Number);
        let arr2 = input[++lines].trim().split('.').map(Number);
        buggyUpdate(arr1, arr2);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
  2.0.1
  1.9.8
  12.0.1
  12.10.0
  1.1.10
  1.1.12`);
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
