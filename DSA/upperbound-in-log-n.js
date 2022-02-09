function upperboundInLogN(arr, element) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);

        if (arr[mid] <= element) {
            result = mid;
            start = mid + 1;
        } else if (arr[mid] > element) {
            end = mid - 1;
        }
    }
    return result + 1;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let [size, K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    let ans = upperboundInLogN(arr, K);
    console.log(ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10 3
    0 2 4 4 5 5 7 7 9 10`);
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
