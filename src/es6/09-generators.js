function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Oscar', 'David','Ulises', 'Jennifer']);
console.log(it.next().value);       //prints first member of the array
console.log(it.next().value);       //upon new execution, it remembers and prints the second value of the array
console.log(it.next().value);
console.log(it.next().value);
