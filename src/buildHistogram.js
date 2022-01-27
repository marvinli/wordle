const buildHistogram = (words) => {
  const histogram = {};
  words.forEach((word) => {
    const uniqueLetters = Array.from(new Set([...word]));
    uniqueLetters.forEach((char) => {
      histogram[char] = (histogram?.[char] || 0) + 1;
    })
  });
  return histogram;
};

module.exports = buildHistogram;
