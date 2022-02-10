let promise1 = new Promise((resolve, reject) => {
    resolve('Promise1 resolved');
});
let promise2 = new Promise((resolve, reject) => {
    resolve('Promise2 resolved');
});
let promise3 = new Promise((resolve, reject) => {
    resolve('Promise3 resolved');
});

Promise
    .all([promise1, promise2, promise3])
    .then((message) => {
        console.log('This is in the then ' + message);
    })
    .catch((message) => {
        console.log('This is in the catch ' + message);
    });
