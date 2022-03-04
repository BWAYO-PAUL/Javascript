// swapping in javascript.
// a = 2,
// b = 3,
// temp = a
// a = b,
// b = temp
// console.log(a);
// console.log(b);

// // swap in array elements
// let array1 = [1,2,3,4,]
// let array2 = [8,9,10,14]
// temp = array1,
// array1 = array2,
// array2 = temp,
// console.log(array1);
// console.log(array2);
// console.assert(JSON.stringify(array1) === JSON.stringify(array2),'wrong result');

// Destructuring Array
let c = 13
let d = 14
[c, d] = [d, c]
console.log(c);
console.log(d);

// Destructuring Assignment Array Matching
let a = 5, b = 6;
[a, b] = [b, a];
console.log(a);

// swapping array elements
a = [1,2,3,4],b = [5,6,7,8]
(4)[5,6,7,8]
[a,b] = [b, a]
(2) [Array(4),Array(4)]
0 : (4)[5,6,7,8]
1:(4)[1,2,3,4]
length:2
[[prototype]]:Array(0) 