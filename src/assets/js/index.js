// import '@chenfengyuan/datepicker/dist/datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SCSS/main.scss';
// import 'lightbox2/dist/css/lightbox.css'
// import 'lightbox2/dist/js/lightbox'
// import 'jquery/src/jquery'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import '@popperjs/core';
import Splide from '@splidejs/splide';

import bootstrap from 'bootstrap'

$('#hamburgerMenu').click(function(){
    $('.menu').toggleClass("open");
    $('.ctas').toggleClass("ctas-open");
});