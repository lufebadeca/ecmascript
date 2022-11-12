//to create an object out of an array (of arrays)

const entries =  new Map([["name", "Oscar"], ["age", 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));

//easier way

const array = [["name", "Oscar"], ["age", 34]];
console.log(array);
console.log(Object.fromEntries(array));