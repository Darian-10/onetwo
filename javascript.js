const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".uiimage",
    start: "-60 center",
    end: "center 100",
    scrub: 1,
    markers: false,
  },
});
tl.to(".uiimage", {
  rotateX: "0deg",
  duration: true,
});
