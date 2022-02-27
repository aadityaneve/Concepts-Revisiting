/* let counter = 0;
const getData = () => {
    console.log('Fetching Data...', counter++);
};

let timer;
const debounce = (main, delay) => {
    if (timer) {
        clearInterval(timer);
    }

    timer = setTimeout(() => {
        main();
    }, delay);
}; */

// debounce(getData, 1000);

let counter = 0;
const getData = () => {
    console.log('Fetching Data....', counter++);
};

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;

        clearInterval(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, delay);
    };
};

const betterFunction = debounce(getData, 1000);
