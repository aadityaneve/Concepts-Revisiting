function isPalindrome(s) {
    let low = 0,
        high = s.length - 1;
    while (low <= high) {
        if (s[low] !== s[high]) return false;
        low++;
        high--;
    }
    return true;
}
function masaiPalindromicSubstring(s) {
    let maxCount = Number.MIN_VALUE;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let temp = s.substr(i, j - i + 1);
            if (isPalindrome(temp) && temp.length > maxCount) {
                maxCount = temp.length;
                res = temp;
            }
        }
    }
    return res.length;
}

function runProgram(input) {
    let ans = masaiPalindromicSubstring(input.trim());
    console.log(ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`thisracecarisgood`);
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
