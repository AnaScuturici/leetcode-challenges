const { expect } = require("chai");
const { reverseList } = require("./reverseList.js");

describe("reverseList", () => {
  const createList = arr => {
    return arr.reduceRight((next, value) => ({value, next}), null);
  }
  
  let test1 = createList([1,2,3,4,5]);
  let reversed1 = createList([5,4,3,2,1]);
  let test2 = createList([1, 2]);
  let reversed2 = createList([2,1]);
  let test3 = createList([]);
  let test4 = createList([]);
  
  it("Function produces expected results with valid input.", () => {
    expect(reverseList(test1)).to.deep.equal(reversed1);
    expect(reverseList(test2)).to.deep.equal(reversed2);
  });
  it("Should take an empty erray as input", () => {
    expect(reverseList(test3)).to.equal(test4);
  });
});