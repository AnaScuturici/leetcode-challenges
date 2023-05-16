const { expect } = require("chai");
const { reduce } = require("./reducer.js");

describe("array reduce transformation", () => {
    it("should return the reduced value of array inputs if init = 0", () => {
        let nums = [1, 2, 3, 4]
        let fn = function sum(accum, curr) { return accum + curr; }
        let init = 0
        expect(reduce(nums, fn, init)).to.equal(10);
    });
    it("should produce expected results even when init !== 0", () => {
        let nums = [1, 2, 3, 4]
        let fn = function sum(accum, curr) { return accum + curr * curr; }
        let init = 100
        expect(reduce(nums, fn, init)).to.equal(130);
    });
    it("should return init if the array is empty", () => {
        let nums = []
        let fn = function sum(accum, curr) { return 0; };
        let init = 25
        expect(reduce(nums, fn, init)).to.equal(25);
    });
}); 