let getName = () => {
    return 'Fazla Rabbi';
}
let getAge = () => {
    return '23';
}
const cgpa = 3.92;

// exports.result = cgpa;
// exports.getName = getName;
// exports.getAge = getAge;

module.exports = {
    getName: getName,
    getAge: getName,
    result: cgpa
}