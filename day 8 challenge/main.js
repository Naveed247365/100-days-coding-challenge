//intentional error
var friends = ["asad", "asim", "faisal"];
console.log(friends[3]);
friends[2] = "tawab";
var car = "toyota";
//question 2
console.log("is car == 'toyota'? i predict true.");
console.log(car == "toyota");
console.log("is car == 'subaru'? i predict false.");
console.log(car == "subaru");
var color = "black";
console.log("is color == 'black'? i predict true");
console.log(color == "black");
console.log("is color == 'red'? i predict false");
console.log(color == "red");
var country = "pakistan";
console.log("is country == 'pakistan'? i predict true");
console.log(country == "pakistan");
console.log("is country == 'india'? i predict false");
console.log(country == "india");
var city = "karachi";
console.log("is city == 'karachi'? i predict true");
console.log(city == "karachi");
console.log("is city == 'lahore'? i predict false");
console.log(city == "lahore");
var fruit = "apple";
console.log("is fruit == 'apple'? i predict true");
console.log(fruit == "apple");
console.log("is fruit == 'oringe'? i predict false");
console.log(fruit == "oringe");
//question 3
// equality with strings
console.log("testing equality with strings:");
console.log("apple" == "apple");
console.log("apple" == "Apple");
// using the lower case function
console.log("testing with lower case");
console.log("Apple".toLowerCase() == "apple");
//numerical tests
console.log("testing numerical");
console.log(10 > 5);
console.log(2 < 1);
//tessting "and" and "or" operators
console.log("test with `and` and `or`:");
console.log(true && false);
console.log(true, false);
//test whether an item is in a array
var fruits = ["apple", "orange", "banana"];
console.log("is `apple` in fruits?");
console.log(fruits.includes("apple"));
//test whether an items is not in a array
console.log("is `cherry`not in a array");
console.log(!fruits.includes("cherry"));
