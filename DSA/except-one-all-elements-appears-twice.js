function exceptOneAllElementsAppearsTwice(arr) {
    /* Approach-1: Brute Force :: TC: O(N^2), SC: O(1)*/
    /* let flag = false;
    for (let i = 0; i < arr.length; i++) {
        flag = false;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] === arr[j]) {
                    flag = true;
                    break;
                }
            }
        }
        if (!flag) {
            console.log(arr[i]);
        }
    }
    return -1; */

    /* Approach-2: Sorting Technique :: TC: O(NLogN)), SC: O(1) */
    /* arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i=i+2) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i];
        }
    }
    return -1; */

    /* Approach-3: Key Value Paris :: TC: O(N), SC: O(1) */
    /* let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    for (let x in obj) {
        if (obj[x] === 1) {
            return x;
        }
    }
    return -1; */

    /* Approach-4: Using EX-OR, TC: O(N), SC: O(1) */
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = result ^ arr[i];
    }
    return result;
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let ans = exceptOneAllElementsAppearsTwice(arr);
    console.log('Single Element: ', ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3 5 3 4 5 7 4`);
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
