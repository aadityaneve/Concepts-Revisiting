function nthRoot(root, num) {
    let ansArr = [];
    let flag = true;
    if (root === 1) {
        console.log(num);
    } else {
        for (let i = 2; i <= Math.round(Math.sqrt(num)) && flag; i++) {
            let ans = 1;
            for (let j = 0; j < root; j++) {
                ans *= i;
            }
            ansArr.push(ans);

            if (ans === num) {
                console.log(i);
                break;
            } else if (ans > num) {
                console.log(ansArr.length);
                flag = false;
                /* for (let i = 0; i < ansArr.length && flag; i++) {
                    if (ansArr[i] > num) {
                        console.log(i + 1);
                        flag = false;
                    }
                } */
            }
        }
    }
    // console.log('ansArr:', ansArr);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let [root, num] = input[++lines].trim().split(' ').map(Number);
        nthRoot(root, num);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
    2 9
    6 4096
    3 126`);
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
