// First sport added
var sports = ["Rugby", "Football", "Swimming"];

    function displaySports() {

    // Clear "#sport-selected" div to prevent repeated buttons
    $("#sports-selected").empty();
    var play = false;


    for(var i = 0; i < sports.length; i++) {

        // Create a button for each sport in array
        var a = $("<button>");

        a.addClass("sport-button");

        a.attr("data-name", sports[i]);

        a.text(sports[i]);

        // Push each sport-button to buttons area
        $("#sports-selected").append(a);

    }}

    function animation() {

        var sport = $(this).attr("data-name");

        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+sport+"&api_key=95E3YIlkuHKy27IDEDNbH5kd1xeJk1Yp&limit=10");
        xhr.done(function(data) { console.log("success got data", data); 
        
        var result = data.data;
        

        for(var i=0; i<result.length; i++) {

            var c = $("<div>");

            var b = $("<img >");

            // b.attr("src",result[i].images.original_still.url);

            b.attr("id",i);

            // if(play = false) {
                $(b).attr("src", result[i].images.original.url);
            // } else{
                // $(b).attr("src", result[i].images.original.url);
            // }

            c.append(b);

            $("#gif-div").prepend(c);

            $(document).on("click", "img", function(play){
                switch(play) {
                    
                    case false:
                    $(this).css("animation-play-state", "running" );
                    play = true;
                    break

                    case true:
                    $(this).css("animation-play-state", "paused");
                    play = false;
                    break

                }
            })

            }

        // $(document).on("click", "img", function() {

        //     switch(play) {
        
        //         case false:
        //         $(this).attr("src",result[i].images.original.url);
        //         play = true;
        //         break
    
        //         case true:
        //         $(this).attr("src",result[i].images.original_still.url);
        //         play = false;
        //         break
    
        //     }

        //     })
        
        });
    }

    $("#add-sport").on("click", function(event) {

        event.preventDefault();

        var sport = $("#sport-input").val().trim();

        sports.push(sport);

        displaySports();

    })

$(document).on("click", ".sport-button", animation);


displaySports();

