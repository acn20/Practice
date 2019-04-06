$(function () {
    var suggestions = ["How to stop a cold from coming", "What exercices are best", "When does the festival happen"];
    var history = [];
    
    $("#searchInput").focus();

    $("#searchButton").click(function () {
        history.push($("#searchInput").html());
        $("#searchInput").html("");
    })

    $("#searchInput").click(function () {
        $("#dark").show();
        for(var i=0; i < history.length; i++) {
            $("#searches").prepend(history[i]);
        }
    })

    $("#searchInput").change(function () {

        for (var i = 0; i < suggestions.length; i++) {
            if ($("#searchInput").html()[0] == suggestions[i][0]) {
                $("#searches").prepend(suggestions[i]);
            }
        }

        for (var i = 0; i < history.length; i++) {
            if ($("#searchInput").html()[0] == history[i][0]) {
                $("#searches").prepend(history[i]);
            }
        }
    })
})