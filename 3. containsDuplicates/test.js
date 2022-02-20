const { expect } = require("chai");
const { containsDuplicates } = require("./constainsDuplicates.js");

describe("constainsDuplicates", () => {
  it("Function produces expected results with valid input.", () => {
    expect(containsDuplicates([1,2,3,1])).to.be(true);
    expect(containsDuplicates([1,2,3,4])).to.be(false);
    expect(containsDuplicates([1,1,1,3,3,4,3,2,4,2])).to.be(true);
     });
});