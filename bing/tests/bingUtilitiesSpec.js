describe("filtredSuggestions tests", function () {
    describe("When text has only one letter which can be found at the beginning of a word in the list or more", function () {
        it("Returns a new array of strings", function () {
            var text = "H";
            var list = suggestions;
            var result = filtredSuggestions(text, list);

            expect(result).toEqual(["How to stop a cold from coming"]);
        })
    })

    describe("When text has two letters which can be found at the beginning of a word in the list or more", function () {
        it("Returns a new array of strings", function () {
            var text = "Wh";
            var list = suggestions;
            var result = filtredSuggestions(text, list);

            expect(result).toEqual(["What exercices are best", "When does the festival happen"]);
        })
    })

    describe("When text has only one letter which cannot be found at the beginning of a word in the list or more", function () {
        it("Returns an empty array", function () {
            var text = "a";
            var list = suggestions;
            var result = filtredSuggestions(text, list);

            expect(result).toEqual([]);
        })
    })
})