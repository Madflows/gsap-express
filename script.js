gsap.config({ trialWarn: false });
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);


// WOrd by Word Animation -GSAP

let split;
let animation = gsap.timeline({});
let  charSplit = new SplitText("h2", { type: "chars,words" });


function init() {
  gsap.set(".wrapper", { autoAlpha: 1 });
  split = new SplitText("h2", { type: "chars,words" });
  // console.log(split)
  animation.from(split.words, {
    opacity: 0,
    rotate: "95deg",
    scale: 0,
    stagger: 0.15,
    ease: "back(2)",
  })
  .from(split.chars, {
    scale: 0.7,
    stagger: 0.05,
    ease: "back(2)"
  }, "-=1");
  GSDevTools.create({ animation: animation });
}

let chars = charSplit.chars;

chars.forEach((char) => {
    char.addEventListener("mouseover", () => {
        gsap.to(char,{
            scale: 1.3,
            y: 10,
            ease: "back(2)"
        })
    })
    char.addEventListener("mouseover", () => {
        gsap.to(char,{
            scale: 1.0,
            y: 0,
            ease: "back(2)"
        })
    })
})


window.addEventListener("load", init);



































// // LETTER BY LETTER ANIMATION
// let split;
// let animation = gsap.timeline({});

// function init() {
//   gsap.set(".wrapper", { autoAlpha: 1 });
//   split = new SplitText("h2", { type: "chars,words" });
//   // console.log(split)
//   animation.from(split.chars, {
//     opacity: 0,
//     stagger: 0.05,
//     y: 50,
//     ease: "back(4)",
//   });
//   GSDevTools.create({ animation: animation });
// }

// window.addEventListener("load", init);

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
