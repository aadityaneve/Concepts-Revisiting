function detectPalindrome(arr) {
    // console.log('arr:', arr);
    // let arr = string.split('');

    let flag = true;
    if (arr.length === 1) {
        console.log('Possible!');
    } else if (arr.length === 3) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            if (!obj.hasOwnProperty(arr[i])) {
                obj[arr[i]] = 1;
            } else {
                obj[arr[i]]++;
            }
        }

        flag = true;
        if (obj[Object.keys(obj)[0]] === 2 && obj[Object.keys(obj)[1]] === 1) {
            console.log('Possible!');
        } else if (
            obj[Object.keys(obj)[1]] === 2 &&
            obj[Object.keys(obj)[0]] === 1
        ) {
            console.log('Possible!');
        } else {
            console.log('Not Possible!');
        }
    } else if (arr.length % 2 !== 0) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            if (!obj.hasOwnProperty(arr[i])) {
                obj[arr[i]] = 1;
            } else {
                obj[arr[i]]++;
            }
        }
        // console.log('obj:', obj);

        let odd = 1;
        for (let x in obj) {
            if (obj[x] % 2 !== 0) {
                if (odd === 0 || odd < 0) {
                    flag = false;
                    break;
                }
                odd--;
                // console.log('obj[x]:', obj[x]);
                // return false;
            }
        }
        // return true;
        if (flag === true) {
            console.log('Possible!');
        } else {
            console.log('Not Possible!');
        }
    } else {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            if (!obj.hasOwnProperty(arr[i])) {
                obj[arr[i]] = 1;
            } else {
                obj[arr[i]]++;
            }
        }
        // console.log('obj:', obj)

        for (let x in obj) {
            if (obj[x] % 2 !== 0) {
                // console.log('obj[x]:', obj[x]);
                // return false;
                flag = false;
                break;
            }
        }
        // return true;
        if (flag === true) {
            console.log('Possible!');
        } else {
            console.log('Not Possible!');
        }
    }

    /* let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    console.log('obj:', Object.keys(obj)[0])

    for (let x in obj) {
        if (obj[x] % 2 !== 0) {
            // console.log('obj[x]:', obj[x]);
            return false;
        }
    }
    return true; */
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split('');
        detectPalindrome(arr);
        /* if (ans === true) {
            console.log('Possible!');
        } else {
            console.log('Not Possible!');
        } */
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`8
    3
    jbh
    8
    dcgfggbi
    9
    efibeejhh
    7
    giggbgb
    2
    fg
    9
    ghccjjecd
    4
    eiig
    7
    gfhdhgj`);
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
