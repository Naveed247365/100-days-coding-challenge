//question 1

let laptop = {
    make : "dell",
    model : "xps 15",
    year : 2021,
    describe :function() {
        console.log(`this laptop is a ${this.year} ${this.make} ${this.model}`);
    }
};
laptop.describe();

// question 2

let laptops = [
    {
        make:"dell",model:"xps 15",year:"2021"},
        {make:"apple",model:"macbook pro",year:"2020"},
        {make:"hp",model:"specte x360",year:"2021"}    
];
let [laptop1,laptop2] = laptops;
console.log(laptop1)
console.log(laptop2)

//question 3

let pricesSet1 = [1000,1500,2000];
let pricesSet2 = [1200,1600,1900];
let combinedPrices=[...pricesSet1,...pricesSet2].sort((a,b) => a - b);
console.log(combinedPrices);
