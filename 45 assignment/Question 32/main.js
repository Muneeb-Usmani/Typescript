//Question no 32
var current_users = ["John", "Emily", "Ron", "Nick", "Josh"];
var new_users = ["Harry", "Denis", "Nick", "Roy", "John"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
