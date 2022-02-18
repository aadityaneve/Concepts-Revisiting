function twoStringsAndPermutation(arr1, arr2) {
    arr1.sort();
    arr2.sort();

    let flag = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            flag = false;
        }
    }

    if (flag) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let arr1 = input[0].trim().split('');
    let arr2 = input[1].trim().split('');
    twoStringsAndPermutation(arr1, arr2);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`amit
  mtia`);
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
