
// $(document).ready(function(){
//     $('.your-class').slick({
//       setting-name: setting-value
//     });
//   });

//arquivo js/slider.js
$(function(){
    $(".slider").slick( {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});