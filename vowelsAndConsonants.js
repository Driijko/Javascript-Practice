function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
        "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    for (char of s) {
        if(vowels.includes(char)) console.log(char);
    }
    for (char of s) {
        if(consonants.includes(char)) console.log(char);
    }
}

vowelsAndConsonants("working on it right now");