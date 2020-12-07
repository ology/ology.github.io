$(document).ready(function() {
    console.log("Ready!");
    $("#query").on('keypress', function(e) {
        if(e.which == 13) {
            var v = $("#query").val();
            alert("Query:" + v);
        }
    });
});
