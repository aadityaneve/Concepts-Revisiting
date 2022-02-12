function precedence(operator) {
    switch (operator) {
        case '@':
        case '(':
        case ')':
            return 1;
        case '+':
        case '-':
            return 2;
        case '/':
        case '*':
            return 3;
        case '^':
            return 1;
        default:
            return 0;
    }
}

function isOperator(operator) {
    if (
        operator == '+' ||
        operator == '-' ||
        operator == '*' ||
        operator == '/' ||
        operator == '%' ||
        operator == '(' ||
        operator == ')'
    )
        return true;
    return false;
}

function isLowerPrecedence(operator, operator) {
    if (precedence(operator) <   precedence(operator)) return true;
    return false;
}

function infixToPostfix(infix) {
    let stack = [];
    let result = '';

    for (let i = 0; i < infix.length; i++) {
        if (!isOperator(infix[i])) {
            result += infix[i];
        } else {
            if (infix[i] === ')') {
                while (stack[stack.length - 1] !== '(') {
                    result += stack.pop();
                }
            }
            if (stack.length === 0) {
                stack.push(infix[i]);
            } else {
                while (
                    stack.length !== 0 &&
                    isLowerPrecedence(infix[i], stack[stack.length - 1])
                ) {
                    result += stack.pop();
                }
                stack.push(infix[i]);
            }
        }
    }

    while (stack.length !== 0) {
        result += stack.pop();
    }

    return result;

    // ab+c-def-*g/+hij/*+
}

function runProgram(input) {
    let infix = input.trim();
    let ans = infixToPostfix(infix);
    console.log(ans);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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
