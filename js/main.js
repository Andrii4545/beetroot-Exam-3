// var button = document.getElementById('hamburger-menu'),
//     span = button.getElementsByTagName('span')[0];

// button.onclick =  function() {
//   span.classList.toggle('hamburger-menu-button-close');
// };

// $('#hamburger-menu').on('click', toggleOnClass);

// function toggleOnClass(event) {
//   var toggleElementId = '#' + $(this).data('toggle'),
//   element = $(toggleElementId);

//   element.toggleClass('on');

// }

// // close hamburger menu after click a
// $( '.menu li a' ).on("click", function(){
//   $('#hamburger-menu').click();
// });

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true, 
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false,
    //       autoplay: false,
    //     }
    //   },
      
    // ]
  });
  $('.teams').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true, 
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false,
    //       autoplay: false,
    //     }
    //   },
      
    // ]
  });