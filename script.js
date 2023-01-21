// ===== Timelines =====
/* DEMO 
let animation = gsap.timeline();
animation
  .from("#demo", {autoAlpha:0})
  .from("#title", {opacity:0, scale:0, ease:"back"})
  .from("#freds img", {y:160, stagger:0.1, duration:0.8, ease:"back"})
  .from("#time", {xPercent:100, duration:0.2})
*/

gsap.defaults({ duration: 1, ease: "linear" });

let animation = gsap.timeline();

animation
  .from(".slide-bg", { xPercent: "100", duration: "0.8" })
  .to(".slide-bg", { xPercent: "-100", duration: "0.8" }, "+=1")
  .from("#wrap", { opacity: 0, duration: "0.8" })
  .from(
    ".rocket",
    {
      opacity: 0,
      scale: 0,
      yPercent: 100,
      repeat: "-1",
      yoyo: true,
    },
    "+=1"
  )
  .from(
    ".btn-group",
    {
      opacity: 0,
      scaleX: 0,
      duration: "0.4",
    },
    "<"
  );
