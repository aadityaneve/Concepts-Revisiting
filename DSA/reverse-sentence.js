/* Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

var arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
'm', 'a', 'k', 'e', 's', '  ',
'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]  

 output [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
 */

let arr = [
    'p',
    'e',
    'r',
    'f',
    'e',
    'c',
    't',
    '  ',
    'm',
    'a',
    'k',
    'e',
    's',
    '  ',
    'p',
    'r',
    'a',
    'c',
    't',
    'i',
    'c',
    'e',
];

function swap(arr, i, j) {
    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
}

function sentenceReverse(arr) {
    swap(arr, 0, arr.length - 1);

    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '  ') {
            swap(arr, k, i - 1);
            k = i + 1;
        }
    }
    swap(arr, k, arr.length - 1);
}
sentenceReverse(arr);
console.log('arr:', arr.join(' '));
