var piglatin = function(text) {
  var words = text.split(" ");
  words.forEach(function(word,index) {
    var letters = word.split("");
    var firstLetter = letters[0];
    if ("aeiou".includes(firstLetter)) { 
      // firstLetter is vowel
    } else {
      letters.shift();
      letters.push(firstLetter);
      var newWord = letters.join('') + 'ay';
      words[index] = newWord;
      console.log(words);
      // firstLetter is consonant
    }
      

  });
  return words.join(" ");










};

module.exports.piglatin = piglatin;
