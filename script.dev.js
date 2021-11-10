"use strict";

console.log("Watching you 👁👁"); // gsap.to('.case__footer', {
//   scrollTrigger: {
//      trigger: '.case__footer',
//      start: 'top top',
//      markers: true
//   },
//   y: 500,
//   duration: 3
// });

$(function () {
  var $video = $('.video');
  var $window = $(window);
  $window.scroll(function () {
    var $topOfVideo = $video.offset().top;
    var $bottomOfVideo = $video.offset().top + $video.outerHeight();
    var $topOfScreen = $window.scrollTop();
    var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();

    if ($bottomOfScreen > $bottomOfVideo && $topOfScreen < $topOfVideo) {
      $video[0].play();
    } else {
      $video[0].pause();
    }
  });
}); //parallax oasis

function parallax(event) {
  document.querySelectorAll('.oasisParallax').forEach(function (oasisParallax) {
    var _w = window.innerWidth / 2;

    var _h = window.innerHeight / 2;

    var speed = oasisParallax.getAttribute('data-speed');
    oasisParallax.style.transition = "ease in out";
    oasisParallax.style.transform = "translateX(".concat((event.clientX - _w) * speed / 1000, "px) translateY(").concat((event.clientY - _h) * speed / 1000, "px)");
  });
}

document.addEventListener('mousemove', parallax); //gsap oasis preview

gsap.from('.oasis_01', {
  opacity: 0,
  duration: .15,
  ease: 'ease-in-out',
  y: 30
});
gsap.from('.oasis_02', {
  opacity: 0,
  delay: .2,
  duration: 0.2,
  ease: 'ease-in-out',
  y: 50
});
gsap.from('.oasis_03', {
  opacity: 0,
  duration: .3,
  ease: 'ease-in-out',
  delay: .4,
  y: 70
});
gsap.from('.oasis_04', {
  opacity: 0,
  delay: 0.3,
  duration: 0.2,
  ease: 'ease-in-out',
  y: 50
});
gsap.from('.oasis_05', {
  opacity: 0,
  duration: 0.15,
  ease: 'ease-in-out',
  y: 30
});