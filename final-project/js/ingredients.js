$(document).ready(function () {
  $(".multiply").click(function () {
    console.log("hello");
    $(".multiply").removeClass("active");
    $(this).addClass("active");

    const multiplier = parseFloat($(this).data("multiply"));

    $(".amount").each(function () {
      const baseAmount = parseFloat($(this).data("base"));
      $(this).text((baseAmount * multiplier).toFixed(2));
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("main > p", {
    opacity: 0,
    y: 20,
    duration: 1,
  });

  gsap.from(".recording-section", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.3,
  });

  const tl = gsap.timeline();

  tl.from(".recipe-hero-image", {
    opacity: 0,
    duration: 1.5,
    y: 30,
  });

  tl.from(
    ".recipe-header-content",
    {
      opacity: 0,
      duration: 1.5,
      y: 30,
    },
    "-=1"
  );

  gsap.from(".ingredients", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: ".ingredients",
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".instructions", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".instructions",
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });

  gsap.utils.toArray("ol li").forEach((li) => {
    gsap.from(li, {
      opacity: 0,
      x: 30,
      duration: 1,
      scrollTrigger: {
        trigger: li,
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
      },
    });
  });
});
