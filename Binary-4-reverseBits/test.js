const { expect } = require("chai");
const { reverseBits } = require("./reverseBits.js");

// NEEDS REFACTORING!!!

describe("reverseBits", () => {
  it("Function produces expected results with valid input.", () => {
    expect(reverseBits('00000010100101000001111010011100')).to.equal(964176192);
    expect(reverseBits('11111111111111111111111111111101')).to.equal(3221225471);
     });
});