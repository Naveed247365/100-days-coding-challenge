let guests: string [] = ["asad","asim","faisal"];

console.log("great news! i found bigger dinner table.");

// adding more guests

guests.unshift("adnan");
guests.splice(guests.length / 2, 0,
    "rawab");
guests.push("jahanzaib");

guests.forEach(guest => {
    console.log(`dear ${guest}, would you like to join me for dinner`)
});

//question 2

console.log("unfortunately, i can only invite two people for dinner");

while (guests.length > 2) {
    let removedguest = guests.pop();
    console.log(`sorry, ${removedguest}, i can't invite you to dinner.`)
}
guests.forEach(guest => {
    console.log(`dear ${guest}, you are still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);

//question 3 

let plase: string [] = ["pakistan","india","canada","japan","iran"]

console.log("original order",plase);

console.log("alphabetical order",[...plase].sort());

console.log("original order",plase);

console.log("reversed order",[...plase].sort().reverse());

console.log("original order",plase);

plase.reverse();
console.log("reversed order",plase);

plase.sort();
console.log("alphabetical order",plase);

plase.reverse();
console.log("reversed order",plase);