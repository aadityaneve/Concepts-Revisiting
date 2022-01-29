function count(arr) {
    let obj = {};
    for(let x of arr){
        if (!obj.hasOwnProperty(x)) {
            obj[x] = 1;
        } else {
            obj[x]++;
        }
    }

    for (let x in obj) {
        console.log(x + ' ' + obj[x]);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    let arr = [];
    for (let i = 0; i < +input[0]; i++) {
        let string = input[++lines].trim();
        arr.push(string)
        arr.sort();
    }
    count(arr);

    
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`7
  masai
  school
  masai
  aditya
  aditya
  neve
  neve`);
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
