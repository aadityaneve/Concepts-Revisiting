function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end) {
    let pivot = arr[start];
    while (start < end) {
        while (arr[start] <= pivot) start++;
        while (arr[end] > pivot) end--;
        if (start < end) {
            swap(arr, start, end);
        }
    }
    swap(arr, start, end);
    return end;
}

function quickSort(arr, start, end) {
    if (start < end) {
        let pivot = partition(arr, start, end);
        quickSort(arr, start, pivot);
        quickSort(arr, pivot + 1, end);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    quickSort(arr, 0, arr.length - 1);
    console.log('arr:', arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
  2 3 1 4 5`);
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
