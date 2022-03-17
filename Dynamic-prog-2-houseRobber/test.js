const { expect } = require("chai");
const { rob } = require("./houseRobber.js");

describe("houseRobber", () => {
  it("Function produces expected results with valid input.", () => {
    expect(rob([1,2,3,1])).to.equal(4);
    expect(rob([2,7,9,3,1])).to.equal(12);
     });
});