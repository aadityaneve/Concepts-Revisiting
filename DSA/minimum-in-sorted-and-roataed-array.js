function minimumInSortedAndRotatedArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            let mid = parseInt(start + (end - start) / 2);

            if (arr[mid] > arr[end]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return arr[start];
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    let ans = minimumInSortedAndRotatedArray(arr);
    console.log(ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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
