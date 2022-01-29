function mergeSort(left, right) {
    let arr = [];

    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller element of left and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    // Concatenating the leftover elements
    // ( in case we didn't go through the entire left or right array )
    return [...arr, ...left, ...right];
}

function merge(arr) {
    let half = parseInt(arr.length / 2);

    // Base case or terminating case
    if (arr.length < 2) {
        return arr;
    }

    let left = arr.splice(0, half);
    return mergeSort(merge(left), merge(arr));
}

function runProgram(input) {
    input = input.trim().split('\n');
    let arr = input[0].trim().split(' ').map(Number);
    console.log(merge(arr));
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5 6 4 3 7 8 0 4`);
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
