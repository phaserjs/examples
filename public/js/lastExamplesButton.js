$( document ).ready(function() {
    const $lastExamplesButton = $('#last-examples-button');
    const $lastExamplesList = $('#last-examples-result--content');
    $("#last-examples-result").hide();

    $lastExamplesButton.click(function() {
        $("#last-examples-result").show();
        $.getJSON( "./recent-examples.json", function( data ) {
            $.each( data, function( key, val ) {

                const parts = val.path.split('\\');

                parts.shift();

                let name = parts.join(' - ');

                name = name.replace('.js', '');

                $lastExamplesList.append(`
                    <div class="result">
                        <a href="view.html?src=${val.path}">
                            ${name}
                        </a>
                    </div>
                `);
            });
        });
    });

    $("body").on("click", function(event){
        // console.log("Event ", event.target)
        const $lastExamplesContainer = $(event.target).closest("#last-examples-button"),
            clickedInLastExamples = $lastExamplesContainer.length > 0;
            // console.log("Last examples container ", $lastExamplesContainer)
            // console.log("Clicked in last examples ", clickedInLastExamples)
            if(!clickedInLastExamples){
            $("#last-examples-result").hide();
        }
    });
});

