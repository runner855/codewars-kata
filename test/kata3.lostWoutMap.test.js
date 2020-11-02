const { 
    lostWoutMap 
} = require("../src");

describe("lostWoutMap", () => {
  test("given an array of integers, return a new array with each value doubled.", () => {
    expect(lostWoutMap([1, 2, 3])).toEqual([2, 4, 6,]);
    expect(lostWoutMap([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8]);
    expect(lostWoutMap([2, 2, 2, 2, 2, 2])).toEqual([4, 4, 4, 4, 4, 4]);
  });
});
