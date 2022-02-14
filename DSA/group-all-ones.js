function groupAllOnes(arr = []) {
    let n = arr.length;
    let noOfOnes = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] == 1) noOfOnes++;
    }

    let x = noOfOnes;

    let maxOnes = Number.MIN_VALUE;

    let preCompute = new Array(n);
    preCompute.fill(0);

    if (arr[0] == 1) preCompute[0] = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] == 1) {
            preCompute[i] = preCompute[i - 1] + 1;
        } else preCompute[i] = preCompute[i - 1];
    }

    for (let i = x - 1; i < n; i++) {
        if (i == x - 1) noOfOnes = preCompute[i];
        else noOfOnes = preCompute[i] - preCompute[i - x];

        if (maxOnes < noOfOnes) maxOnes = noOfOnes;
    }

    let noOfZeroes = x - maxOnes;

    return noOfZeroes;

    /* let onesCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            onesCount++;
        }
    }

    if (onesCount === 1 || onesCount === arr.length) {
        return 0;
    }

    function getCountOfOne(arr, start, end) {
        let count = 0;
        for (let i = start; i < end; i++) {
            if (arr[i] === 1) count++;
        }
        return count;
    }

    let start = 0;
    let end = onesCount;
    let maxCount = 0;
    let maxCountStartIndex;
    let maxCountEndIndex;
    while (end < arr.length) {
        let newOnesCount = getCountOfOne(arr, start, end);
        if (maxCount < newOnesCount) {
            maxCount = newOnesCount;
            maxCountStartIndex = start;
            maxCountEndIndex = end;
        }

        start++;
        end++;
    }

    return onesCount - maxCount; */

    // console.log('maxCount:', maxCount);
    // console.log('maxCountStartIndex:', maxCountStartIndex);
    // console.log('maxCountEndIndex:', maxCountEndIndex);

    /* let queue = [];
    for (let i = 0; i < onesCount; i++) {
        queue.push(arr[i]);
    }

    function getCountOfOne(ptr, arr) {
        let count = 0;
        for (let i = ptr; i < arr.length; i++) {
            if (arr[i] === 1) count++;
        }
        return count;
    }

    let ptr = 0;
    let maxCount = -1;
    for (let j = onesCount; j < arr.length; j++) {
        maxCount = getCountOfOne(ptr, queue);
    } */
}

function runProgram(input = '') {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        let ans = groupAllOnes(arr);
        console.log(ans);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
    4
    1 1 0 0
    5
    1 1 1 1 1
    5
    0 0 0 1 1
    6
    0 0 1 1 0 1
    5
    0 0 0 1 0`);
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
