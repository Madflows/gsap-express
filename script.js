const item = document.querySelector(".item");
const dot = document.querySelector(".dot");
const text = document.querySelector(".text");

gsap.defaults({ ease: "easeInOut", duration: 0.3 });

var animation = gsap.timeline();

animation
  .from(".slide-bg", { xPercent: "100", duration: "0.5" })
  .to(".slide-bg", { xPercent: "-100", duration: "0.5" }, "+=1");

const tl = gsap
  .timeline({
    paused: true,
  })
  .to(".text", { color: "white", x: 10 })
  .to(".dot", {backgroundColor: "#f93", scale:1.5}, 0);

item.addEventListener("mouseenter", () => {
  tl.play();
});
item.addEventListener("mouseleave", () => {
  tl.reverse();
});
