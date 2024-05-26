
//question 1
let magicians: string[]=["alice","david","charis"];

function make_graet(magicians:string[]): string[] {
        let greatMagicians = [];
        magicians.forEach((magician) => {
            greatMagicians.push(`${magician} the great`);
        });
        return greatMagicians;
    }

    function show_magician(magicians:string[]) {
        magicians.forEach((magician) =>{
            console.log(magician);
        });
    }

    let greatMagicians =  make_graet(magicians.slice());
    console.log("original magicitans");
    show_magician(magicians);
    console.log("great magicians:");
    show_magician(greatMagicians);

    //question 2

        function make_sandwish(...items:string[]) {
            console.log(`making a sandwish with: ${items.join(',')}.`);
        }
        make_sandwish("ham","cheese");
        make_sandwish("avocado","sprouts","tomato");
        make_sandwish("turkey","lettuce","mastard","mayo";)
    
    //question 3
    function make_car(manufacturer:string,model:string,...options:[string,any][]):
    object {
        let car = {manufacturer,model};
        options.forEach(([key,value]) =>
        car[key] = value);
        return car;
    }
    console.log(make_car("toyota","corolla",["color","red"],["year","2020"]));
    console.log(make_car("ford,","fiesta",["color","black"],["sunroof",true]));