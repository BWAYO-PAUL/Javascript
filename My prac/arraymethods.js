  let catFamily = ['lion','cheetah','leopard','cat']
//   length = catFamily.length
console.log(catFamily.length);

// Access elements
console.log(catFamily[1]);

// Array modification
catFamily[catFamily.length-1] = 'tiger'
console.log(catFamily)

// Change lion to jaguar
catFamily[0] = 'jaguar'
console.log(catFamily);

// Add a new value in the end of an array
catFamily.push('panther')
console.log(catFamily);

// Adding a new value at the beginning of an array
catFamily.unshift('puma')
console.log(catFamily);

// Remove a value at the end of an array
catFamily.pop()
console.log(catFamily);

// Remove a value at the beginning of an array 
catFamily.shift()
console.log(catFamily);

// IndexOf arrays
console.log(catFamily.indexOf('cheetah'));

// Print cheetah
console.log(catFamily[catFamily.indexOf('cheetah')]);