const { expect } = require("chai");
const { mergeLists } = require("./mergeLists.js");

describe("reverseList", () => {
  class ListNode { 
    constructor(val, next){
      this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
    }
  }

  const createList = arr => {
    let node, temp;
    for(let i = arr.length - 1; i >= 0; i--){
      if(!node){
        node = new ListNode(arr[i]);
      } else {
        temp = new ListNode(arr[i]);
        temp.next = node;
        node = temp;
      }
    }
    return node;
  }

  let test1 = createList([1,2,4]);
  let test2 = createList([1, 3, 4]);
  let test3 = createList([]);
  let test4 = createList([0]);
  
  it("Function produces expected results with valid input.", () => {
    expect(mergeLists(test1, test2)).to.deep.equal([1,1,2,3,4,4]);
    expect(mergeLists(test3, test3)).to.deep.equal([]);
    expect(mergeLists(test3, test4)).to.deep.equal([0]);
  });
});