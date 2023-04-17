let person = {
    firstName: 'Fazla',
    lastName: 'Rabbi',
    age: 22,
    email: 'shahedrabbi955@gmail.com',
    address: {
        city: 'Dhaka',
        zipcode: 1732
    },
    getBirthYear: function() {
        return 1999 - this.age;
    }
}

let value = person;
console.log(value.firstName);


console.log(person['firstName']);
console.log(person['lastName']);
console.log(person.age);
console.log(person.address.zipcode);

value = person.getBirthYear();
console.log(value);


