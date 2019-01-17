// First sport added
var sports = ["Rugby", "Football", "Swimming"];
var play = true;


    function displaySports() {

    // Clear "#sport-selected" div to prevent repeated buttons
    $("#sports-selected").empty();


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
        // Pick an sport
        var sport = $(this).attr("data-name");
        // Sport Giphy API
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+sport+"&api_key=95E3YIlkuHKy27IDEDNbH5kd1xeJk1Yp&limit=10");
        xhr.done(function(data) { console.log("success got data", data); 
        
        var result = data.data;
        
        // Print 10 
        for(var i=0; i<result.length; i++) {

            var picture = {
                id : i,
                still : result[i].images.original_still.url,
                original : result[i].images.original.url,
            }

            console.log(picture);

            var c = $("<div id='"+i+"'>");

            var b = $("<img >");

            b.attr("id",picture.id);

            $(b).attr("src", picture.still);

            c.append(b);

            $("#gif-div").prepend(c);

            }

            $(document).on("click", "img", function(play){

                if(play = false) {

                        source = this["id"].picture.original;
                        play = true;
                        console.log("click");

                    } else{

                        source = this.original;
                        play = false;
                    }
                        
                    $(this).attr("src",source);
                    console.log(play);

                
                })
        
        
    });

    };

    $("#add-sport").on("click", function(event) {

        event.preventDefault();

        var sport = $("#sport-input").val().trim();

        sports.push(sport);

        displaySports();

    })

$(document).on("click", ".sport-button", animation);


displaySports();

