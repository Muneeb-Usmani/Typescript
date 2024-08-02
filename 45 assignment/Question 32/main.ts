//Question no 32

let current_users = ["John","Emily","Ron","Nick","Josh"]
let new_users = ["Harry","Denis","Nick","Roy","John"]

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});