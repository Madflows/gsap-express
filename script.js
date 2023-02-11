gsap.defaults({ duration: 1, ease: "easeInOut" });

const cardTL = gsap.timeline({
  defaults: {
    ease: "power",
  },
});

cardTL.from(".card", {
  autoAlpha: 0,
  opacity: 0,
  y: "-10",
  stagger: 0.2
})
