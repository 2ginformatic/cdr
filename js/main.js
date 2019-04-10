// Particle JS
jQuery(document).ready(function () {

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', '/cdr/assets/particles/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });

  // Accordion
  let acc = document.getElementsByClassName("acc");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("acc-active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // Smooth scrolling
  $('#smooth-crool').click(function () {
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
  }, 1500);
  return false;
  });

  // Slick sliders
  function StartSlider() {
    $('.sl-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false,
      adaptiveHeight: true
      });
  }

  setTimeout(StartSlider, 5000)

  // fancyBox options
  $('[data-fancybox="gallery"]').fancybox({
    loop: true
  });

  // TwentyTwenty
  $(function(){
    $("#bef_1").twentytwenty({
      no_overlay: true, //Do not show the overlay with before and after
      click_to_move: true // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });
  });

});

// Music btn
$(function() {
  let mus_btn = $(".main-music_link");
  $(window).scroll(function() {
      let scroll = $(window).scrollTop();

      if (scroll >= 100) {
          mus_btn.addClass("main-music_active");
      } else {
          mus_btn.removeClass("main-music_active");
      }
  });
});

// Music volume
// let mus_v1 = document.getElementById("music-vol1");
// let mus_v2 = document.getElementById("music-vol2");
// mus_v1.volume = 0.3;
// mus_v2.volume = 0.3;