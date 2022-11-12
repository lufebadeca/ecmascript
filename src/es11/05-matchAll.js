const myRegex = /\b(Apple)+\b/g;

const myString = 'Apple, banana, Kiwi, Apple, Orange, pineapple, watermelon, grape, strawberry';

for (const match of myString.matchAll(myRegex)){
    console.log(match);
}

//Evaluates the regex criteria in the selected string and returns matches...
//(aparently, this methiod would be a generator, since it's iterable)