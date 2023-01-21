// ===== Timelines =====
/* DEMO 
let animation = gsap.timeline();
animation
  .from("#demo", {autoAlpha:0})
  .from("#title", {opacity:0, scale:0, ease:"back"})
  .from("#freds img", {y:160, stagger:0.1, duration:0.8, ease:"back"})
  .from("#time", {xPercent:100, duration:0.2})



Timeline Control and Labels
Timelines have the exact same control methods as tween. Since you already know how to play() a tween you already know how to play() a timeline.



You must first create a reference to your timeline like

var animation = gsap.timeline()
 
// later on you can do
animation.play();
animation.pause();
animation.restart();
animation.reverse();
//etc
Labels allow you mark a specific point in time in your timeline. 

You can add a label to a timeline using the add() method


.from("#freds img", {y:160, stagger:0.5, duration:0.8, ease:"back"}, "+=0.5")
.add("test")
.from("#time", {xPercent:100, duration:1, ease:"bounce"});


Practice
1: review the code at: https://codepen.io/snorkltv/pen/oNNwNBr and learn how the "test" button works.

  */

gsap.defaults({ duration: 1, ease: "linear" });

let animation = gsap.timeline();

animation
  .from(".slide-bg", { xPercent: "100", duration: "0.8" })
  .to(".slide-bg", { xPercent: "-100", duration: "0.8" }, "+=1")
  .from("#wrap", { opacity: 0, duration: "0.8" })
  .add("test")
  .from(
    ".rocket",
    {
      opacity: 0,
      borderRadius: "100",
      yPercent: 200,
      repeat: "-1",
      yoyo: true,
    },
    "+=1"
  );

// timeline labels
animation.play("test")
