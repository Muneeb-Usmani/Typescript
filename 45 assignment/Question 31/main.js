//Question no 31
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
usernames.map(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again"));
    }
});
