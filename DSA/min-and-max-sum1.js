function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function selectionSort(arr) {
    let min = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        arr = swap(arr, i, min);
    }
    return arr;
}

function minAndMaxSum(arr, K) {
    arr = selectionSort(arr);
    // console.log('arr:', arr);

    let sum1 = 0;
    for (let i = 0; i < arr.length - K; i++) {
        sum1 += arr[i];
    }

    let sum2 = 0;
    for (let j = arr.length - 1; j >= K; j--) {
        sum2 += arr[j];
    }

    return sum2 - sum1;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let [size, K] = input[++lines].trim().split(' ').map(Number);
        let arr = input[++lines].trim().split(' ').map(Number);
        let ans = minAndMaxSum(arr, K);
        console.log(ans);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    44 37
    245 525 525 935 319 520 688 344 122 73 993 424 809 666 465 886 867 583 983 519 524 489 574 110 665 733 218 820 395 461 886 640 337 410 926 655 282 614 351 403 38 343 179 847`);
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
