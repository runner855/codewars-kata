const { 
    removeChar
} = require("../src");

describe("removeChar", () => {
  test("create a function that removes the first and last characters of a string", () => {
    expect(removeChar('eloquent')).toEqual('loquen');
    expect(removeChar('country')).toEqual('ountr');
    expect(removeChar('person')).toBe('erso');
    expect(removeChar('place')).toBe('lac');
    });
});


