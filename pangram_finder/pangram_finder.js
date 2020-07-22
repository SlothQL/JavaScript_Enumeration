const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const lowerCasePhrase = this.phrase.toLowerCase();
  const isIncluded = (letter) => lowerCasePhrase.includes(letter);
  return this.alphabet.every(isIncluded);
}

module.exports = PangramFinder;
