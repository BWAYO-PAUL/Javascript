const info1 = {
    name: 'Chuol',
    age: 26,
    
    
}
let newAge = 'age'
info1.age =27
console.log(info1);
 
const info2 = {
    name: 'Chuol',
    age: 27,

}
console.assert(JSON.stringify(info1)===JSON.stringify(info2),'wrong result');