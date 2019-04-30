// Developed for HackerRank's 10 Days of Javascript challenge
// A function which first prints of the individual vowels, and then the individual consonants of an input
// string.
function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
        "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    for (let char of s) {
        if(vowels.includes(char)) console.log(char);
    }
    for (let char of s) {
        if(consonants.includes(char)) console.log(char);
    }
}

vowelsAndConsonants("working on it right now");