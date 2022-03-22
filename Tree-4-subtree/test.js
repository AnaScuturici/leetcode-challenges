const { expect } = require("chai");
const { isSubtree } = require("./isSubtree.js");

describe("subtree of a tree", () => {
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

      const tree1 = treeFromHeap([3,4,5,1,2]);
      const subtree1 = treeFromHeap([4,1,2]);
      const tree2 = treeFromHeap([3,4,5,1,2,null,null,null,null,0]);
      const subtree2 = treeFromHeap([4,1,2]);

    expect(isSubtree(tree1, subtree1)).to.be.true;
    expect(isSubtree(tree2, subtree2)).to.be.false;
     });
});