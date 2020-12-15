$(document).ready(function() {
    console.log("Ready!");
    $("#query").on('keypress', function(e) {
        if(e.which == 13) {
            var v = $("#query").val();
            window.location.href = "https://www.google.com/search?q=site%3Aology.github.io+" + v;
        }
    });
});
