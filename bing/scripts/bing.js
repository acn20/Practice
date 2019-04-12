$(function () {
    let suggestions = ["How to stop a cold from coming", "What exercices are best", "When does the festival happen"];
    var history = [];

    $("#searchInput").focus();

    $("#searchButton").click(function () {
        history.push($("#searchInput").val());
        $("#searchInput").val("");
    })

    $("#searchInput").click(function () {
        $("#dark").show();
        $("#searches").empty();
        for (let i = 0; i < history.length; i++) {
            var searched = $("#searched").clone();
            searched.attr("id", null);
            searched.html(history[i]);
            $("#searches").prepend(searched);
        }
    })

    $("#searchInput").change(function () {
        $("#suggestions").html('');
        var value = $("#searchInput").val();
        var filtredList = filtredSuggestions(value, suggestions);

        for (let i = 0; i < filtredList.length; i++) {
            var filtredSuggestion = $("#filtredSuggestion").clone();
            filtredSuggestion.attr("id", null);
            filtredSuggestion.html(filtredList[i]);
            $("#suggestions").prepend(filtredSuggestion);
        }
    })
})