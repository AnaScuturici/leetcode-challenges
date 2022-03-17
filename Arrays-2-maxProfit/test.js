const { expect } = require("chai");
const { maxProfit } = require("./maxProfit.js");

describe("maxProfit", () => {
  it("Function produces expected results with valid input.", () => {
    expect(maxProfit([7,1,5,3,6,4])).to.equal(5);
    expect(maxProfit([7,6,4,3,1])).to.equal(0);
    expect(maxProfit([2,4,1])).to.equal(2);
     });
});