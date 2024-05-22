//question 1: adding comments

// naveed
//this message print a personal message;

let myName: string = "Naveed";
console.log(`Hello ${myName}, would you like to learn some typescript today?`);

//question 2: names

let Frinds_name: string [] = ["asad","asim","faisal"];

for (let i = 0; i <Frinds_name.length; i++) {
    console.log(Frinds_name[i]);
}

//question 3: greetings

let names: string [] = ["asad","asim","faisal"]

for (let name of names) {
    console.log(`hello ${name}, would you like to learn some typescript today?`)
}