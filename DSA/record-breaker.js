function recordBreaker(bestScoreArr, worstScoreArr) {
    let bestRecord = 0;
    let worstRecord = 0;

    let num = bestScoreArr[0];
    for (let i = 1; i < bestScoreArr.length; i++) {
        if (bestScoreArr[i] > num) {
            num = bestScoreArr[i];
        } else {
            bestScoreArr[i] = num;
        }
    }

    num = 999999999999;
    for (let i = 0; i < worstScoreArr.length; i++) {
        if (worstScoreArr[i] < num) {
            num = worstScoreArr[i];
        } else {
            worstScoreArr[i] = num;
        }
    }

    num = bestScoreArr[0];
    for (let i = 0; i < bestScoreArr.length; i++) {
        if (bestScoreArr[i] > num) {
            bestRecord++;
            num = bestScoreArr[i];
        }
    }
    
    num = worstScoreArr[0];
    for (let i = 0; i < worstScoreArr.length; i++) {
        if (worstScoreArr[i] < num) {
            worstRecord++;
            num = worstScoreArr[i];
        }
    }

    console.log(bestRecord, worstRecord);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        let newArr = input[lines].trim().split(' ').map(Number);
        recordBreaker(arr, newArr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  9
  10 5 20 20 4 5 2 25 1
  10
  3 4 21 36 10 28 35 5 24 42`);
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
