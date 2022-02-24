function birthdayShopping(number, K) {
    let arr = [];
    for (let i = 0; i < number; i++) {
        arr.push(i + 1);
    }

    /* for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    } */

    function getSubset(arr, newArr, curr) {
        if (curr === arr.length) {
            if (newArr.length === K) {
                console.log(newArr.join(' '));
            }
            return;
        }

        getSubset(arr, newArr.concat(arr[curr]), curr + 1);
        getSubset(arr, newArr, curr + 1);
    }
    getSubset(arr, [], 0);
}

function runProgram(input) {
    let [number, K] = input.trim().split(' ').map(Number);
    birthdayShopping(number, K);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4 2`);
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
