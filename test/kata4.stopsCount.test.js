const {
    stopsCount
    } = require("../src");

describe("stopsCount", () => {
    test("return number of people who are still in the bus after the last bus station ", () => {
        expect(stopsCount([[10, 0], [3, 5], [5, 8]])).toEqual(5);
        expect(stopsCount([[3, 0],[9, 1],[4, 10],[12, 2],[6, 1],[7, 10]])).toEqual(17);
        expect(stopsCount([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toEqual(21);
    


    });
});




