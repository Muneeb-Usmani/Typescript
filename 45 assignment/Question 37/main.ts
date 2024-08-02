// Question no 37

function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} sized shirt with the message "${message}" printed on it.`);
}

make_shirt(); 
make_shirt("medium");
make_shirt("small", "I Love Coding"); 