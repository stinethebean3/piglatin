var piglatin = function(text) {
  return text.replace(/[a-z]+/gi, function(word){     // regular expression to extract only words
    var letters = word.split("");                     // break each word into array of letters
    var firstLetter = letters[0];                     // save firstLetter for later
    if (!"aeiou".includes(firstLetter)) {             // if firstLetter is not a vowel then
      letters.shift();                                // remove first letter from array
      letters.push(firstLetter.toLowerCase());        // add saved firstLetter to end of array
      if (firstLetter == firstLetter.toUpperCase()) { // if firstLetter was Uppercase then
        letters[0] = letters[0].toUpperCase();        // make new firstLetter Uppercase
      }
    }
    return letters.join('') + 'ay';                   // add ay to end of each word and return
  });
};

module.exports.piglatin = piglatin;
