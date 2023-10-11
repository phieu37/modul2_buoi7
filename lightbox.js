$(document).ready(function () {
    $(".gallery img").click(function () {

        // Get đường dẫn (src)/mô tả (alt) của ảnh được click
        const imageSrc = $(this).attr("src");
        const caption = $(this).attr("alt");

        // Get .lightbox-image và Set đường dẫn (src)/mô tả (alt)
        // của ảnh được click vào
        const lightboxImage = $(".lightbox-image");
        lightboxImage.attr("src", imageSrc);
        lightboxImage.attr("alt", caption);

        // Set kích thước về 0 trước khi animate
        lightboxImage.css({
            width: '0',
            height: '0'
        });

        // Chạy animate để phóng to
        lightboxImage.animate({
            width: '70%',
            height: '65%'
        }, 'slow', 'linear');

        // Get .lightbox-caption
        const lightboxCaption = $(".lightbox-caption");

        // Ẩn và Set vị trí ban đầu
        lightboxCaption.css({
            opacity: '0',
            bottom: '0%',
            fontSize: '5px'
        });

        // Chạy animate
        lightboxCaption.animate({
            opacity: '1',
            bottom: '10%',
            fontSize: '20px'
        }, 'slow', 'linear');

        // Set mô tả của ảnh được click
        lightboxCaption.text(caption); 
        
        $(".lightbox").show();
    });

    // click để ẩn .lightbox
    $(".close").click(function () {
        $(".lightbox").hide();
    });
});
