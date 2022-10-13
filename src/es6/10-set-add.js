//Set is a data structure similar to arrays, but only for lists with non-repeated values
const myList = new Set();

myList.add('item 1');
myList.add('item 2').add('item 3');
myList.add('item 4');

console.log(myList);

//Deleting repeated values of an array using Set
const array = [1, 1, 2, 2, 3, 4, 4, 5];

const sinRepetidos = [ ... new Set(array)]; //spread operator propagates the Set into a new array, the Set does not allow repeated.
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]