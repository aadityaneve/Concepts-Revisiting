function seperateZerosAndOnes(arr) {
    /* Approach-1: Taking Seperate Zero's and One's array */
    /* TC: O(N), SC: O(N) */
    /* let zeros = [];
    let ones = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            ones.push(arr[i]);
        }
    }
    console.log('zeros:', zeros);
    console.log('ones:', ones); */

    /* Approach-2: Count Approach */
    /* TC: O(N), SC: O(1) */
    /* let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }
    let onesCount = arr.length - zeroCount;
    for (let i = 0; i < arr.length; i++) {
        if (zeroCount) {
            console.log(0);
            zeroCount--;
        } else if (onesCount) {
            console.log(1);
            onesCount--;
        }
    } */

    /* Approach-3: Two Pointer */
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        while (arr[start] === 0) {
            start++;
        }

        while (arr[end] === 1) {
            end--;
        }

        if (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }
    console.log(arr);
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    seperateZerosAndOnes(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1 1 0 1 0 0 0 1`);
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
