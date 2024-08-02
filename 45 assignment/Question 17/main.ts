//Question no 17

let newList=["Bilal","Muqeet","Umer","Usman","Moiz"]

console.log("Unfortunately, I can only invite two persons for the dinner");

let uninvited = newList.pop()
console.log(`Hello ${uninvited}, you are not invited to the dinner`);

uninvited = newList.pop()
console.log(`Hello ${uninvited}, you are not invited to the dinner`);

uninvited = newList.pop()
console.log(`Hello ${uninvited}, you are not invited to the dinner`);

newList.map((a)=>{
    console.log(`Hello ${a}, I would like to invite you to join me for dinner tomorrow.`);
});

newList.pop();
newList.pop();

newList.splice(0, newList.length);
console.log(newList);