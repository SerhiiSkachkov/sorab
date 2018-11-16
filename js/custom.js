$(window).on('load', function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');


    /* custom vertical scrollbar */
    $('.js-vertical-scroll-modal').each(function () {
        var $el = $(this);
        var $indent = 100;
        if (window.innerWidth < 899) {
            $indent = 60;
        }
        if (window.innerWidth < 639) {
            $indent = 40;
        }
        $el.css('max-height', Math.ceil(window.innerHeight - $el.closest('.modal').find('.modal__head').outerHeight() - $indent - parseFloat($el.closest('.modal').css('padding-bottom')) - parseFloat($el.closest('.modal').css('padding-top'))));
        $el.mCustomScrollbar({
            axis: "y",
            theme: "dark-thin",
            alwaysShowScrollbar: 0,
            mouseWheel: {
                preventDefault: true
            },
            scrollEasing: "linear",
            scrollInertia: 120
        });
        $(window).on('resize orientationChange', function (event) {
            $el.css('max-height', Math.ceil(window.innerHeight - $el.closest('.modal').find('.modal__head').outerHeight() - $indent - parseFloat($el.closest('.modal').css('padding-bottom')) - parseFloat($el.closest('.modal').css('padding-top'))));
        });
    });
    /*End*/


});

/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
};
/* viewport width */


