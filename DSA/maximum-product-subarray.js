function maximumProductSubarray(arr) {
    let minVal = arr[0];
    let maxVal = arr[0];

    let maxProduct = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            [maxVal, minVal] = [minVal, maxVal];
        }

        maxVal = Math.max(arr[i], maxVal * arr[i]);
        minVal = Math.min(arr[i], minVal * arr[i]);

        maxProduct = Math.max(maxProduct, maxVal);
    }
    return maxProduct;

    /* let product = -1;
    let currentProduct = 1;
    for (let i = 0; i < arr.length; i++) {
        currentProduct *= arr[i];
        // console.log('currentProduct:', currentProduct)
        if (currentProduct > product) {
            product = currentProduct;
        }
        if (currentProduct < 0) {
            currentProduct = 0;
        }
    }
    console.log(product); */

    // let elements = [];
    /* let maxProduct = -1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let product = 1;
            for (var k = i; k <= j; k++) {
                product *= arr[k];
            }
            if (maxProduct < product) {
                // elements = [];
                maxProduct = product;
                // console.log('product:', product)
                // elements.push(...arr.slice(i, k));
            }
        }
    }
    // console.log('elements:', elements);
    console.log(Math.abs(maxProduct)) */
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        let ans = maximumProductSubarray(arr);
        console.log(ans);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
    3
    -3 0 -2
    4
    4 5 -1 2`);
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
