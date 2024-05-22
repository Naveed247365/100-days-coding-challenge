//question 1: your own array

let transports: string []=["toyota corola","honda bike","shorab bicycle"];

transports.forEach(transports => {
    console.log(`i would like to own a ${transports}.`)
});

//question 2: guest list

let guest: string [] = ["asim","asad","faisal"];

guest.forEach(guest => {
    console.log(`${guest}, would you'd like to join me for dinner?`)
    
});

//question 3: changing guesting list

let unanleToAttend = "faisal";
console.log(`${unanleToAttend} can't make it to dinner`);

// replace guest

let new_guest = "adnan";
guest[guest.indexOf(unanleToAttend)]= new_guest;

//new invitations

guest.forEach(guest =>{
console.log(`dear ${guest}, would you like to join me for dinner?`)
}
)