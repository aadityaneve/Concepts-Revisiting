function missingRepeatedNumber(arr) {
    let missingElement = -1;
    let repeatedElement = -1;
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    // console.log('obj:', obj);

    for (let i = 1; i <= arr.length; i++) {
        if (!obj.hasOwnProperty(i)) {
            missingElement = i;
        } else if (obj[i] > 1) {
            repeatedElement = i;
        }

        if (missingElement != -1 && repeatedElement != -1) {
            break;
        }
    }

    console.log(missingElement, repeatedElement);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        missingRepeatedNumber(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
  5
  3 1 3
  2
  1 1
  3
  1 2 2`);
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
