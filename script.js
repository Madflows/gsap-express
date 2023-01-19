gsap.defaults({ duration: 1 });

gsap.to(".rocket", {
  y: "100",
  fill: "green",
  stagger: 1,
  borderRadius: "300",
});
