/* Preloader */
// makes sure the whole site is loaded
jQuery(window).load(function () {
    $('#status').delay(100).fadeOut('slow');
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(500).css({ 'overflow': 'visible' });
});