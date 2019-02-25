describe("getRandomIntInclusive Tests", function () {
    describe("When min and max are negative", function () {
        it("Throws error", function () {
            var min = -3;
            var max = -6;
            expect(function () { getRandomIntInclusive(min, max) }).toThrow();
        })
    })

    describe("When one of the parameters is negative", function () {
        it("Throws error", function () {
            var min = -3;
            var max = 6;
            expect(function () { getRandomIntInclusive(min, max) }).toThrow();
        })
    })

    describe("When min is greater than max", function () {
        it("Throws error", function () {
            var min = 5;
            var max = 2;
            expect(function () { getRandomIntInclusive(min, max) }).toThrow();
        })
    })

    describe("When the difference between min and max is 1", function () {
        it("Gives a result between min and max", function () {
            var min = 4;
            var max = 5;
            var result = getRandomIntInclusive(min, max);
            expect(result >= 4 || result <= 5).toBeTrue();
        })
    })

    describe("When the difference between min and max is 100", function () {
        it("Gives a result between min and max", function () {
            var min = 4;
            var max = 104;
            var result = getRandomIntInclusive(min, max);
            expect(result >= 4 || result <= 104).toBeTrue();
        })
    })
})


describe("generateNumbers Tests", function () {
    describe("When min and max are negative", function () {
        it("Throws error", function () {
            var min = -3;
            var max = -6;
            var count = 3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When one of the parameters is negative", function () {
        it("Throws error", function () {
            var min = -3;
            var max = 6;
            var count = 3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When min is greater than max", function () {
        it("Throws error", function () {
            var min = 5;
            var max = 2;
            var count = 3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When count is not positive", function () {
        it("Throws error", function () {
            var min = 2;
            var max = 4;
            var count = -3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When the difference between min and max is less than count", function () {
        it("Throws error", function () {
            var min = 3;
            var max = 5;
            var count = 3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When the difference between min and max is 1", function () {
        it("Gives a result between min and max", function () {
            var min = 4;
            var max = 5;
            count = 1;
            var result = generateNumbers(min, max, count);
            expect(result).toBe();
        })
    })

    describe("When the difference between min and max is 100", function () {
        it("Gives a result between min and max", function () {
            var min = 4;
            var max = 104;
            count = 5;
            var result = generateNumbers(min, max, count);
            expect(result).toBe();
        })
    })
})