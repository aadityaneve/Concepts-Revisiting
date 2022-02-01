function findDuplicates(arr) {
    /* Approach-1: Brute Force, TC: O(N^2), SC: O(1) */
    /* for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log(arr[i]);
            }
        }
    } */
    /* Approach-2: Sorting, TC: O(nlogn), SC: O(1) */
    /* arr.sort((a,b) => a - b);
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i-1]) {
            console.log(arr[i]);
        }
    } */
    /* Approach-3 Key Value Pairs, TC: O(N), SC: O(N) */
    /* let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }

    for (let x in obj) {
        if (obj[x] > 1) {
            console.log(x);
        }
    } */

    /* Approach-4: Optimized Approach, TC: O(N), SC: O(1) */
    for (let i = 0; i < arr.length; i++) {
        j = Math.abs(arr[i]);

        if (arr[j] >= 0) {
            arr[j] = -arr[j];
        } else {
            console.log(j);
        }
    }
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    findDuplicates(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1 2 3 6 3 6 1`);
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
