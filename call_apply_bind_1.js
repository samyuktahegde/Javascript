var obj = { num: 2 };

// var obj2 = { num: 5 };

var addToThis = function (a, b, c) {
    return this.num + a + b + c;
};

// console.log(addToThis.call(obj, 1, 2, 3));  //functionname.call(object, functionarguments);

var arr = [1, 2, 3];

// console.log(addToThis.apply(obj, arr));

// console.log(addToThis.apply(obj2, arr));

// console.log(addToThis.bind(obj, arr));

var bound = addToThis.bind(obj);

// console.dir(bound);

console.log(bound(1,2,3));

