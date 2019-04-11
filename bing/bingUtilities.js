function filtredSuggestions(text, list) {
    var filteredSuggestionsList = [];

    for(var i = 0; i < list.length; i++) {
        if(list[i].startsWith(text)) {
            filteredSuggestionsList.push(list[i]);
        }
    }

    return filteredSuggestionsList;
}