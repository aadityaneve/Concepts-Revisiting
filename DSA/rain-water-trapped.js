function rainWaterTrapped(buildingsHeights) {
    let maxL = [];
    let maxR = [];

    maxL[0] = buildingsHeights[0];
    for (let i = 1; i < buildingsHeights.length; i++) {
        maxL[i] = Math.max(maxL[i - 1], buildingsHeights[i]);
    }
    // console.log('maxL:', maxL);

    maxR[buildingsHeights.length - 1] =
        buildingsHeights[buildingsHeights.length - 1];
    for (let i = buildingsHeights.length - 2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], buildingsHeights[i]);
    }
    // console.log('maxR:', maxR);

    let water = [];
    for (let i = 0; i < buildingsHeights.length; i++) {
        water[i] = Math.min(maxL[i], maxR[i]) - buildingsHeights[i];
    }
    // console.log('water:', water);

    let sum = 0;
    for (let i = 0; i < water.length; i++) {
        sum += water[i];
    }

    return sum;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        let ans = rainWaterTrapped(arr);
        console.log(ans);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  5
  3 2 0 4 6
  7
  7 0 3 6 2 3 5`);
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
