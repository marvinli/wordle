const words = require("./data/words.json");

const buildHistogram = require("./buildHistogram");
// const showFrequency = require("./showFrequency");
const scoreWords = require("./scoreWords");
const wordsExcludeLetters = require("./wordsExcludeLetters");
const wordsWithLetters = require("./wordsWithLetters");
// const includeWords = require("./includeWords");

// Add gray letters here:
let filteredWords = wordsExcludeLetters(
  words,
  ["a", "r", "s", "e", "i", "y"]
);

// Add yellow or green matches here:
filteredWords = wordsWithLetters(
  filteredWords,
  [
    ["u", 0x01111],
    ["n", 0x10111],
    ["o", 0x11011],
    ["t", 0x11101],
  ]
);

const histogram = buildHistogram(filteredWords);
// showFrequency(histogram);

const scoredWords = scoreWords(filteredWords, histogram);

console.log(scoredWords);