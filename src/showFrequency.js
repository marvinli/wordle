const letters = require("./data/letters.json");

const showFrequency = (histogram) => {
  const freqArray = letters.map((char) => ({
    char,
    frequency: histogram[char],
  }));
  
  freqArray.sort((a, b) => b.frequency - a.frequency);
  
  freqArray.forEach((f) => {
    const { char, frequency } = f;
    console.log(`${char}: ${frequency}`);
  });
};

module.exports = showFrequency;
