$(document).ready(function () {

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

    /*==== owlCarousel | Starts ===*/
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
    /*==== owlCarousel | End ===*/


    //for Header sticky class
    $(window).scroll(function() {
        if($(this).scrollTop()>150) {
            $( ".custom-navbar" ).addClass("sticky-nav");
        } else {
            $( ".custom-navbar" ).removeClass("sticky-nav");
        }
    });

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scroll_progressbar").style.width = scrolled + "%";
    }

    // For notification in navbar
    $("[data-toggle=popover]").each(function(i, obj) {

        $(this).popover({
            html: true,
            content: function() {
                var id = $(this).attr('id');
                return $('#popover-content-' + id).html();
            }
        });

    });


    // runs counter for number ~~~~~~~~~~~~~~~~Akash will lokk into this
    $('.multi-box-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

