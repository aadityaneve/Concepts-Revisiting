function gasStation(gas, cost) {

    let start = 0;
    let end = 1;
    let currentFuel = gas[0] - cost[0];
    while (start != end) {
        while (currentFuel < 0 && start != end) {
            let fuel = gas[start] - cost[start];
            currentFuel = currentFuel - fuel;
            start = (start + 1) % gas.length;
            if (start == 0) return -1;
        }
        currentFuel += gas[end] - cost[end];
        end = (end + 1) % gas.length;
    }
    if (currentFuel < 0) return -1;
    return start;

}

function runProgram(input) {
    input = input.trim().split('\n');
    let gas = input[1].trim().split(' ').map(Number);
    let cost = input[2].trim().split(' ').map(Number);
    let ans = gasStation(gas, cost);
    console.log(ans)
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
1 2 3 4 5
3 4 5 1 2`);
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
