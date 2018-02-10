let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve(' Cleaned the room');
    });
};

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' Remove Garbage');
    });
};

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' Won Icecream');
    });
};

// cleanRoom().then(function (result) {
//     return removeGarbage(result);
// }).then(function (result) {
//     return winIcecream(result);
// }).then(function (result) {
//     console.log('Finished'+result);
// });

// Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
//     console.log('All finished');
// });

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
    console.log('One of them is finished');
});