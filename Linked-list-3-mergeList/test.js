const { expect } = require("chai");
const { mergeLists } = require("./mergeLists.js");

describe.only("reverseList", () => {
  class ListNode { 
    constructor(val, next){
      this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
    }
  }

  const createList = arr => {
    let head = null;
    for (let i = arr.length - 1; i >= 0; --i) {
      let newHead = new ListNode(arr[i]);
      newHead.next = head;
      head = newHead;
    }
    return head;
  };
  
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