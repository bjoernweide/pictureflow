(function($) {
	
	/**
	 * Shows a picture in a lightbox 
	 */
	$.fn.showPicture = function() {
		
		var target = this;
		
		//set photo id in global var
		var id = target.parents("li").attr("id");
		selectedPhoto = id;		
		
		var url = target.css("background-image");
		url = url.replace("preview", "full");
		var realWidth = target.data("width");
		var realHeight = target.data("height");
		var isPhotoLandscape = (realWidth > realHeight);
		var ratio = realHeight / realWidth;
		
		var canvas = $("#canvas");
		$(".photo").addClass("blur");
		canvas.css("height", $(document).height());
		canvas.css("width", $(document).width());
		
		var lightboxNavigation = $("#lightbox-navigation");
		var lightboxContainer = $("#lightbox-container");
		lightboxContainer.css("height", $(document).height());
		lightboxContainer.css("width", $(document).width());
		lightboxContainer.show();
		var lightbox = $("#lightbox");
		var height = 0;
		var width = 0;
		if (isPhotoLandscape) {
			height = $(window).height() - 70;
			width = height / ratio;
		} else {
			height = $(window).height() - 70;
			width = height / ratio;			
		}
		lightbox.css("height", height);
		lightbox.css("width", width);
		var offset = $(window).scrollTop();
		var lightBoxTop = (offset + ($(window).height() - height - 30) / 2);
		var lightBoxLeft = ($(window).width() - width) / 2;
		lightbox.css("top", lightBoxTop);
		lightbox.css("left", lightBoxLeft);
		lightbox.css("background-image", url);
		
		var closeLink = $("#closeLink");
		lightboxNavigation.css("top", lightBoxTop + height + 10);
		closeLink.css("top", lightBoxTop);
		closeLink.css("left", lightBoxLeft + width + 10);
		
		lightbox.click(function() {
			closeLightBox();
		});
		lightbox.show();
		lightboxNavigation.show();
		closeLink.show();
	};

})(jQuery);