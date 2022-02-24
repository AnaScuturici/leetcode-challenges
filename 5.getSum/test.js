const { expect } = require("chai");
const { getSum } = require("./getSum.js");

describe.only("getSum", () => {
  it("Function produces expected results with valid input.", () => {
    expect(getSum(1, 2)).to.deep.equal(3);
    expect(getSum(2, 3)).to.deep.equal(5);
    expect(getSum(-2, 3)).to.deep.equal(1);
     });
});