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

  let test1 = createList([3,2,0,-4]);
  // let test2 = createList([1, 2]);
  // let test3 = createList([1]);
  
  it("Function produces expected results with valid input.", () => {
    expect(listCycle(test1, 1)).to.be.true;
    // expect(listCycle(test2, 0)).to.be.true;
    // expect(listCycle(test3, -1)).to.be.false;
  });
});