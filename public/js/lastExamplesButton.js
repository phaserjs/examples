$( document ).ready(function() {
    const $lastExamplesButton = $('#last-examples-button');
    const $lastExamplesList = $('#last-examples-result--content');
    $("#last-examples-result").hide();

    $lastExamplesButton.click(function() {
        $("#last-examples-result").show();
        $.getJSON( "./recent-examples.json", function( data ) {
            $.each( data, function( key, val ) {
                $lastExamplesList.append(`
                    <div class="result">
                        <a href="view.html?src=${val.path}">
                            ${val.path}
                        </a>
                    </div>
                `);
            });
        });
    });

    $("body").on("click", function(event){
        console.log("Event ", event.target)
        const $lastExamplesContainer = $(event.target).closest("#last-examples-button"),
            clickedInLastExamples = $lastExamplesContainer.length > 0;
            console.log("Last examples container ", $lastExamplesContainer)
            console.log("Clicked in last examples ", clickedInLastExamples)
            if(!clickedInLastExamples){
            $("#last-examples-result").hide();
        }
    });
});

