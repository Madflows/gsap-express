gsap.defaults({ ease: "easeInOut", duration: 0.3 });

var animation = gsap.timeline();

animation
  .from(".slide-bg", { xPercent: "100", duration: "0.5" })
  .to(".slide-bg", { xPercent: "-100", duration: "0.5" }, "+=1");

const cta = document.querySelector(".cta");

//create a repeating scale tween
const scaleTween = gsap.to(cta, {
  scale: 1,
  repeat: 15,
  yoyo: true,
  paused: true,
});

//create a repeating scale tween
cta.addEventListener("mouseenter", function () {
  scaleTween.restart();
});

cta.addEventListener("mouseleave", function () {
    scaleTween.pause()
    gsap.to(cta, {scale: 0.8})
});
