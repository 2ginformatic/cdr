// Particle JS
jQuery(document).ready(function () {

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'assets/particles/particlesjs-config.json', function () {
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
  $('a').click(function () {
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
  }, 1500);
  return false;
  });

  //Slick sliders
  $('.sl-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  adaptiveHeight: true
  });

});