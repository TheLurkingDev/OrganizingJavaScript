$(document).ready(function () {
    // Referring to a "rel" attribute within another "rel" attribute element.
    // $("[rel='js-controls'] > [rel*='js-register']")...

    // Referring to two elements with separate "rel" attributes.
    // $("[rel='js-register'], [rel='js-login']").on("click")...

    // Parameters to "on"
    // Click occurs within 'js-controls' element and then is further restricted
    // to any element with a "rel" attribute containing 'js-'.
    // The 3rd parameter to "on" is a callback function, so it fires following the click.
    var $modal = $("[rel='js-modal'");
    $("[rel='js-controls']").on("click", "[rel*='js-']", function(evt) {
        // Stops event from going further.
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        var url = $(evt.target).attr("href");

        // Pass the url into the ajax request and specify that we are expecting "text" data to be returned.
        $.ajax(url, { dataType: "text" })
        .then(function(contents) {
            $modal.html(contents).show();
        });
    });
});