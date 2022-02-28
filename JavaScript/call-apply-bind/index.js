/* EX-1 START */
const kitchen = {
    name: 'kitchen',
    purpose: 'cook',
    cookFood(string1, string2) {
        console.log(`${string1} ${string2} Serving ${this.order} in 2 mins.`);
    },
};

const bedroom = {
    name: 'bedroom',
    purpose: 'sleep',
    order: 'magiee',
};

kitchen.cookFood.call(bedroom, 'Love', 'You');

kitchen.cookFood.apply(bedroom, ['Love', 'You']);

let x = kitchen.cookFood.bind(bedroom, 'Love', 'You');
x();
/* EX-1 END */

/* EX-2 START */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

function Student(name, age, subject) {
    Person.apply(this, [name, age]);
    this.subject = subject;
}

function Player(name, age, sport) {
    var x = Person.bind(this, name, age);
    x();
    this.sport = sport;
}

var teacher1 = new Teacher('Rahul', 26, 'Physics');
console.log('teacher1:', teacher1)

var student1 = new Student('Ronit', 20, 'Maths');
console.log('student1:', student1)

var player1 = new Player('MS', 35, 'Cricket');
console.log('player1:', player1)

/* EX-2 END */
