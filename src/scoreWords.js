const scoreWords = (words, histogram) => {
  const scoredWords = words.map((word) => {
    const uniqueLetters = Array.from(new Set([...word]));
    let score = 0;
    uniqueLetters.forEach((char) => {
      score += histogram[char];
    });
    return {
      word,
      score
    };
  });

  scoredWords.sort((a, b) => b.score - a.score);
  return scoredWords;
};

module.exports = scoreWords;
