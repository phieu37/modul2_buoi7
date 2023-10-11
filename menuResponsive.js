$(document).ready(function() {
    $('.menu-toggle-btn').click(function() {
        $(this).toggleClass("fa-times");
        $("#header").toggleClass("active");
    });

    $('.sub-btn').click(function() {
        $(this).next('.subnav').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});

// có thời gian sẽ phát triển thêm nút bấm subnav thay vì hover