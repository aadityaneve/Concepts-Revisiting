function productWithoutDivisionOperator(arr) {
    /* Approach-1: Brute Force :: TC: O(N^2), SC: O(N) */
    /* let prod = [];
    let pro = 1;
    for (let i = 0; i < arr.length; i++) {
        pro = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                pro *= arr[j];
            }
        }
        prod.push(pro);
    }
    console.log('prod:', prod); */

    /* Approach-2: Taking Two Arrays :: TC: O(N), SC: O(N) */
    let leftArr = [];
    leftArr[0] = 1;
    for (let i = 0; i < arr.length - 1; i++) {
        leftArr[i + 1] = arr[i] * leftArr[i];
    }
    console.log('leftArr:', leftArr);

    let rightArr = [];
    rightArr[arr.length - 1] = 1;
    for (let i = arr.length - 1; i > 0; i--) {
        rightArr[i - 1] = arr[i] * rightArr[i];
    }
    console.log('rightArr:', rightArr);

    let prod = [];
    for (let i = 0; i < arr.length; i++) {
        prod[i] = leftArr[i] * rightArr[i];
    }
    console.log('prod:', prod);
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    productWithoutDivisionOperator(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10 3 5 6 2`);
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
