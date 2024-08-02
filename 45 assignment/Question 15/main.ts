//Question no 15

let list=["Muqeet","Bilal","Umer","Usman"]

list.map((a)=>{
    console.log(`Hello ${a}, I would like to invite you to join me for dinner tomorrow.`);
});

let oldGuest = "Umer";
console.log(`Unfotunately, ${oldGuest} is unable to attend dinner tomorrow`);

let newGuest ="Ali";
list[list.indexOf(oldGuest)] = newGuest
console.log("Lets sent invitations again including my new guest");


list.map((a)=>{
    console.log(`Hello ${a}, I would like to invite you to join me for dinner tomorrow.`);
});