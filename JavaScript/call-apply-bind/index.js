let name = {
    firstName: 'Aditya',
    lastName: 'Neve',
    printFullName: function () {
        console.log(this.firstName, this.lastName);
    },
};

name.printFullName();
