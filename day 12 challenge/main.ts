//question 1

let pizzas: string [] = ["pepperoni","margherita","hawaiian"]

pizzas.forEach(pizza =>{
    console.log(`i like ${pizza} pizza.`)
});
console.log("i really love pizza.")

//question 2

let animals: string []=["dog","cat","rabbit"];

animals.forEach(animal =>{
    console.log(`a ${animal} would make a great pet`);
});
console.log("any of these animals would make a great pet!");

//questin 3

function make_shirt(size: String, message: string) {
    console.log(`making ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt("medium", "code with Naveed")