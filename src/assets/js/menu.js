import $ from "jquery";

$( "#dzban" ).mouseenter(function() {
    $( "#pdzban" ).addClass( "show" );
    $( "#pbutelka" ).removeClass( "show" );
    $( "#pfiltr" ).removeClass( "show" );
    $( "#pakcesoria" ).removeClass( "show" );
    $( "#pmarek" ).removeClass( "show" );
});

$( "#butelka" ).mouseenter(function() {
    $( "#pbutelka" ).addClass( "show" );
    $( "#pdzban" ).removeClass( "show" );
    $( "#pfiltr" ).removeClass( "show" );
    $( "#pakcesoria" ).removeClass( "show" );
    $( "#pmarek" ).removeClass( "show" )
});

$( "#filtr" ).mouseenter(function() {
    $( "#pfiltr" ).addClass( "show" );
    $( "#pdzban" ).removeClass( "show" );
    $( "#pbutelka" ).removeClass( "show" );
    $( "#pakcesoria" ).removeClass( "show" );
    $( "#pmarek" ).removeClass( "show" )
});

$( "#akcesoria" ).mouseenter(function() {
    $( "#pakcesoria" ).addClass( "show" );
    $( "#pdzban" ).removeClass( "show" );
    $( "#pbutelka" ).removeClass( "show" );
    $( "#pfiltr" ).removeClass( "show" );
    $( "#pmarek" ).removeClass( "show" )
});

$( "#marek" ).mouseenter(function() {
    $( "#pmarek" ).addClass( "show" );
    $( "#pdzban" ).removeClass( "show" );
    $( "#pbutelka" ).removeClass( "show" );
    $( "#pfiltr" ).removeClass( "show" );
    $( "#pakcesoria" ).removeClass( "show" )
});

let didScroll;
let lastScrollTop = 0;
let scrollOffset = 5;
let navbar = document.getElementById("navbario");
let subnavbar = document.getElementById("subnavbario");
let hovermenu = document.getElementsByClassName("zdropdown")
let navbarHeight = navbar.offsetHeight;
let windowHeight = window.innerHeight;
let docHeight = document.documentElement.scrollHeight;

window.addEventListener("scroll", () => {
    didScroll = true;
});

setInterval(() => {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

const hasScrolled = () => {
    // Make sure `scroll` is compatible with all browsers
    let scroll = window.scrollY || window.pageYOffset || document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0);

    if (Math.abs(lastScrollTop - scroll) <= scrollOffset) {
        return;
    }

    if (scroll > lastScrollTop && scroll > navbarHeight) {
        navbar.classList.add("hiden");
        subnavbar.classList.add("zhiden");
        // hovermenu.classList.remove('hactive');
    } else {
        if (scroll + windowHeight < docHeight) {
            navbar.classList.remove("hiden");
            subnavbar.classList.remove("zhiden");
        }
    }
    lastScrollTop = scroll;
};

window.addEventListener("scroll", () => {
    if ($("#navbario").hasClass("hiden")) {
        $(".zdropdown").removeClass("hactive");
        $("#mobilemenio").removeClass("openmenu");
    }
});

