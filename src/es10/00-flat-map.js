//flat 
const array = [1,1,2,3,4,[1,3,5,6,[1,2,4]]];
console.log(array.length);

console.log(`Flat by 1 level: ${a}`, array.flat(1).length);
console.log(array.flat(1));
console.log(array.flat(2).length);
console.log(array.flat(2));

//flat map
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v,v*2]));
//transforms the array to each value followed by its multiplication by 2