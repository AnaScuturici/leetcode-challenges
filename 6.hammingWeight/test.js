const { expect } = require("chai");
const { hammingWeight } = require("./hammingWeight.js");

describe.only("hammingWeight", () => {
    // amended test to input = string (input binary string)
  it("Function produces expected results with valid input.", () => {
    expect(hammingWeight('00000000000000000000000000001011')).to.equal(3);
    expect(hammingWeight('00000000000000000000000010000000')).to.equal(1);
    expect(hammingWeight('11111111111111111111111111111101')).to.equal(31);
     });
});