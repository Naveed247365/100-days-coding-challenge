// question 1

// defines a function that accepts maltiple hobbies aa arguments

function logHobbies(...hobbies:string[]) {
    // loops through each hobby in the array
    hobbies.forEach(hobby => {
        // logs a statement for each hobby
        console.log(`i enjoy ${hobby}.`);
    });
}

// calls the funciton with three hobbies
logHobbies("reading","coding","gaming");

//question 2

// using tamplate literals to define a maltiline string
let myIdealDay = `my ideal day would involve:
1. waking up early and going for a jog.
2. spending a few hours coding on a personal project.
3. ending the day reading a good book.`;
// logging the multiline string to the console 
console.log(myIdealDay)

// question 3

//original function for culculating the area of reactangle

function calculateArea(width:number,height:number): number {
    return width * height;
}

// refactored into an errow function 
let calculateAreaArrow =(width:number,height:number): number => width * height;

// example usage of arrow function
console.log(calculateAreaArrow(12,12));