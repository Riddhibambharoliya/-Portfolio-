
$(document).ready(function() {
    
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    
    $('.navbar-collapse a').on('click', function() {
        $('.navbar-collapse').removeClass('show');
    });

    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});


function toggleNavbar() {
    var navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }
}
