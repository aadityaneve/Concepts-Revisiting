function equilibiriumIndexOfAnArray(arr) {
    /* Approach-1 Brute Force :: TC: O(N^2), SC: O(1) */
    /* let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < arr.length; i++) {
        leftSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        rightSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1; */

    /* Approach-2 Taking Two Arrays :: TC: O(N), SC: O(N)  */
    /* let leftArr = [];
    let rightArr = [];

    leftArr[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        leftArr[i] = arr[i] + leftArr[i - 1];
    }

    rightArr[arr.length - 1] = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        rightArr[i] = arr[i] + rightArr[i + 1];
    }

    for (let i = 1; i < arr.length; i++) {
        if (leftArr[i] === rightArr[i]) {
            return i;
        }
    }
    return -1; */

    /* Approach-3 Optimized Version :: TC: O(N), SC: O(1) */
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }

        leftSum += arr[i];
    }
    return -1;
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let ans = equilibiriumIndexOfAnArray(arr);
    console.log('index:', ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`-7 1 5 2 -4 3 0`);
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
