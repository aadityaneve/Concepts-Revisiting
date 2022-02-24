function checkIfSortedAndRotated(arr) {
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
    let pivot = start - 1;

    if (pivot === -1) {
        return false;
    }

    let flag1 = true;
    for (let i = pivot; i >= 1; i--) {
        if (arr[i] < arr[i - 1]) {
            flag1 = false;
            break;
        }
    }

    let flag2 = true;
    for (let i = pivot + 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            flag2 = false;
            break;
        }
    }

    if (flag1 === true && flag2 === true) {
        return true;
    } else {
        return false;
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    let ans = checkIfSortedAndRotated(arr);
    if (ans === true) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
    1 2 3 4 5`);
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
