// let x = function () {
//     console.log('I am called from inside a function');
// }

// let y = function (callback) {
//     console.log('Do some thing');
//     callback();
// }

// y(x);
let add = function (a, b) {
    return a + b;
}

let multiply = function (a, b) {
    return a * b;
}

let doWhatever = function (a, b) {
    console.log(`Here are your two numbers ${a}, ${b}`);
}
// let calc = function (num1, num2, calcType) {
//     if (calcType === 'add') {
//         return num1 + num2;
//     }
//     else if (calcType === 'multiply') {
//         return num1 * num2;
//     }
// };

let calc = function (num1, num2, callback) {
    if (typeof callback == 'function') {
        return callback(num1, num2);
    }
};


// console.log(calc(2, 3, doWhatever));

console.log(calc(2, 3, function (a, b) {
    return a - b;
}));