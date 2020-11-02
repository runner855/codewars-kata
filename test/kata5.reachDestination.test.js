const { 
  reachDestination 
} = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I will be there in 4.5 hours");
    expect(reachDestination(67, 12)).toBe("I will be there in 6 hours");
    expect(reachDestination(100, 15)).toBe("I will be there in 7 hours");

  });
});
