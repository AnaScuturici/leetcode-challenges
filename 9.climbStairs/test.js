const { expect } = require("chai");
const { climbStairs } = require("./climbStairs.js");

describe("climbStairs", () => {
  it("Function produces expected results with valid input.", () => {
    expect(climbStairs(2)).to.equal(2);
    expect(climbStairs(3)).to.equal(3);
     });
});