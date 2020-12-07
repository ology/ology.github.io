$(document).ready(function() {
    console.log("Ready!");
    $("#search").click(function() {
        var v = $("#query").value();
        alert("Query:" + v);
    });
});
