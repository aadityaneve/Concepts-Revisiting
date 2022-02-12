function swap(arr, i, j) {
    let temp = 0;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
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
        swap(arr, i, min);
    }
    return arr;
}

function minAndMaxSum(arr, K) {
    arr = selectionSort(arr);

    let sum1 = 0;
    for (let i = 0; i < arr.length - K; i++) {
        sum1 += arr[i];
    }
    // console.log('sum1:', sum1)

    let sum2 = 0;
    for (let j = arr.length - 1; j >= K; j--) {
        sum2 += arr[j];
    }
    // console.log('sum2:', sum2)

    console.log((sum2 - sum1));
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let [size, K] = input[++lines].trim().split(' ').map(Number);
        let arr = input[++lines].trim().split(' ').map(Number);
        minAndMaxSum(arr, K);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  5 1
  1 4 3 4 5
  5 1
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
