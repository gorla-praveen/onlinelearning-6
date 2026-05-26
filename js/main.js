(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // WOW Animation
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

    // Dropdown Hover
    const $dropdown = $(".dropdown");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (window.matchMedia("(min-width: 992px)").matches) {

            $dropdown.hover(
                function () {
                    $(this).addClass(showClass);
                    $(this).find(".dropdown-toggle").attr("aria-expanded", "true");
                    $(this).find(".dropdown-menu").addClass(showClass);
                },
                function () {
                    $(this).removeClass(showClass);
                    $(this).find(".dropdown-toggle").attr("aria-expanded", "false");
                    $(this).find(".dropdown-menu").removeClass(showClass);
                }
            );

        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Back To Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);

        return false;
    });

    // Header Carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonial Carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


// ===============================
// ENROLL MODAL
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    // Prevent errors if no form exists
    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            console.log("Form submitted successfully ✔");

            const modalEl = document.getElementById("successModal");

            // Check if modal exists
            if (!modalEl) {
                alert("Modal element not found!");
                return;
            }

            // Bootstrap Modal
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

            modal.show();

            // Reset form after submit
            form.reset();

        });

    }

});