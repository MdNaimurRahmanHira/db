$(document).ready(function () {
    $('.read-more-btn').each(function () {
        $(this).on('click', function () {
            if ($(this).prev().children().hasClass('active')) {
                $(this).prev().children().removeClass('active');
                $(this).text('Read more')
            } else {
                $(this).prev().children().addClass('active');
                $(this).text('Read less')
            }
        });
    });
})