function maximumProductPossible(arr) {
    let maxProduct = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (maxProduct < arr[i] * arr[j]) {
                maxProduct = arr[i] * arr[j];
            }
        }
    }
    return maxProduct;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        let ans = maximumProductPossible(arr);
        if (ans === 1) {
            console.log(0);
        } else {
            console.log(ans);
        }
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
  6 
  1 0 7 2 4 0
  5
  1 2 3 4 5
  2
  0 0`);
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
