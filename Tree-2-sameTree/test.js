const { expect } = require("chai");
const { isSameTree } = require("./sameTree.js");

describe("same tree", () => {
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

      const test1 = treeFromHeap([1, 2, 3]);
      const test2 = treeFromHeap([1, 2, 3]);
      const test3 = treeFromHeap([1, 2]);
      const test4 = treeFromHeap([1, null, 2]);
      const test5 = treeFromHeap([1, 2, 1]);
      const test6 = treeFromHeap([1, 1, 2]);

    expect(isSameTree(test1, test2)).to.be.true;
    expect(isSameTree(test3, test4)).to.be.false;
    expect(isSameTree(test5, test6)).to.be.false;
     });
});