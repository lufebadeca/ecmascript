//to validate the existence of certain object that may be deleted or not, retrieving 'undefined" instead of error

const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.gndx.country);
console.log(users?.gndx?.aquiles?.rams);
console.log(users.aquiles);