function majorityElement(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    // console.log('obj:', obj)

    let keys = Object.keys(obj);
    let ans = keys[keys.length - 1];
    for (let x in obj) {
        if (obj[x] > arr.length / 3) {
            ans = x;
        }
    }
    console.log(ans);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
    majorityElement(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
    8 6 4 `);
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
