$(document).ready(function () {
  $("#egg-rolls img").hover(
    function () {
      $(this).attr("src", "images/egg-rolls-hover.png");
    },
    function () {
      $(this).attr("src", "images/egg-rolls.png");
    }
  );

  $("#wontons img").hover(
    function () {
      $(this).attr("src", "images/wontons-hover.png");
    },
    function () {
      $(this).attr("src", "images/wontons.png");
    }
  );

  $("#egg-dumplings img").hover(
    function () {
      $(this).attr("src", "images/egg-dumplings-hover.png");
    },
    function () {
      $(this).attr("src", "images/egg-dumplings.png");
    }
  );

  $("#fish-balls img").hover(
    function () {
      $(this).attr("src", "images/fish-balls-hover.png");
    },
    function () {
      $(this).attr("src", "images/fish-balls.png");
    }
  );

  $("#sweet-sour-pork img").hover(
    function () {
      $(this).attr("src", "images/sweet-sour-pork-hover.png");
    },
    function () {
      $(this).attr("src", "images/sweet-sour-pork.png");
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("article").forEach((article) => {
  gsap.from(article, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: article,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.from(".hero-image", {
  opacity: 0,
  duration: 1.5,
  y: 30,
});

gsap.from("h1", {
  opacity: 0,
  duration: 1.5,
  y: 30,
  delay: 0.3,
});
