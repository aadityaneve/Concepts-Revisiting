function equilibiriumIndexOfAnArray(arr) {
    let k = 2;
    k = k % arr.length;
    /* Approach-1: Brute Force :: TC: O(N), O(K) */
    for (let i = arr.length - 1; i >= arr.length - k; i--) {
        arr.unshift(...arr.splice(arr.length - 1, 1));
    }
    return arr;

    /* Approach-2: Two Pointers :: TC: O(N), SC: O(1)  */
    /* function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function reverse(arr, i, j) {
        let start = i;
        let end = j;
        while (start < end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }

    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);

    return arr; */
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let ans = equilibiriumIndexOfAnArray(arr);
    console.log('index:', ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1 2 3 4 5 6`);
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
