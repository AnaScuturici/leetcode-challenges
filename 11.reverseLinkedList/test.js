const { expect } = require("chai");
const { reverseList } = require("./reverseList.js");

describe.only("reverseList", () => {
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

  let test1 = createList([1,2,3,4,5]);
  let reversed1 = createList([5,4,3,2,1]);
  let test2 = createList([1, 2]);
  let reversed2 = createList([2,1]);
  //let test3 = createList([]);
  
  it("Function produces expected results with valid input.", () => {
    expect(reverseList(test1)).to.deep.equal(reversed1);
    expect(reverseList(test2)).to.deep.equal(reversed2);
  });
  // it("Should take an empty erray as input", () => {
  //   expect(reverseList(test3)).to.be.null;
  // });
});