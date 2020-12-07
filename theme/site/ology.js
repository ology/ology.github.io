$(document).ready(function() {
    console.log("Ready!");
    $("#search").click(function() {
        var v = $("#query").val();
        alert("Query:" + v);
    });
});
