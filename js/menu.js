//Menu obsługa
$('nav a').on("click", function () {
    const scrolling = "#" + $(this).attr('class');

    $('body, html').animate({
        scrollTop: $(scrolling).offset().top
    })
})