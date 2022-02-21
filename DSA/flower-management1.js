function flowerManagement(arr, K) {
    for (let i = 0; i < arr.length; i++) {
        if (K === 0) return 0;
        if (arr[i] === 1) continue;
        if (i === 0 && arr[i + 1] === 0) {
            arr[i] = 1;
            K--;
        } else if (i === arr.length - 1 && arr[i - 1] === 0) {
            arr[i] = 1;
            K--;
        } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
            arr[i] = 1;
            K--;
        }
    }
    return K;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let [size, K] = input[++lines].trim().split(' ').map(Number);
        let arr = input[++lines].trim().split(' ').map(Number);
        let ans = flowerManagement(arr, K);
        if (ans != 0) {
            console.log('No');
        } else {
            console.log('Yes');
        }
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
  5 1
  1 0 0 0 1`);
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
