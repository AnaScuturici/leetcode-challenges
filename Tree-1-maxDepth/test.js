const { expect } = require("chai");
const { maxDepth } = require("./maxDepth.js");

describe("maxDepth", () => {
  it("Function produces expected results with valid input.", () => {
    class TreeNode {
        constructor(value, left, right) {
          this.value = value;
          this.left = left === undefined ? null : left;
          this.right = right === undefined ? null : right;
        }
      }

      const treeFromHeap = heap => {
        let impl = (index) => {
          if (index >= heap.length) return null;
          let value = heap[index];
          if (value === undefined) return null;
          return new TreeNode(value, impl(index * 2 + 1), impl(index * 2 + 2));
        };
        return impl(0);
      };

      const test1 = treeFromHeap([3,9,20,null,null,15,7]);
      const test2 = treeFromHeap([1,null,2]);

    expect(maxDepth(test1)).to.equal(3);
    expect(maxDepth(test2)).to.equal(2);
     });
});