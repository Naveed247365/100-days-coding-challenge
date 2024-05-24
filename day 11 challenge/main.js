//question 1: no users
var usernames = [];
if (usernames.length === 0) {
    console.log("we need to find some users!");
}
else { }
// question 2: checking usernames
var current_users = ["user1", "admin", "user3"];
var new_users = ["user1", "user2", "admin"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, ". will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
//question 3: ordinal numbers
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(function (numbers) {
    var suffix = "th";
    if (numbers === 1) {
        suffix = "st";
    }
    else if (numbers === 2) {
        suffix = "nd";
    }
    else if (numbers === 3) {
        suffix = "rd";
    }
    console.log("".concat(numbers).concat(suffix));
});
