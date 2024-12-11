$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("h1", {
    opacity: 0,
    y: 30,
    duration: 1,
  });

  gsap.utils.toArray("main p").forEach((paragraph) => {
    gsap.from(paragraph, {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: paragraph,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.from(".hero-image", {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero-image",
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });
});
