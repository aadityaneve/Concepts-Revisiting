function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split('');
    let xCoordinate = 0;
    let yCoordinate = 0;
    for (let i = 0; i < size; i++) {
        if (arr[i] === 'u') {
            yCoordinate++;
        } else if (arr[i] === 'd') {
            yCoordinate--;
        } else if (arr[i] === 'l') {
            xCoordinate--;
        } else if (arr[i] === 'r') {
            xCoordinate++;
        }
    }
    console.log(yCoordinate, xCoordinate);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
    ulrdr`);
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
