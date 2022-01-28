const positions = [
  0x10000,
  0x01000,
  0x00100,
  0x00010,
  0x00001,
];

const wordsWithLetters = (words, letters) => {
  return words.filter((word) => {
    const wordLetters = [...word];
    // Check each letter to see if they exist in valid positions
    for (var i = 0; i < letters.length; i++) {
      let letterFound = false;
      const [letter, mask] = letters[i];
      for (var j = 0; j < wordLetters.length; j++) {
        if (wordLetters[j] === letter) {
          if (positions[j] & mask) { // Valid position
            letterFound = true;
          } else { // Invalid position
            // Any invalid position removes word from list
            return false;
          }
        }
      }
      // If letter not found once, remove from list
      if (!letterFound) return false;
    }
    // Passes all letters! Keep it.
    return true;
  })
}

module.exports = wordsWithLetters;
