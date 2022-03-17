const { expect } = require("chai");
const { missingNumber } = require("./missingNumber.js");

describe("missingNumber", () => {
  it("Function produces expected results with valid input.", () => {
    expect(missingNumber([3,0,1])).to.equal(2);
    expect(missingNumber([0,1])).to.equal(2);
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).to.equal(8);
     });
});