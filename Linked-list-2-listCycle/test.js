const { expect } = require("chai");
const { listCycle } = require("./listCycle.js");


// NEED REFACTOR
describe("listCycle", () => {
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

  let test1 = createList([3,2,0,-4]);
  // let test2 = createList([1, 2]);
  // let test3 = createList([1]);
  
  it("Function produces expected results with valid input.", () => {
    expect(listCycle(test1, 1)).to.be.true;
    // expect(listCycle(test2, 0)).to.be.true;
    // expect(listCycle(test3, -1)).to.be.false;
  });
});