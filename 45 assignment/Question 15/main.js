//Question no 15
var list = ["Muqeet", "Bilal", "Umer", "Usman"];
list.map(function (a) {
    console.log("Hello ".concat(a, ", I would like to invite you to join me for dinner tomorrow."));
});
var oldGuest = "Umer";
console.log("Unfotunately, ".concat(oldGuest, " is unable to attend dinner tomorrow"));
var newGuest = "Ali";
list[list.indexOf(oldGuest)] = newGuest;
console.log("Lets sent invitations again including my new guest");
list.map(function (a) {
    console.log("Hello ".concat(a, ", I would like to invite you to join me for dinner tomorrow."));
});
