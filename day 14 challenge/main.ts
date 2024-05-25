function make_album(artist:string, title:string, tracks?:number) {
    let album = {artist, title};
    if (tracks) {
        album[`tracks`] = tracks;
    }
    return album;
}

console.log(make_album("artist one", "the frist album"));
console.log(make_album("artist two", "the sceond album"));
console.log(make_album("artist three", "the third album", 12));

//question 2: magitions

let magicians: string[] = ["alfa","bravo","charlie"];

function show_magicitions(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicitions(magicians);

// questions 3: great magitions

function make_great(magicians:string[]) {
    for (let i = 0; i< magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}

make_great(magicians);
show_magicitions(magicians);