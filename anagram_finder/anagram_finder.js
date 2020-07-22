const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const sortedWord = this.word.toLowerCase().split('').sort().join('');
    return otherWords.filter(word => {
        if (word != this.word) {
        return word.toLowerCase().split('').sort().join('') === sortedWord
        }
    });
}

module.exports = AnagramFinder;
