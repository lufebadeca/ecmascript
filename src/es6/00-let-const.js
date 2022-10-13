/*project initialization:
mkdir folder_name
npm init [-y for default config]
populate the questions and continue
after having created the JSON file, add "type": "module" for module compatibility 
*/

var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
//animal = 'cat';
console.log(animal);

const fruits = () =>{
    if (true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'banana';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();