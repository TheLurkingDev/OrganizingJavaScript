var Carousel = (function() {
		function scrollLeft(evt) {
			evt.preventDefault();
			evt.stopPropagation();
			evt.stopImmediatePropagation();

			if (position > 0) {
				position = Math.max(0,position - 250);
			}

			$items.css({ left: (-position) + "px" });
		}

		function scrollRight(evt){
			evt.preventDefault();
			evt.stopPropagation();
			evt.stopImmediatePropagation();

			if (position < maxPosition) {
				position = Math.min(maxPosition,position + 250);
			}

			$items.css({ left: (-position) + "px" });
		}

		function init() {
		
			var $content = $("[rel=js-carousel] > [rel=js-content]");
			$items = $content.children("[rel=js-items]");
			var $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
			var $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");


			var contentWidth = $content.width();
			var itemsWidth = $items.width();
			position = 0;
			maxPosition = (itemsWidth - contentWidth);

			// Again, both "scrollLeft" and "scrollRight" are callback functions.
			// Note that parentheses are not used after the function names.
			// If the parentheses were included, the functions would execute immediately instead of
			// acting as callback functions.
			$left.on("click", scrollLeft);
			$right.on("click", scrollRight);
		}

		var $items;
		var position;
		var maxPosition;

		return {
			init: init
		};
	
})();

$(document).ready(Carousel.init);