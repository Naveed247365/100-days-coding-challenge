//question 1
//sets up details about smartphone 
var smartphone = {
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
var developerSkills = {
    lunguages: ["javascript", "typescript", "pythan"],
    frameworks: ["react", "anguler", "vue"],
    tools: ["git", "webpack", "docker"]
};
// greating specific skills from the list
var lunguages = developerSkills.lunguages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// show skills from each category 
console.log("lunguages: ".concat(lunguages[0], ", framework: ").concat(frameworks[0], ", tools: ").concat(tools[0]));
//question 3
// a way to make a flexible list 
function createObjectWithDynmicKey(key, value) {
    var dynmicObject = {};
    //setting up a section in the list with changeable name
    dynmicObject[key] = value;
    return dynmicObject;
}
// using the flexible list setup for a user perference
var userPreference = createObjectWithDynmicKey("theme", "dark");
// showing user choice 
console.log(userPreference);
