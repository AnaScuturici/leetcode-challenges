const { expect } = require("chai");
const { isValid } = require("./isValid.js");

describe("isValid", () => {
  it("Function produces expected results with valid input.", () => {
    expect(isValid("A man, a plan, a canal: Panama")).to.be.true;
    expect(isValid("race a car")).to.be.false;
    expect(isValid(" ")).to.be.true;
     });
});