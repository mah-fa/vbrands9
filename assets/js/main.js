$(document).ready(function () {
    $(".home-col-1, .home-col-2, .home-col-3").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
});