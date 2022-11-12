//Creates a new promise that comprises several other pomises within an array
const promise1 = new Promise( (resolve, reject) => reject("Rechazado") );
const promise2 = new Promise( (resolve, reject) => resolve("Ok, 2") );
const promise3 = new Promise( (resolve, reject) => resolve("Ok, 3") );

Promise.allSettled( [promise1, promise2, promise3] )
    .then(response => console.log(response) );