//question 1
var magicians = ["alice", "david", "charis"];
function make_graet(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the great"));
    });
    return greatMagicians;
}
function show_magician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_graet(magicians.slice());
console.log("original magicitans");
show_magician(magicians);
console.log("great magicians:");
show_magician(greatMagicians);
//question 2
function make_sandwish() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwish with: ".concat(items.join(','), "."));
}
make_sandwish("ham", "cheese");
make_sandwish("avocado", "sprouts", "tomato");
make_sandwish("turkey", "lettuce", "mastard", "mayo");
//question 3
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("toyota", "corolla", ["color", "red"], ["year", "2020"]));
console.log(make_car("ford,", "diesta", ["color", "black"], ["sunroof", true]));
