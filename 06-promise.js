// promises solve the intricacies of working with callbacks, functions that receive other functions as parameters and
//execute them depending on whether cerain conditions happen or not

const anotherFunction = () => {     //main function
    return new Promise((resolve, reject)=>{     //Promise (all reserved words)
        if(true){           //true just to control the condition to be executed
            resolve('Heyyy!!');
        }else{
            reject('Whooops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))    //arrow function to return the response gotten from the promise
    .catch(err => console.log(err));        //arrow function to return the error gotten if the promise fails