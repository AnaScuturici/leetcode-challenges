const { expect } = require("chai");
const { isValid } = require("./isValid.js");

describe("isValid", () => {
  it("Function produces expected results with valid input.", () => {
    expect(isValid("()")).to.be.true;
    expect(isValid("()[]{}")).to.be.true;
    expect(isValid("(]")).to.be.false;
     });
});