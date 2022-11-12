const user = { username: 'Fulano', age: 34, contry: 'CO'};
const { username, ...values} = user;
console.log(username);
console.log(values);