// question 1: large shirts

function make_shirt(size:string = "large" , message:string = "i love typescript") {
    console.log(`msking ${size} t-shirt with a massege "${message}" printed on it.`)
   
}
make_shirt();
make_shirt("medium");

make_shirt("small", "dive into coding")

function describe_city(city:string, country:string = "pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("karachi");
describe_city("lahore");
describe_city("mumbai", "india");

function city_country(city:string, country:string): string {
    return `${city}, ${country}`;
}

console.log(city_country("karachi", "pakistan"));
console.log(city_country("dubai", "UAE"));
console.log(city_country("dhaka", "bangladash"));