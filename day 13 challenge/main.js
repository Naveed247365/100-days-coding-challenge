// question 1: large shirts
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("msking ".concat(size, " t-shirt with a massege \"").concat(message, "\" printed on it."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "dive into coding");
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("karachi");
describe_city("lahore");
describe_city("mumbai", "india");
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("dubai", "UAE"));
console.log(city_country("dhaka", "bangladash"));
