function seperateOddAndEven(arr) {
    /* Approach 1 || TC: O(N) SC: O(N)*/
    // Using two seperate array
    /* let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    console.log('even:', even);
    console.log('odd:', odd); */

    /* Approach 2 || TC: O(N) SC: O(1) */
    // Using Two pointers
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        /* If Even then increment if off odd stop */
        while (arr[start] % 2 === 0 && start < end) {
            start++;
        }

        /* If Odd then decrement if even then stop */
        while (arr[end] % 2 === 1 && start < end) {
            right--;
        }

        if (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }
    console.log(arr);
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    seperateOddAndEven(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`12 34 45 9 8 90 30`);
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
