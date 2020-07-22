const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    // make word case insensitive
    const lowerCased = this.word.toLowerCase()
    // turn word into an array of letters
    const arrayOfLetters = lowerCased.split('');
    // loop over letters and check if a letter is equal to the next letter in line
    for (let i=0; i < arrayOfLetters.length -1; i++) {
        for (let j = i + 1; j < arrayOfLetters.length; j++) {
            if (arrayOfLetters[i] === arrayOfLetters[j]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = IsogramFinder;
