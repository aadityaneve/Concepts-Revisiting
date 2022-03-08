function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }

    return arr;
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let ans = selectionSort(arr);
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
