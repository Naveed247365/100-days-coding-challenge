// question: 1

let age: number = 30;

if (age < 2) {
console.log("the person is a beby.");
} else if (age < 4) {
    console.log("the person is a toddler.");
} else if (age < 13) {
    console.log("the person is a kid.");
} else if (age < 20) {
    console.log("the person is a teenager.");
} else if (age < 65) {
    console.log("the person is a adult.")
} else {
    console.log("the person is a elder.");
}

// question 2 fav fruit

let friut_name: string [] = ["apple","banana","mango"];

if (friut_name.includes("banana")){
    console.log("you really like banana!");
}

if (friut_name.includes("apple")) {
    console.log("you really like apple!");
}

if (friut_name.includes("mango")) {
    console.log("you really like mango!");
}

//question 3 hello admin

let user_names: string []= ["admin","user1","user2"];

user_names.forEach(user_names => {
    if (user_names === "admin") {
        console.log("hello admin, would you like to see a status report?");
    } else {
        console.log(`hello ${user_names}, thank you for logging in again.`);
    }
});

