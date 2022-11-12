// promises solve the intricacies of working with callbacks, functions that receive other functions as parameters and
//execute them depending on whether certain conditions happen or not

const anotherFunction = () => {     //main function
    return new Promise((resolve, reject)=>{     //Promise (all reserved words)
        if(true){           //true just to control the condition to be executed
            setTimeout(() => resolve('Async action done with 3.5 secs delay'), 3500);
            //resolve('Heyyy!!');
        }else{
            reject('Whooops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))    //arrow function to return the response gotten from the promise
    .catch(err => console.log(err));        //arrow function to return the error gotten if the promise fails