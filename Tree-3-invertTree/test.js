const { expect } = require("chai");
const { invertTree } = require("./invertTree.js");

describe("invert tree", () => {
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

      const test1 = treeFromHeap([4,2,7,1,3,6,9]);
      const test2 = treeFromHeap([4,7,2,9,6,3,1]);
      const test3 = treeFromHeap([2,1,3]);
      const test4 = treeFromHeap([2,3,1]);
      const test5 = treeFromHeap([]);

    expect(invertTree(test1)).to.deep.equal(test2);
    expect(invertTree(test3)).to.deep.equal(test4);
    expect(invertTree(test5)).to.deep.equal(test5);
     });
});