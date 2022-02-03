function largestSubArraySumProblem(arr) {
    /* Total Number of Subarrays: n*(n+1) / 2 */

    /* Approach-1: Brute Force :: TC: O(N^3), SC: O(1)*/
    /* let maxSum = -1;
    let elements = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0;
            for (var k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (maxSum < sum) {
                elements = [];
                maxSum = sum;
                // console.log('sum:', sum)
                elements.push(...arr.slice(i, k));
            }
        }
    }
    console.log('elements:', elements); */

    /* Approach-2: Kaudanels Algorithm :: TC: O(N), SC: O(1) */
    let sum = Number.MIN_VALUE;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > sum) {
            sum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    console.log(sum);
}

function runProgram(input) {
    largestSubArraySumProblem(input.trim().split(' ').map(Number));
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`-2 -3 4 -1 -2 1 5 -3`);
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
