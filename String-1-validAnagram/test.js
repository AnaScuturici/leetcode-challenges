const { expect } = require("chai");
const { isAnagram } = require("./isAnagram.js");

describe("isAnagram", () => {
  it("Function produces expected results with valid input.", () => {
    expect(isAnagram("anagram", "nagaram")).to.be.true;
    expect(isAnagram("rat", "car")).to.be.false;
     });
});