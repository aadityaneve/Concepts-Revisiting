function sumUp(arr, i, j) {
    let sum = 0;
    for (let k = i; k <= j; k++) {
        sum += arr[k];
    }
    return sum;
}

function validateTeamStrength(arr, K, size) {
    let team1 = sumUp(arr, 0, size - 1);
    let team2 = sumUp(arr, size, arr.length - 1);

    let diff = Math.abs(team2 - team1);

    if (diff <= K) {
        return 'Valid';
    } else {
        return 'Invalid';
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let [size, K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    let ans = validateTeamStrength(arr, K, size);
    console.log(ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3 0
    1 2 3 4 2 1`);
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
