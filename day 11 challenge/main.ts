//question 1: no users

let usernames: string[]=[];

if (usernames.length === 0) {
    console.log("we need to find some users!");
} else {} 

// question 2: checking usernames

let current_users:string []=["user1","admin","user3"];

let new_users:string []=["user1","user2","admin"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase()===newUser.toLowerCase())) {
        console.log(`${newUser}. will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available`);
    }
})

//question 3: ordinal numbers

let number: number []=[1,2,3,4,5,6,7,8,9];

number.forEach(numbers => {
    let suffix = "th";
    if (numbers === 1) {
        suffix = "st";
    } else if (numbers === 2) {
        suffix = "nd";
    } else if (numbers === 3) {
        suffix = "rd";
    } 
    console.log(`${numbers}${suffix}`);
});