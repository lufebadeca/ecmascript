const button = document.querySelector('#btn');

button.addEventListener('click', async function(){
    const module = await import('./module.js');
    console.log(module);
    module.greet();
} )

//async anonymous function, why to await an import?
//the idea od a DYNAMIC IMPORt is that different pieces of code are to be loaded into the page at certain moments
//making the project faster
//what is then module? module inherits the hello method 