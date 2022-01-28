const wordsWithLetters = require("./wordsWithLetters");

describe("wordsWithLetters", () => {
  it("filters out letters with mask", () => {
    const words = wordsWithLetters(
      ["hello", "chump"],
      [
        ["h", 0x10000]
      ]
    );
    expect(words).toEqual(["hello"]);
  });
});
