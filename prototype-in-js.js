/* function createValue() {
    a = 2;
}
createValue();
console.log(a); */
// console.log(global)

/* const person = {
    name: 'Tommy',
};

const personTwo = Object.create(person);
console.log('personTwo:', personTwo.__proto__)
console.log(personTwo.hasOwnProperty(__proto__.name)); */

/* 
    defn: 
        The prototype is an object that is associated with every functions
        and objects by default in JavaScript, where function's prototype property 
        is accessible and modifiable and object's prototype property (aka attribute) 
        is not visible. Every function includes prototype object by default.
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showAge = function () {
    console.log(this.age);
};

const person = new Person('Aditya', 25);

person.__proto__.display = function () {
    console.log(this.name, this.age);
};

console.log(person.__proto__);

person.showAge();
person.display();

Array.prototype.aaaa = 100;
let arr = [];
console.log(arr.aaaa);

let newArr = new String(5);
let newArr2 = String(5);
console.log(typeof newArr);
console.log(newArr);
console.log(typeof newArr2);

let finalArr = [];
(finalArr.name = 'Sourav'), console.log(finalArr);

if (1 > 0) {
    console.log(true);
    console.log('hii');
}

let fn = new Function(
    `a`,
    `b`,
    `c`,
    `
    return a+b+c
`
);
console.log(fn(1, 2, 3));
