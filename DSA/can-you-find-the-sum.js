function canYouFindTheSum(arr) {
    let stack = [];
    let newArr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            // newArr[i] = stack[stack.length - 1];
            newArr1[i] = arr.indexOf(stack[stack.length - 1]) + 1;
        } else {
            newArr1[i] = -1;
        }

        stack[stack.length] = arr[i];
    }
    // console.log(newArr.join(' '));

    stack = [];
    newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            // newArr[i] = stack[stack.length - 1];
            newArr2[i] = arr.indexOf(stack[stack.length - 1]) + 1;
        } else {
            newArr2[i] = -1;
        }

        stack[stack.length] = arr[i];
    }
    // console.log('newArr2:', newArr2)

    let finalArr = [];
    for (let i = 0; i < newArr1.length; i++) {
        finalArr.push(newArr1[i] + newArr2[i]);
    }
    // console.log('finalArr:', finalArr)
    console.log(finalArr.join(' '))

}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    canYouFindTheSum(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
  5 4 1 3 2`);
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
