function pairLessThanK(arr, K) {
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    let maxNum = -1;
    while (start <= end) {
        let sum = arr[start] + arr[end];
        if (sum > maxNum && sum < K) {
            maxNum = sum;
            // console.log('maxNum:', maxNum);
        }
        if (sum > K) {
            end--;
        } else {
            start++;
        }
    }
    console.log(maxNum);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        let K = +input[++lines];
        pairLessThanK(arr, K);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  5
  0 0 3 4 5
  7
  3
  30 10 20
  15`);
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
