//Question no 30

let usernames = ["user1","user2","user3","user4","admin"]

usernames.map((username)=>{
    if(username === "admin"){
        console.log("Hello admin, would you like to see a status report?");        
    }
    else{
        console.log(`Hello ${username}, thank you for logging in again`);
        
    }
})