$(function () {
    var rootUrl = "http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/";

    $.ajax(rootUrl, {
        "method": "GET",
        "success": function () {
            var movieList = $('<ul/>');
        },
        "error": function () {
            throw new Error("Unsuccessful load");
        }

    })

    $("#rating").change(function () {
        $.ajax(rootUrl, {
            "method": "POST",
            "success": function () {

            },
            "error": function () {
                throw new Error("Try again");
            }
        })
    })

})