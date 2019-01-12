// First sport added
var sports = ["Rugby", "Football", "Swimming"];

    function displaySports() {

    // Clear "#sport-selected" div to prevent repeated buttons
    $("#sports-selected").empty();

    for(var i = 0; i < sports.length; i++) {

        // Create a button for each sport in array
        var a = $('<button class="sport-button">'+sports[i]+'</button>')

        a.attr("id", sports[i]);

        // Push each sport-button to buttons area
        $("#sports-selected").append(a);
        console.log($("button").attr("data-name"));

    }}

    function animation() {

        var sport = $(this).attr("data-name");

        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+sport+"&api_key=95E3YIlkuHKy27IDEDNbH5kd1xeJk1Yp&limit=10");
        xhr.done(function(data) { console.log("success got data", data); 
    
        for(var i=0; i<data.array.length; i++) {

        }
    
    });

    }

    $("#add-sport").on("click", function(event) {

        event.preventDefault();

        var sport = $("#sport-input").val().trim();

        sports.push(sport);

        displaySports();

    })

$(document).on("click", ".sport-button", animation);

animation();
displaySports();

