/* 

    A Constructor function is a function that
    initialize an object.

*/

function Circle(radius) {
    this.radius = radius;
    this.diameter = radius * 2;
    this.circleDetails = function () {
        console.log(this.radius, this.diameter);
    };
}

var circle = new Circle(5);

console.log('circle:', circle);

circle.circleDetails();
