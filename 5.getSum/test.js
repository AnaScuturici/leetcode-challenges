const { expect } = require("chai");
const { getSum } = require("./getSum.js");

describe("getSum", () => {
  it("Function produces expected results with valid input.", () => {
    expect(getSum(1, 2)).to.equal(3);
    expect(getSum(2, 3)).to.equal(5);
    expect(getSum(-2, 3)).to.equal(1);
     });
});