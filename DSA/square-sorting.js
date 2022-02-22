function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return true;
}

function bubbleSort(arr, squareArr, size) {
    for (let i = 0; i < size - 1; i++) {
        // let flag = false;
        for (let j = 0; j < size - i - 1; j++) {
            if (squareArr[j] > squareArr[j + 1]) {
                flag = swap(squareArr, j, j + 1);
                flag = swap(arr, j, j + 1);
            }
            // if (flag === false) {
            //     break;
            // }
        }
    }
}

function squareSorting(arr) {
    let squareArr = [];
    for (let i = 0; i < arr.length; i++) {
        squareArr.push(arr[i] ** 2);
    }
    // console.log('squareArr:', squareArr)

    bubbleSort(arr, squareArr, arr.length);

    console.log(arr.join(' '));
    // console.log('arr:', arr)
    // console.log('squareArr:', squareArr)
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        squareSorting(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
  5
  -2 3 1 -4 6
  `);
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
