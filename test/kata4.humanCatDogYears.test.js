const {
     humanCatDogYears 
    } = require("../src");

describe("humanCatDogYears", () => {
    it("when human years are passed return array of human cat and dog years", () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(12)).toEqual([12, 64, 74]);
    


    });
});


