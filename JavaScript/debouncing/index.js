let counter = 0;
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
};

// debounce(getData, 1000);
