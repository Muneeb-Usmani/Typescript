//Question no 16
var updatedList = ["Muqeet", "Umer", "Usman"];
console.log("Hey guys, I just found a bigger dinner table and would like to invite some more friends");
updatedList.unshift("Bilal");
updatedList.splice(2, 0, "Noman");
updatedList.push("Moiz");
updatedList.map(function (a) {
    console.log("Hello ".concat(a, ", I would like to invite you to join me for dinner tomorrow."));
});
