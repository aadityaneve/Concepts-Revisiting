function tripletsWhoseSumIsX(arr) {
    let sum = 24;

    /* Approach 1: 3-For Loops, TC:O(N^3), SC:O(1) */
    /* for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === sum) {
                    console.log(arr[i], arr[j], arr[k]);
                }
            }
        }
    } */

    /* Approach 2: Sorting + Two Pointers, TC: O(N^2), SC: O(1) */
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let start = i + 1;
        let end = arr.length - 1;
        while (start < end) {
            if (arr[i] + arr[start] + arr[end] === sum) {
                console.log(arr[i], arr[start], arr[end]);
                return;
            } else if (arr[i] + arr[start] + arr[end] < sum) {
                start++;
            } else {
                end--;
            }
        }
    }
    console.log('Not Found');
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    tripletsWhoseSumIsX(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`12 3 4 1 4 9`);
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
