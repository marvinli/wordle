const wordsExcludeLetters = (words, letters) => {
  return words.filter((word) => {
    const uniqueLetters = new Set([...word]);
    for (var i = 0; i < letters.length; i++) {
      if (uniqueLetters.has(letters[i])) {
        return false;
      }
    }
    return true;
  })
}

module.exports = wordsExcludeLetters;
