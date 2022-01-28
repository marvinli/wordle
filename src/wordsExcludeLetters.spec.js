const wordsExcludeLetters = require("./wordsExcludeLetters");

describe("wordsExcludeLetters", () => {
  it("excludes words if it has a letter", () => {
    const words = ["happy", "sad", "glad", "om"];
    let results = wordsExcludeLetters(words, ["a"]);
    expect(results).toEqual(["om"]);
    results = wordsExcludeLetters(words, ["a", "m"]);
    expect(results).toEqual([]);
  });
});
