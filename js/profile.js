
$(function () {


    if ($('.js-slider-22').length) {
        $('.js-slider-22').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $('.recomendation__arrow'),
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>'
        });
    }

    if ($('.js-slider-23').length) {
        $('.js-slider-23').slick({

            responsive: [
                {
                    breakpoint: 9999,
                    settings: 'unslick',
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                        arrows: true,
                        adaptiveHeight: true,
                        variableWidth: false,
                        appendArrows: $('.social__arrow'),
                        prevArrow: '<div class="prev"></div>',
                        nextArrow: '<div class="next"></div>',
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true,
                        adaptiveHeight: true,
                        variableWidth: true,
                        appendArrows: $('.social__arrow'),
                        prevArrow: '<div class="prev"></div>',
                        nextArrow: '<div class="next"></div>',
                    }
                },
            ]
        });
    }

    if ($('.js-slider-24').length) {
        $('.js-slider-24').slick({

            responsive: [
                {
                    breakpoint: 9999,
                    settings: 'unslick',
                },
                {
                    breakpoint: 639,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true,
                        adaptiveHeight: true,
                        appendArrows: $('.achievements__arrow'),
                        prevArrow: '<div class="prev"></div>',
                        nextArrow: '<div class="next"></div>',
                    }
                },
            ]
        });
    }


    function countUp(block) {


        var shown = false;

        function count_once() {
            shown = true;
        }

        $(window).resize(function () {
            count_once()
        })

        console.log($(window).width(), shown);


        if ($(window).width() > 992) {
            $(block).each(function () {
                $(this).find("span").text("0");
            });

            $(window).scroll(function () {
                var scroll_pos = $(block).offset().top,
                    w_top = $(this).scrollTop(),
                    w_h = $(this).height();

                if (w_top >= (scroll_pos - w_h) && shown == false) {
                    $(block).each(function () {
                        var $this = $(this),
                            numb = $this.attr('data-count-numb'),
                            span = $this.find("span");

                        span.animateNumber({
                            number: numb,
                        }, 3000);

                    });
                    count_once();
                };

            });

        } else {
            $(block).each(function () {
                var data_attr = $(this).attr("data-count-numb");
                $(this).find("span").text(data_attr);
            })
        }

    };

    countUp('.js-count-numb');



});
