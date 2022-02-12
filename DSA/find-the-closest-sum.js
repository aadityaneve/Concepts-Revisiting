function findTheClosestSum(arr, K) {
    if (arr.length <= 3) {
        return 0;
    }

    let start = 0;
    let end = 2;
    let closestSum = 99999999999999;
    while (end !== arr.length) {
        let sum = arr[start] + arr[start + 1] + arr[end];
        if (Math.abs(1 * K - sum) > Math.abs(1 * K - closestSum)) {
            closestSum = sum;
        }
        start++;
        end++;
    }
    return closestSum;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let [size, K] = input[++lines].trim().split(' ').map(Number);
        let arr = input[++lines].trim().split(' ').map(Number);
        let ans = findTheClosestSum(arr, K);
        console.log(ans);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
    4 10
    1, 2, 3, 4, -5
    3 1
    0 0 0`);
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
