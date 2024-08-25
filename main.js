$(document).ready(function() {
    // Initializing all variables
    var slideWidth = $('.SliderContainer').width();
    var slideImages = $('.slideImage');
    var currentIndex = 0;

    // Hide all images except the first one
    slideImages.hide();
    slideImages.eq(currentIndex).show();

    $('.ThumbnailContainer ul li img').on('click', function(e) {
        var newIndex = $(this).parent().index();

        if (newIndex !== currentIndex) {
            var direction = (newIndex > currentIndex) ? 'left' : 'right';
            var currentSlide = slideImages.eq(currentIndex);
            var newSlide = slideImages.eq(newIndex);

            if (direction === 'left') {
                newSlide.css({ left: slideWidth }).show();
                currentSlide.animate({ left: -slideWidth }, 450, function() {
                    $(this).hide().css({ left: 0 });
                });
                newSlide.animate({ left: 0 }, 450);
            } else {
                newSlide.css({ left: -slideWidth }).show();
                currentSlide.animate({ left: slideWidth }, 450, function() {
                    $(this).hide().css({ left: 0 });
                });
                newSlide.animate({ left: 0 }, 450);
            }

            currentIndex = newIndex;
        }

        e.preventDefault();
    });
});

