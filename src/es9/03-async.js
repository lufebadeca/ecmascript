//generator with await (async) functionalities
async function* myAsyncGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = myAsyncGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayOfNames( ['Oscar', 'david', 'Aquiles', 'Eneas'] );
console.log('After');