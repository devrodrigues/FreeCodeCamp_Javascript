function findLongestWordLength(str) {
    let words = str.split(' ');
    let letters = 1;
    
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > letters){
            letters = words[i].length;
        }
    }

    return letters;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));