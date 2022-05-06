const { expect } = require("chai");
const { rotate } = require("./rotate.js");

describe.only("rotate array", () => {
  it("Function produces expected results with valid input.", () => {
    expect(rotate([1,2,3,4,5], 2)).to.deep.equal([4,5,1,2,3]);
    expect(rotate([1,2], 7)).to.deep.equal([2,1]);
    expect(rotate([], 3)).to.deep.equal([]);
     });
});