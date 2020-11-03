const {
    stopsCount
    } = require("../src");

describe("stopsCount", () => {
    test("Each  array has two items, number of people get into bus  and number of people get off the bus ,return number of people who are still in the bus after the last bus station ", () => {
        expect(stopsCount([[10, 0], [3, 5], [5, 8]])).toEqual(5);
        expect(stopsCount([[3, 0],[9, 1],[4, 10],[12, 2],[6, 1],[7, 10]])).toEqual(17);
        expect(stopsCount([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toEqual(21);
    


    });
});




