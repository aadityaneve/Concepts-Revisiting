function seperateZerosOnesTwos(arr) {
    /* Approach-1: Using zeros, ones, two seperate arrays */
    /* TC: O(N), SC: O(N) */
    /* let zeros = [];
    let ones = [];
    let twos = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else if (arr[i] === 1) {
            ones.push(arr[i]);
        } else if (arr[i] === 2) {
            twos.push(arr[i]);
        }
    }
    console.log('zeros:', zeros);
    console.log('ones:', ones);
    console.log('twos:', twos); */
    /* Approach-2: Count Approach */
    /* TC: O(N), SC: (1) */
    /* let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else if (arr[i] === 1) {
            oneCount++;
        } else if (arr[i] === 2) {
            twoCount++;
        }
    }
    console.log('zeroCount:', zeroCount);
    console.log('oneCount:', oneCount);
    console.log('twoCount:', twoCount); */

    /* Approach-3: DUCH NATIONAL FLAG ALGORITHM */
    /* TC: O(N), SC: O(1) */
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let start = 0;
    let end = arr.length - 1;
    let mid = 0;
    while (mid <= end) {
        switch (arr[mid]) {
            case 0:
                swap(arr, start, mid);
                start++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(arr, mid, end);
                end--;
                break;
        }
    }
    console.log(arr);
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    seperateZerosOnesTwos(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`0 0 2 2 2 1 0 0 1 0 2 1 0`);
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
