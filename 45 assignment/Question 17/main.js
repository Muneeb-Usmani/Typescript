//Question no 17
var newList = ["Bilal", "Muqeet", "Umer", "Usman", "Moiz"];
console.log("Unfortunately, I can only invite two persons for the dinner");
var uninvited = newList.pop();
console.log("Hello ".concat(uninvited, ", you are not invited to the dinner"));
uninvited = newList.pop();
console.log("Hello ".concat(uninvited, ", you are not invited to the dinner"));
uninvited = newList.pop();
console.log("Hello ".concat(uninvited, ", you are not invited to the dinner"));
newList.map(function (a) {
    console.log("Hello ".concat(a, ", I would like to invite you to join me for dinner tomorrow."));
});
newList.pop();
newList.pop();
newList.splice(0, newList.length);
console.log(newList);
