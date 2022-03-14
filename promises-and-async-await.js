let arr = ['aditya', 'neve', 'ronit', 'house', 'car', 'computer', 'laptop'];

for (let i = 0; i < arr.length; i++) {
    let bool = arr[i].includes('ity');
    if (bool) {
        console.log(arr[i]);
        break;
    }
}

let element = arr.find((element) => {
    return element.includes('ity') ? element : null;
});
console.log('element:', element);

// Async/Await
async function test() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('done!');
        }, 1000);
    });

    let result = await promise;

    console.log(result);
}
test();
// Async/Await

// JS Promise Object
let myPromise = new Promise(function (resolve, reject) {
    //do something
    if (true) setTimeout(() => resolve(`success`), 3000);
    else reject(`error`);
    console.log('hiii');
    console.log('hiii');
});
myPromise.then(function () {
    console.log('byee');
    // Do something when Promise is successfull
});

myPromise.catch(function () {
    // Do somethingwhen Promise is unsuccessfull
});
// JS Promise Object
