const { expect } = require("chai");
const { isAnagram } = require("./isAnagram.js");

describe("twoSum", () => {
  it("Function produces expected results with valid input.", () => {
    expect(isAnagram([2,7,11,15], 9)).to.deep.equal([0, 1]);
    expect(isAnagram([3,2,4], 6)).to.deep.equal([1, 2]);
    expect(isAnagram([3,3], 6)).to.deep.equal([0, 1]);
     });
});