function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
        }
        if (!swapped) break;
    }

    return arr;
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let ans = bubbleSort(arr);
    console.log('ans:', ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10 5 -2 8 -3 9 3 6 15 12 -1`);
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
