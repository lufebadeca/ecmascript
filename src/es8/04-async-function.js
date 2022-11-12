//The promise is a set of instructions meant to be executed at certain moment of the code execution, and has to be awaited to
//without stopping the execution of the code

const asyncFunct = () => {
    return new Promise( (resolve, reject) => {
        (true)      //ternary operator to replace the classic if:
        ? setTimeout(() => resolve('Async action done with 3.5 secs delay'), 3500)   //if true sentence, resolve if for the promise
        : reject(new Error("Error ocurred"));                 // else sentence, reject is for the promise    
    });
}

//Async and await are two reserved words for JS asyncronism handling

//this new function receives async and await as parameters to execute the above promise asyncronously
const handlerFunction = async () => {        //async determines hat the function will wait for something and will keep working until its completed
    const promiseResult = await asyncFunct();       //await tells that a following promise is to be awaited until its completion
    console.log(promiseResult);                     //the variable saved the result of 'resolving' the promise and is shown in this line
    console.log("Hello, I'm the handling function");    //the rest of handler function will then execute only after the promise is completed
}

console.log('Before');
handlerFunction();
console.log("After");
