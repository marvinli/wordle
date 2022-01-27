const words = require("./data/words.json");

const buildHistogram = require("./buildHistogram");
// const showFrequency = require("./showFrequency");
const scoreWords = require("./scoreWords");

const histogram = buildHistogram(words);
// showFrequency(histogram);

const scoredWords = scoreWords(words, histogram);

console.log(scoredWords);