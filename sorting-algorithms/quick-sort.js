function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end) {
    let pivot = arr[start];
    let i = start;
    let j = end;

    while (i < j) {
        while (arr[i] <= pivot) i++;
        while (arr[j] > pivot) j--;
        if (i < j) swap(arr, i, j);
    }
    swap(arr, start, j);
    return j;
}

function quickSort(arr, start, end) {
    if (start < end) {
        let j = partition(arr, start, end);
        quickSort(arr, start, j - 1);
        quickSort(arr, j + 1, end);
    }
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    quickSort(arr, 0, arr.length - 1);
    console.log(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10 5 8 9 3 6 15 12 -1`);
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
