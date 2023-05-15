const { expect } = require("chai");
const { arrayLast } = require("./arrayLast.js");

describe("arrayLast", () => {
  it("should produce expected results with valid input", () => {
    let array = [-2, 1, -3]
    expect(array.last()).to.equal(-3);
     });
  it("should return -1 if the input is []", () => {
    let array = []
    expect(array.last()).to.equal(-1);
       });
});