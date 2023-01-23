gsap.config({ trialWarn: false });
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);

// LETTER BY LETTER ANIMATION
let split;
let animation = gsap.timeline({});

function init() {
  gsap.set(".wrapper", { autoAlpha: 1 });
  split = new SplitText("h2", { type: "chars,words" });
  // console.log(split)
  animation.from(split.chars, {
    opacity: 0,
    stagger: 0.05,
    y: 50,
    ease: "back(4)",
  });
  GSDevTools.create({ animation: animation });
}

window.addEventListener("load", init);

/* 
=== TYPEWRITER ANIMATION ===

gsap.defaults({ duration: 3, ease: "power1.in"});

let animation = gsap.timeline();

animation
  .to("h2", {
    text: "Code Designer",
    repeat: "1",
    yoyo: true,
  })
  .to("h2", {
    text: "Folarin Lawal",
    repeat: "1",
    yoyo: true,
  });

*/
