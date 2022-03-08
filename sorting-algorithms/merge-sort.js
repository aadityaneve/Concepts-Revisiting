function merge(leftArr, rightArr) {
    let arr = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) arr.push(leftArr.shift());
        else arr.push(rightArr.shift());
    }

    return [...arr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
    const half = arr.length / 2;

    if (arr.length < 2) return arr;
    const leftArr = arr.splice(0, half);
    return merge(mergeSort(leftArr), mergeSort(arr));
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let ans = mergeSort(arr);
    console.log('ans:', ans)
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10 5 -2 8 9 3 6 15 12 -1`);
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
