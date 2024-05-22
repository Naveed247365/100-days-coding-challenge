var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ["asad", "asim", "faisal"];
console.log("great news! i found bigger dinner table.");
// adding more guests
guests.unshift("adnan");
guests.splice(guests.length / 2, 0, "rawab");
guests.push("jahanzaib");
guests.forEach(function (guest) {
    console.log("dear ".concat(guest, ", would you like to join me for dinner"));
});
//question 2
console.log("unfortunately, i can only invite two people for dinner");
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("sorry, ".concat(removedguest, ", i can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you are still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
//question 3 
var plase = ["pakistan", "india", "canada", "japan", "iran"];
console.log("original order", plase);
console.log("alphabetical order", __spreadArray([], plase, true).sort());
console.log("original order", plase);
console.log("reversed order", __spreadArray([], plase, true).sort().reverse());
console.log("original order", plase);
plase.reverse();
console.log("reversed order", plase);
plase.sort();
console.log("alphabetical order", plase);
plase.reverse();
console.log("reversed order", plase);
