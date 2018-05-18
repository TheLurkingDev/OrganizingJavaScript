var Details = (function () {
		function loadPerson(ID) {
			// Use the ID to load the appropriate html document via ajax request
			// and dispaly it within the $content element.
			$.ajax("details/" + ID + ".html", { dataType:"text" }).then(function(contents) {
				$content.html(contents);
			});
		}
		
		function init() {
			$content = $("[rel=js-details]");			

			// on click of a carousel item, do an Ajax request for
			// the "details/2.html" (or whatever) file for the person
			// clicked, and load those contents into the `$content` div.

			// hint: you will probably want to use "event propagation"
			// (aka "event delegation"), by attaching a single event
			// handler the `$content` element rather than individual
			// event handlers to each item in the carousel.
		}

		var $content;

		return {
			init: init,
			loadPerson: loadPerson
		};
	
})();