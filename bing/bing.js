$(function () {
    $("#search").change(function () {
        $("#searches").prepend($("#search"));
    })
})