//question 1

//sets up details about smartphone 

let smartphone = {
    make: "samsung",
    model: "galaxy a51",
    specs: {
        Storage: "128gb",
        screenSize: "5.9 inches",
        bettryTime: "18 hours"
    }
};
//shows that we've set up about the smartphone
console.log(smartphone);

//question 2

//a list showing a programmer's skills in details 
let developerSkills = {
    lunguages: ["javascript","typescript","pythan"],
    frameworks: ["react","anguler","vue"],
    tools: ["git","webpack","docker"]
};
// greating specific skills from the list

let {lunguages,frameworks,tools} = developerSkills;

// show skills from each category 
console.log(`lunguages: ${lunguages[0]}, framework: ${frameworks[0]}, tools: ${tools[0]}`);

//question 3

// a way to make a flexible list 

function createObjectWithDynmicKey (key:string, value: string) {
    let dynmicObject = {};
//setting up a section in the list with changeable name
dynmicObject[key] = value;
return dynmicObject;
}

// using the flexible list setup for a user perference

let userPreference = createObjectWithDynmicKey("theme","dark");

// showing user choice 
console.log(userPreference)