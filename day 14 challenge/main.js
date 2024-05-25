function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("artist one", "the frist album"));
console.log(make_album("artist two", "the sceond album"));
console.log(make_album("artist three", "the third album", 12));
//question 2: magitions
var magicians = ["alfa", "bravo", "charlie"];
function show_magicitions(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicitions(magicians);
// questions 3: great magitions
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians);
show_magicitions(magicians);
