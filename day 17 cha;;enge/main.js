// question 1
// defines a function that accepts maltiple hobbies aa arguments
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // loops through each hobby in the array
    hobbies.forEach(function (hobby) {
        // logs a statement for each hobby
        console.log("i enjoy ".concat(hobby, "."));
    });
}
// calls the funciton with three hobbies
logHobbies("reading", "coding", "gaming");
//question 2
// using tamplate literals to define a maltiline string
var myIdealDay = "my ideal day would involve:\n1. waking up early and going for a jog.\n2. spending a few hours coding on a personal project.\n3. ending the day reading a good book.";
// logging the multiline string to the console 
console.log(myIdealDay);
// question 3
//original function for culculating the area of reactangle
function calculateArea(width, height) {
    return width * height;
}
// refactored into an errow function 
var calculateAreaArrow = function (width, height) { return width * height; };
// example usage of arrow function
console.log(calculateAreaArrow(12, 12));
