const { expect } = require("chai");
const { reverseList } = require("./reverseList.js");

describe("houseRobber", () => {
  it("Function produces expected results with valid input.", () => {
    expect(reverseList([1,2,3,4,5])).to.deep.equal([5,4,3,2,1]);
    expect(reverseList([1, 2])).to.deep.equal([2, 1]);
  });
  it("Should return an empty erray", () => {
    expect(reverseList([])).to.deep.equal([]);
  });
});