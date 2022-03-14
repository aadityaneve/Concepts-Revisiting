var array = [
    { id: 1, date: 'Mar 12 2012 10:00:00 AM' },
    { id: 2, date: 'Mar 8 2012 08:00:00 AM' },
    { id: 2, date: 'Mar 8 2012 07:00:00 AM' },
    { id: 2, date: 'Mar 9 2012 08:00:00 AM' },
    { id: 2, date: 'Mar 10 2012 08:00:00 AM' },
];

let click = true;

array.sort((a, b) => {
    return click === true
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
});

// console.log(array);

let arr = [1, 2, 3, 4, 5];

function diameter(num) {
    return 2 * num;
}

/* function calculate(arr, logic) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(logic(arr[i]));
    }
    return resultArr;
}

console.log(calculate(arr, diameter)); */

Array.prototype.calculate = function (logic) {
    let resultArr = [];
    for (let i = 0; i < this.length; i++) {
        resultArr.push(logic(this[i]));
    }
    return resultArr;
};

console.log(arr.calculate(diameter));
