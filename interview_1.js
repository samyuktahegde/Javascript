// function add(a, b) {
//     var result = a + b;
//     return result;
// }

// function subtract(a, b) {
//     console.log(result);
//     var result = a - b;
// }

// console.log(add(1, 2));
// subtract(2, 1);

// let x = function () {
//     if (true) {
//         console.log(v);
//         console.log(l); 
//         var v = 2;
//         let l = 1;
//     }
//     // console.log(v);
//     // console.log(l);
// }

// x();

const profile = {
    firstName: '',
    lastName: '',
    setName: function (name) {
        // let splitName = function (n) {
        let splitName = (n) => {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];

        }
        splitName(name);
    }
}

profile.setName('john doe');
console.log(profile.firstName);