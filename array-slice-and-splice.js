/* [1,2,3,4,5,[6,[7,8,9]]] */

/* let arr = [1, 2, 3, 4, 5,
     [6, 
        [7, 8, 9]
    ]
    ]; */
let arr = [1, 2, 3, 4, 5];

// arr.splice => startIndex, deleteCount, insertElements()
// modifies in original array
console.log(arr.splice(1, 2, 99));
console.log(arr)

// slice => copy and return an object
// does not modify original array
// slice => startIndex, endIndex,
console.log(arr.slice(0, 3))
console.log(arr)


/* let string = "a b c d";
console.log(string.split(' '))
console.log(arr.join('->')) */

/* let newArr = [];

function flatenAnArray(arr) {
  for (let j = 0; j < arr.length; j++) {
    // console.log('arr[j]:', arr[j])
    if (typeof arr[j] == "number") {
      newArr.push(arr[j]);      
    } else {
      flatenAnArray(arr[j]);
    }
  }
}
flatenAnArray(arr);
console.log(newArr); */

/* function flatIt(arr) {
    if (arr.length === 0) {
        // console.log(arr);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr.shift());
        } else {
            flatIt(arr);
        }
    }
}
flatIt(arr); */

// console.log('newArr:', newArr);
