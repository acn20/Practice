function filtredSuggestions (text, list) {
    var filtredSuggestionsList = [];

    for(var i = 0; i < list.length; i++) {
        if(text == list[i][0]) {
            finalList.push(list[i]);
        }
    }

    return filtredSuggestionsList;
}