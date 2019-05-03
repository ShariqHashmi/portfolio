$(document).ready(function () {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scroll_progressbar").style.width = scrolled + "%";
    }
    /*==== Back to Top | Starts ===*/
    $(function toTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });

        $('#top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    /*==== Back to Top | Ends ===*/

    //for Header sticky class
    $(window).scroll(function() {
        if($(this).scrollTop()>150) {
            $( ".custom-navbar" ).addClass("sticky-nav");
        } else {
            $( ".custom-navbar" ).removeClass("sticky-nav");
        }
    });


    /*==== owlCarousel | Starts ===*/
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    /*==== owlCarousel | End ===*/


});

