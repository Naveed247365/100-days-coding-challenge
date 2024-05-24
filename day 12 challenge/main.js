//question 1
var pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("i like ".concat(pizza, " pizza."));
});
console.log("i really love pizza.");
//question 2
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("a ".concat(animal, " would make a great pet"));
});
console.log("any of these animals would make a great pet!");
//questin 3
function make_shirt(size, message) {
    console.log("making ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it"));
}
make_shirt("medium", "code with Naveed");
