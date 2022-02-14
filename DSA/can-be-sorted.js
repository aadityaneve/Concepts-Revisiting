function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    let originalArr = input[1].trim().split(' ').map(Number);
    // console.log('arr:', arr);

    let start = 0;
    let end = arr.length - 1;
    let midIndex = -1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (arr[mid] >= arr[mid + 1] && arr[mid] >= arr[mid - 1]) {
            midIndex = mid;
            break;
        } else if (arr[mid] <= arr[end]) {
            start = mid + 1;
        } else if (arr[start] <= arr[mid]) {
            end = mid - 1;
        }
    }
    // console.log(midIndex)

    start = midIndex;
    end = arr.length - 1;
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    originalArr.sort((a, b) => a - b);
    if (JSON.stringify(originalArr) === JSON.stringify(arr)) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10
  -1 0 1 2 3 4 5 10 9 7 6`);
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
