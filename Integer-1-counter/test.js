const { expect } = require("chai");
const { createCounter } = require("./counter.js");

describe("counter", () => {
    it("should produce expected results with valid input", () => {
        const counter = createCounter(10);
        console.log(counter);
        expect(counter()).to.equal(10);
        expect(counter()).to.equal(11);
        expect(counter()).to.equal(12);
    });
    it("should work with negative numbers", () => {
        const counter = createCounter(-2);
        expect(counter()).to.equal(-2);
        expect(counter()).to.equal(-1);
        expect(counter()).to.equal(0); 
        expect(counter()).to.equal(1);
    });
});
