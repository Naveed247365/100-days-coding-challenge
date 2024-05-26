//question 1
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop = {
    make: "dell",
    model: "xps 15",
    year: 2021,
    describe: function () {
        console.log("this laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    }
};
laptop.describe();
// question 2
var laptops = [
    {
        make: "dell", model: "xps 15", year: "2021"
    },
    { make: "apple", model: "macbook pro", year: "2020" },
    { make: "hp", model: "specte x360", year: "2021" }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
//question 3
var pricesSet1 = [1000, 1500, 2000];
var pricesSet2 = [1200, 1600, 1900];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
