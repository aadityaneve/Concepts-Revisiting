function makeEvenArray(arr) {
    if (arr.length === 1 && arr[0] % 2 === 0) {
        return 'YES';
    } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                arr[i] = arr[j];

                for (let k = 0; k < arr.length; k++) {
                    sum += arr[k];
                }
                break;
            }
            if (sum % 2 === 0) {
                return 'YES';
            }
        }
        return 'NO';
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        let ans = makeEvenArray(arr);
        console.log(ans);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  1
  2
  3
  1 2 3`);
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
