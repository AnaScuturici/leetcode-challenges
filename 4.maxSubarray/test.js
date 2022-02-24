const { expect } = require("chai");
const { maxSubarray } = require("./maxSubarray.js");

describe("maxSubarray", () => {
  it("Function produces expected results with valid input.", () => {
    expect(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6);
    expect(maxSubarray([1])).to.equal(1);
    expect(maxSubarray([5, 4, -1, 7, 8])).to.equal(23);
     });
});