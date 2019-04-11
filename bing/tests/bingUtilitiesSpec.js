describe("filtredSuggestions tests", function () {
    describe("When text has only one letter", function () {
        it("Returns a new array of strings", function () {
            var text = "a";
            var list = suggestions;
            var result = filtredSuggestions(text, list);

            expect(result).toBe();
        })
    })

    describe("When text has two letters", function () {
        it("Returns a new array of strings", function () {
            var text = "ab";
            var list = suggestions;
            var result = filtredSuggestions(text, list);

            expect(result).toBe();
        })
    })
})