$(function () {
    /* placeholder*/
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    $('.button-nav').click(function () {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });


    /*animate budget*/
    var scroll_top = $(document).scrollTop();
    if ($('.js-budget').length > 0) {
        var offset_this_b = $('.js-budget').offset();
        $(window).scroll(function () {
            scroll_top = $(document).scrollTop();
            if (scroll_top + window.innerHeight / 2 > offset_this_b.top) {
                $('.js-budget').addClass("animated");
            }
        });
        if (scroll_top + window.innerHeight / 2 > offset_this_b.top) {
            $('.js-budget').addClass("animated");
        }
    };
    /*End*/

    if ($('.js-slider-1').length) {
        $('.js-slider-1').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="icon-twitter"></i></div>',
            nextArrow: '<div class="next"><i class="icon-left-open"></i></div>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false
                    }
				},
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				}
			]
        });
    };
    if ($('.js-slider-2').length) {
        $('.js-slider-2').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 639,
                    settings: "unslick"
				}
			]
        });
    };
    $('.js-slider-3').each(function () {
        var $el = $(this),
            $slideCount;
        if ($el.is('.similar-slider')) {
            $slideCount = 3;
        } else {
            $slideCount = 2;
        }
        $el.slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $('.events-arrow'),
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $slideCount,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				},
                {
                    breakpoint: 899,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				},
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				}
			]
        });
    });
    if ($('.js-slider-4').length) {
        $('.js-slider-4').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: false
                    }
				},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false
                    }
				},
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				}
			]
        });
    };
    /*Hidden arrow*/
    /**/

    $('.js-slider-5').each(function () {
        var $el = $(this),
            $appendArrows, $arrows;
        if ($el.is('.js-volounter-slider')) {
            $arrows = true;
            $appendArrows = $el.parent().find('.js-volounter-arrows');
        } else {
            $arrows = false;
            $appendArrows = $('.reviews-arrow');
        }
        $el.slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $appendArrows,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        arrows: $arrows
                    }
				}
			]
        });
    });
    if ($('.js-slider-6').length) {
        $('.js-slider-6').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: "unslick"
				}
			]
        });
    };
    if ($('.js-slider-7').length) {
        $('.js-slider-7').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
        });
    };
    if ($('.js-slider-8').length) {
        $('.js-slider-8').slick({
            dots: false,
            arrows: true,
            speed: 600,
            variableWidth: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 899,
                    settings: "unslick"
				}

			]
        });
        $(window).on('resize orientationChange', function (event) {
            if (window.innerWidth < 900) {
                $('.js-slider-8').slick('refresh');
            }
        });
    }

    $('.js-slider-9').each(function () {
        var $el = $(this),
            $countSlide = 3;
        if ($el.is('.histories')) {
            $countSlide = 2;
        }

        $el.slick({
            dots: false,
            arrows: true,
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: $countSlide,
            slidesToScroll: $countSlide,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                {
                    breakpoint: 899,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false
                    }
				},
                {
                    breakpoint: 639,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				}
			]
        });
    });

    if ($('.js-slider-10').length) {
        $('.js-slider-10').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 4,
            variableWidth: false,
            prevArrow: false,
            nextArrow: '<div class="next-arrow"><div class="next"></div></div>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: false
                    }
				},
                {
                    breakpoint: 799,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false
                    }
				},
                {
                    breakpoint: 639,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        variableWidth: true,
                        dots: false
                    }
				}
			]
        });
    };
    if ($('.js-slider-11').length) {
        initSlick();
    }

    function initSlick() {
        if (window.innerWidth > 991 || window.innerWidth < 640) {
            if ($('.js-slider-11').is('.slick-initialized')) {
                $('.js-slider-11').slick('unslick');
            }

        } else {
            if (!$('.js-slider-11').is('.slick-initialized')) {
                $('.js-slider-11').slick({
                    dots: false,
                    arrows: true,
                    infinite: true,
                    speed: 600,
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    appendArrows: $('.type-participation-arrow'),
                    prevArrow: '<div class="prev"></div>',
                    nextArrow: '<div class="next"></div>',
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                variableWidth: false,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
					},
                        {
                            breakpoint: 899,
                            settings: {

                                slidesToShow: 1,
                                slidesToScroll: 1,
                                variableWidth: true
                            }
					}
				]
                });
            }
        }
    }

    if ($('.js-slider-12').length) {
        $('.js-slider-12').slick({
            dots: false,
            arrows: true,
            speed: 600,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: '<div class="next-arrow"><div class="next"></div></div>',
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            mobileFirst: true,
            responsive: [


                {
                    breakpoint: 639,
                    settings: {
                        infinite: true,
                        variableWidth: false,
                        autoplay: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
				},
                {
                    breakpoint: 899,
                    settings: {
                        infinite: true,
                        variableWidth: false,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
				},
                {
                    breakpoint: 991,
                    settings: "unslick"
				}
			]
        });
    };

    if ($('.js-slider-13').length) {
        $('.js-slider-13').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            appendArrows: $('.success-projects-arrow'),
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				}
			]
        });
    };
    if ($('.js-slider-14').length) {
        $('.js-slider-14').slick({
            dots: false,
            arrows: false,
            speed: 600,
            autoplaySpeed: 7000,
            infinite: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: "unslick"
				}
			]
        });
    };
    if ($('.js-slider-15').length) {

        $('.js-slider-15').slick({
            dots: false,
            appendArrows: $('.team-arrow'),
            arrows: true,
            infinite: false,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                {
                    breakpoint: 899,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false
                    }
				},
                {
                    breakpoint: 639,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				}
			]
        });
    };

    $('.js-slider-16').each(function () {
        var $el = $(this);
        $el.slick({
            dots: false,
            arrows: true,
            speed: 600,
            autoplaySpeed: 10000,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        infinite: true,
                        autoplay: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
				},
                {
                    breakpoint: 639,
                    settings: "unslick"
				}
			]
        });
    });

    if ($('.js-slider-17').length) {
        $('.js-slider-17').slick({
            dots: false,
            arrows: true,
            speed: 600,
            variableWidth: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>'
        });
    }

    if ($('.js-slider-18').length) {
        $('.js-slider-18').slick({
            dots: false,
            arrows: true,
            speed: 600,
            autoplaySpeed: 10000,
            infinite: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.js-slider-19',
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            focusOnSelect: true
        });
    }

    if ($('.js-slider-19').length) {
        $('.js-slider-19').slick({
            dots: false,
            arrows: false,
            speed: 600,
            autoplaySpeed: 10000,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            asNavFor: '.js-slider-18',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 899,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6
                    }
				},
                {
                    breakpoint: 639,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
				}
			]
        });
    }





    /*scroll header */
    if ($('.header-bottom__activity').length > 0) {

        $('.header-bottom__activity').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 7000,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 639,
                    settings: "unslick"
					}
				]
        });
        $(window).resize(function () {
            if (window.innerWidth <= 639) {
                $('.header-bottom__activity').slick('refresh')
            }
        })
    }
    /*scroll header */





    /* tabs	 */
    $('.js-tab-nav').on('click', function () {
        var el = $(this),
            $wrap = el.closest('.js-tab-wrap'),
            $id;
        $id = el.attr('href'),
            $elem = $('' + $id + '');
        $wrap.find('.js-tab-nav').removeClass('active');
        el.addClass('active');
        $wrap.find('.js-tab').removeClass('active').hide();
        if ($id != undefined) {
            $elem.fadeIn(500);
            if ($elem.find('.js-slider-5').length) {
                $elem.find('.js-slider-5').slick('refresh');
            }
        }
        if ($elem.find('.styled').length) {
            $elem.find('.styled').trigger('refresh');
        }
        return false;
    });
    /*End*/





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


    /* styled form */
    if ($('.styled').length) {
        $('.styled').styler();
    };
    /* styled form */


    /* custom horizontal scrollbar */
    if ($('.scroll').length) {
        $(".scroll").mCustomScrollbar({
            axis: "x",
            theme: "dark-thin",
            autoExpandScrollbar: true,
            scrollInertia: 0,
            advanced: {
                autoExpandHorizontalScroll: true
            },
            mouseWheel: {
                preventDefault: true
            }
        });
    };
    /*End*/

    /* custom horizontal scrollbar */
    function teamScrollModal() {
        if ($('.js-horisontal-scroll-mob').length) {
            if (window.innerWidth > 899) {
                $(".js-horisontal-scroll-mob").mCustomScrollbar("destroy");
            } else {
                $(".js-horisontal-scroll-mob").mCustomScrollbar({
                    axis: "x",
                    theme: "dark-thin",
                    autoExpandScrollbar: true,
                    scrollInertia: 0,
                    advanced: {
                        autoExpandHorizontalScroll: true
                    },
                    mouseWheel: {
                        preventDefault: true
                    }
                });
            }
        };
    }
    teamScrollModal();
    $(window).on('resize orientationChange', function (event) {
        teamScrollModal();
        if ($('.js-modal-choice').length > 0 & window.innerWidth > 899) {
            $('.js-modal-choice').css('display', '')
        }
        if ($('.js-modal-form').length > 0 & window.innerWidth > 899) {
            $('.js-modal-form').css('display', '')
        }
        if ($('#filter').length > 0 && !$('#filter').is(':visible') && window.innerWidth > 991) {
            $('#filter').css('display', '');
        }
        if ($('.js-xs-more').length > 0 && window.innerWidth > 639 && $('.js-xs-more').is(':hidden')) {
            $('.js-xs-more').css('display', '');
        }
        if ($('.js-xs-more').length > 0 && window.innerWidth > 991) {
            $('#filters').css('display', '');
        }


    });
    /*End*/



    /*Slider add active */
    $('.projects-slider__item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    /*End*/

    /* Timline add class */
    $('.timeline-box').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    /* End */

    /* Video click */
    $('.video-wraper-play').on('click', function () {
        var $this = $(this),
            container = $this.closest('.video-wrapper');
        container.toggleClass('active');

        $(".video-youtube")[0].src += "?autoplay=1";

    });

    /* End */

    /* pageRequired */
    if ($(".pageRequired").length) {
        var current = 0;

        $.validator.addMethod("pageRequired", function (value, element) {
            var $element = $(element)

            function match(index) {
                return current == index && $(element).parents("#volunteer-step-" + (index + 1)).length;
            }
            if (match(0) || match(1) || match(2)) {
                return !this.optional(element);
            }
            return "dependency-mismatch";
        }, $.validator.messages.required)
    }
    /* pageRequired */

    /* validation form  volunteer-steps */
    if ($("#volunteer-steps").length) {
        var v = $("#volunteer-steps").validate({
            errorClass: "error-message",
            onkeyup: false,
            onfocusout: false,
            rules: {

                checkboxes: {
                    //required: true,
                    //minlength: 1
                    pageRequired: function (elem) {

                        return $("input.form-check:checked").length > 0;
                    }

                }
            },
            messages: {

                checkboxes: "Отметьте 1 навык",
                dateVolunteer: "Это поле должно быть заполнено"

            },
            submitHandler: function () {
                var $href = $('.js-volounter').attr('data-href');
                $.fancybox.open({
                    src: $($href),
                    type: 'inline',
                    opts: {
                        margin: 10,
                        padding: 10,
                        btnTpl: {
                            smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="Закрыть" type="button">' +
                                '<i class="icon-close"></i>' +
                                '</button>'
                        },
                        touch: false,
                        afterShow: function (instance, slide) {
                            var $el = $('.fancybox-container').find(".js-vertical-scroll-modal");
                            $el.css('max-height', Math.ceil(window.innerHeight - $el.closest('.modal').find('.modal__head').outerHeight() - $indent - parseFloat($el.closest('.modal').css('padding-bottom')) - parseFloat($el.closest('.modal').css('padding-top'))));
                            if ($el.length) {
                                $el.css('max-height', Math.ceil(window.innerHeight - $el.closest('.modal').find('.modal__head').outerHeight() - 40 - parseFloat($el.closest('.modal').css('padding-bottom')) - parseFloat($el.closest('.modal').css('padding-top'))));
                                $('.fancybox-container').find(".js-vertical-scroll-modal").mCustomScrollbar("update");
                            }
                            if ($el.find('.js-slider-5').length) {
                                $el.find('.js-slider-5').slick('refresh');
                            }
                        }
                    }
                });
            }
        });
    }

    /* example volounter steps*/
    $('.js-steps-volounter-link').on('click', function () {
        $('.js-steps-volounter').css('display', 'block');
        $('#volunteer-step-1').fadeIn();
        $(this).hide();
        return false;
    });
    $('.js-link-step-2').on('click', function () {
        if (v.form()) {
            $('#volunteer-step-2').fadeIn();
            $(this).closest('.volunteer-step').find('.volunteer-step__row').fadeOut(100);
        }
    });
    $('.js-link-step-3').on('click', function () {
        if (v.form()) {
            $('#volunteer-step-3').fadeIn();
            $(this).closest('.volunteer-step').find('.volunteer-step__row').fadeOut(100);
            if ($('.js-slider-11').length > 0 && $('.js-slider-11').is('.slick-initialized')) {
                $('.js-slider-11').slick('refresh');
            }
            if (window.innerWidth > 639 && window.innerWidth < 900) {
                $('#volunteer-step-1, #volunteer-step-2').css('display', '');
            }
            $(window).resize(function () {
                if (window.innerWidth < 640 || window.innerWidth > 899) {
                    if ($('#volunteer-step-3').is(':visible')) {
                        $('#volunteer-step-1, #volunteer-step-2').css('display', 'block');
                    }
                } else {
                    if ($('#volunteer-step-3').is(':visible')) {
                        $('#volunteer-step-1, #volunteer-step-2').css('display', 'none');
                    }
                }
                initSlick();
            });
        }
    });
    // $('.js-volounter').on('click', function(){

    // 	return false;
    // });

    $('.js-accept-choice').on('click', function () {
        $('.js-modal-choice').hide();
        $('.js-modal-form').show();
        return false;
    });

    /* close steps */
    $('.js-close-steps').on('click', function () {
        $('.js-steps-volounter').slideUp(100, function () {
            $('.js-steps-volounter-link').fadeIn(200);
        });

        return false;
    });
    /* close steps end */



    /* example volounter steps end*/

    /* daterange */
    var todayDate = new Date();
    if ($('.js-date').length > 0) {
        moment.locale('ru');
        $('.js-date').daterangepicker({
            autoUpdateInput: false,
            opens: 'left',
            "showCustomRangeLabel": false,
            'minDate': todayDate,
            "locale": {
                "firstDay": 0,
                "format": "DD MMMM YYYY",
                "separator": " - ",
                "applyLabel": "Готово",
                "cancelLabel": "",
                "fromLabel": "",
                "weekLabel": "W"
            },
        });
        // example click add  link to new daterandepicker
        $('.js-date').on('show.daterangepicker', function (event, data) {
            var $container = data.container;
            if ($('.js-new-date').length == 0) {
                $container.find('.drp-buttons').prepend('<div class="calendar-new-date js-add-newdate">+ Новая дата</div>');
            }
        }).on('hide.daterangepicker', function (event, data) {
            var $container = data.container;
            $container.find('.js-add-newdate').remove();
        }).on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD MMMM YYYY') + ' - ' + picker.endDate.format('DD MMMM YYYY'));
        });
    }
    // example click add new daterandepicker
    $(document).on('click', '.js-add-newdate', function () {

        $(".js-box-field-calendar").after('<div class="box-field-calendar js-box-field-calendar"><input type="text" class="form-control form-control-date js-new-date" placeholder="Дата начала – дата завершения"><i class="icon-calendar"></i></div>');
        $('.js-date').data('daterangepicker').hide();
        $('.js-new-date').daterangepicker({
            autoUpdateInput: false,
            opens: 'left',
            "showCustomRangeLabel": false,
            'minDate': todayDate,
            "locale": {
                "firstDay": 0,
                "format": "DD MMMM YYYY",
                "separator": " - ",
                "applyLabel": "Готово",
                "cancelLabel": "",
                "fromLabel": "",
                "weekLabel": "W"
            },
        }).on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD MMMM YYYY') + ' - ' + picker.endDate.format('DD MMMM YYYY'));
        });
    });
    /* daterange end*/

    /* datepicker */
    if ($('.js-date-single').length) {
        moment.locale('ru');
    }
    $('.js-date-single').each(function () {
        var $el = $(this),
            $minYear = parseFloat($el.attr('data-min'));
        $el.daterangepicker({
            singleDatePicker: true,
            drops: 'up',
            opens: 'left',
            showDropdowns: true,
            minYear: $minYear,
            "locale": {
                "firstDay": 0,
                "format": "DD.MM.YYYY"
            }
        });
    });
    /* datepicker end*/


    /* toggle filters*/
    if ($('.js-filters-nav').length && window.innerWidth < 992) {
        $('.js-filters-nav').on('click', function () {
            $('#filters').fadeToggle();
        });
    }

    /* close mortgage order */
    $('body').on('touchstart click', function (e) {
        if ($('#filters').is(':visible') && window.innerWidth < 992) {
            if ($(e.target).closest('#filters').length || $(e.target).closest('.js-filters-nav').length) {
                return;
            } else {
                $('#filters').fadeOut(300);
            }
        }
    });
    /* toggle filters end*/


    /* init modal */
    $('.js-fancybox').each(function () {
        var $el = $(this);
        if ($el.is('.js-fancy-clear')) {
            $class = 'overlay-dark'
        } else {
            $class = ''
            if ($el.is('.js-fancybox-top')) {
                $class = 'modal-top'
            }
        }
        $el.fancybox({
            margin: 10,
            padding: 10,
            btnTpl: {
                smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="Закрыть" type="button">' +
                    '<i class="icon-close"></i>' +
                    '</button>'
            },
            touch: false,
            baseClass: $class,
            scrolling: "no",
            beforeShow: function (instance, slide) {
                var $el = $('.fancybox-container').find(".js-vertical-scroll-modal"),
                    $href = slide.opts.$orig.attr('data-tab');
                if ($href != undefined) {
                    $('#' + $href + '').trigger('click');
                    $('.js-horisontal-scroll-mob').mCustomScrollbar("scrollTo", $('#' + $href + ''));
                }
            },
            afterShow: function (instance, slide) {
                if ($el.length) {
                    $el.css('max-height', Math.ceil(window.innerHeight - $el.closest('.modal').find('.modal__head').outerHeight() - 40 - parseFloat($el.closest('.modal').css('padding-bottom')) - parseFloat($el.closest('.modal').css('padding-top'))));
                    $('.fancybox-container').find(".js-vertical-scroll-modal").mCustomScrollbar("update");
                }
            },
            clickContent: function (current, event) {
                return current.type === "image" ? false : false;
            }
        });
    });
    /*End*/


    /* focus help form*/
    $('.js-form-help')
        .on('focus', function () {
            $(this).closest('.js-help').addClass('active');
        })
        .on('keypress', function () {
            number();
        })
        .on('blur', function () {
            var $el = $(this);
            if ($el.val() == "") {
                $(this).closest('.js-help').removeClass('active');
            }
        });

    function number() {
        $(this).removeClass('error');
        if (event.keyCode < 48 || event.keyCode > 57) {

            event.returnValue = false;
        }
    }
    /* focus help form*/

    /* mask card*/
    if ($('.js-mask-card').length) {
        $('.js-mask-card').mask('9999 9999 9999 9999');

    }
    /* mask card end*/



    /* way donate*/
    $('.js-choice-way').on('click', function (e) {
        var $href = $(this).attr('href');
        $(this).closest('.js-tab-reward').removeClass('active');
        $($href).addClass('active');
        return false;
    });
    /* way donate end */

    /* show news slider item in mob */
    $('.js-xs-more').on('click', function (e) {
        $(this).closest('.js-xs-wrap').find('.xs-hidden').fadeIn();
        $(this).hide();
        return false;
    });
    /* show news slider item in mob end */


    /* retina images  */
    if ($('.js-img').length) {
        if (window.devicePixelRatio > 1) {
            var lowresImages = $('img.js-img');

            images.each(function (i) {
                var lowres = $(this).attr('src');
                var highres = lowres.replace(".", "@2x.");
                $(this).attr('src', highres);
            });
        }
    }
    /*end*/
});




