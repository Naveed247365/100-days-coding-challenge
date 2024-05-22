//question 1: your own array
var transports = ["toyota corola", "honda bike", "shorab bicycle"];
transports.forEach(function (transports) {
    console.log("i would like to own a ".concat(transports, "."));
});
//question 2: guest list
var guest = ["asim", "asad", "faisal"];
guest.forEach(function (guest) {
    console.log("".concat(guest, ", would you'd like to join me for dinner?"));
});
//question 3: changing guesting list
var unanleToAttend = "faisal";
console.log("".concat(unanleToAttend, " can't make it to dinner"));
// replace guest
var new_guest = "adnan";
guest[guest.indexOf(unanleToAttend)] = new_guest;
//new invitations
guest.forEach(function (guest) {
    console.log("dear ".concat(guest, ", would you like to join me for dinner?"));
});