var handler = function () {

    function equalArrowClass(selector) {
        selector.hasClass('slick-disabled') ? selector.fadeOut() : selector.fadeIn();
    }

    if ($('.js-slider-1').length > 0) {
        $('.js-slider-1').slick('refresh');
        equalArrowClass($('.projects-slider .prev'));
        equalArrowClass($('.projects-slider .next'));
    }

    if ($('.js-slider-4').length > 0) {
        $('.js-slider-4').slick('refresh');
        equalArrowClass($('.team-slider .prev'));
        equalArrowClass($('.team-slider .next'));
    }
    if ($('.js-slider-11').length > 0 && $('.js-slider-11').is('.slick-initialized')) {
        $('.js-slider-11').slick('refresh');
    }
    if ($('.js-slider-12').length && !$('.js-slider-12').is('.slick-initialized') && window.innerWidth < 992) {
        $('.js-slider-12').slick('refresh');
    }
    if ($('.js-slider-16').length > 0 && window.innerWidth > 639) {
        $('.js-slider-16').slick('refresh');
    }

    function arrowDisplay(selector) {
        if (selector.attr('aria-disabled') == 'true') {
            selector.fadeOut();
        } else {
            selector.fadeIn()
        }
    }

    $('.slick-arrow').click(function () {
        arrowDisplay($('.projects-slider .prev'));
        arrowDisplay($('.projects-slider .next'));
        arrowDisplay($('.team-slider .prev'));
        arrowDisplay($('.team-slider .next'));
    });








    var height_footer = $('footer').height();
    var height_header = $('header').height();
    var height_fixed = $('.fixed-block').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;


    /*Header full page */

    if (!$('body').is('.mediapage') && (!$('body').is('.profile'))) {
        $('.header-wrap').css('height', viewport_height);
    }
    /*End*/

    if (viewport_wid <= 767) {
        if ($('.js-slider-6').length) {
            $('.js-slider-6').slick('refresh');
        }
    }
    if (viewport_wid <= 639) {
        if ($('.js-slider-2').length) {
            $('.js-slider-2').slick('refresh');
        }
    }

    var scroll_top;
    /*Fixed menu*/
    if ($('.fixed-block').length) {
        var offset_this = parseFloat($('.fixed-nav-block').offset().top);

        $(window).scroll(function () {
            scroll_top = $(document).scrollTop();
            if (offset_this <= scroll_top) {
                $('.fixed-block').addClass("fixed");
            } else {
                $('.fixed-block').removeClass("fixed")
            }
        });
        if (offset_this <= scroll_top) {
            $('.fixed-block').addClass("fixed");
        } else {
            $('.fixed-block').removeClass("fixed")
        }
    };
    /*End*/

    /*Scroll menu*/
    var menu_selector = ".nav.fixed-block.fixed"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
    function onScroll() {
        scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function () {
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top + 106 && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    var shown = false;

    function count_once() {
        shown = true;
    }

    $(window).resize(function () {
        count_once()
    })



    $(document).on("scroll", onScroll);
    $('.nav-list-link').click(function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash),
            topOfset;

        viewport_wid <= 767 ?
            topOfset = 90 : topOfset = 106;
        var trg = target.offset().top - topOfset;
        $("html, body").stop(true, true).animate({
            scrollTop: trg
        }, 1000, function () {
            $(document).on("scroll", onScroll);
        });
    });
    /*End*/


    /*sticky aside*/
    if ($('.js-stickly').length > 0 && window.innerWidth > 639) {
        var $offTop = $('.nav.fixed-block').outerHeight() + 30;
        $(".js-stickly").stick_in_parent({
            offset_top: $offTop
        });
    }
    /*End*/

    if (window.innerWidth < 900) {
        $('header .wrapper').css('width', $('body').innerWidth());
        $('.header-bottom').css('max-width', $('body').innerWidth() - parseFloat($('header .wrapper').css('padding-left')) - parseFloat($('header .wrapper').css('padding-right')));
    } else {
        $('.header-bottom').css('max-width', '');
        $('header .wrapper').css('width', '');
    }

    if ($('.js-slider-20').length) {
        initSlick2();
    }

    function initSlick2() {
        if (window.innerWidth > 899 || window.innerWidth < 640) {
            if ($('.js-slider-20').is('.slick-initialized')) {
                $('.js-slider-20').slick('unslick');
            }

        } else {
            if (!$('.js-slider-20').is('.slick-initialized')) {
                $('.js-slider-20').slick({
                    dots: false,
                    arrows: false,
                    infinite: false,
                    autoplay: true,
                    speed: 600,
                    autoplaySpeed: 7000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }
        }
    }

    if ($('.js-slider-21').length) {
        $('.js-slider-21').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $('.media__arrow'),
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
				},
                {
                    breakpoint: 639,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        appendArrows: $('.media__arrow'),
                        prevArrow: '<div class="prev"></div>',
                        nextArrow: '<div class="next"></div>',
                    }
				},

			]
        });
    }

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
            nextArrow: '<div class="next"></div>',
            //            responsive: [
            //                {
            //                    breakpoint: 991,
            //                    settings: {
            //                        slidesToShow: 3,
            //                        slidesToScroll: 1,
            //                        infinite: true,
            //                        dots: false
            //                    }
            //				},
            //                {
            //                    breakpoint: 899,
            //                    settings: {
            //                        slidesToShow: 2,
            //                        slidesToScroll: 1,
            //                        infinite: true,
            //                        dots: false
            //                    }
            //				},
            //                {
            //                    breakpoint: 640,
            //                    settings: {
            //                        slidesToShow: 1,
            //                        slidesToScroll: 1,
            //                        infinite: true,
            //                        dots: false
            //                    }
            //				}
            //			]
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
}


$(window).resize(function () {
    $('.slick-slider').slick('refresh');
})
$(window).resize(function () {
    if (window.innerWidth < 1200) {
        $('.js-slider-23').slick('refresh');
    }
})

$(window).resize(function () {
    if (window.innerWidth < 639) {
        $('.js-slider-24').slick('refresh');
    }
})

if ($('.profile-info__info-text p').length) {
    $('.profile-info__info-text p').ellipsis({
        lines: 3
    });
}

if ($('.social__person-caption span').length) {
    $('.social__person-caption span').ellipsis({
        lines: 1
    });
}

$(window).bind('load', handler);
$(window).bind('resize', handler);

$(window).scroll(function () {
    var val = $('.nav-list-link.active');

    $('.nav-list-wrap.scroll').mCustomScrollbar("scrollTo", val);

});
