const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');


gsap.defaults({ duration: 1, ease: "linear" });



let animation = gsap.timeline();

// ===== Timelines =====
/* DEMO 
let animation = gsap.timeline();
animation
  .from("#demo", {autoAlpha:0})
  .from("#title", {opacity:0, scale:0, ease:"back"})
  .from("#freds img", {y:160, stagger:0.1, duration:0.8, ease:"back"})
  .from("#time", {xPercent:100, duration:0.2})
*/
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




/*
===== Controlled Tweens =====

var tween = gsap.to(".rocket", {
    repeat: -1,
    yoyo: true,
    yPercent: "100",
    borderRadius: 30,
    stagger: {
        each: 0.2,
        from: "edges"
    }
})

play.addEventListener('click', () => {
    tween.play()
})
pause.addEventListener('click', () => {
    tween.pause()
})
reverse.addEventListener('click', () => {
    tween.reverse()
})
*/




// Yoyo: repeat: -1 makes it loop
/* gsap.to(".rocket", {
    repeat: -1,
    yoyo: true,
    stagger: 1,
    borderRadius: 100,
    y: "100"
}) */


// From To
// gsap.fromTo(
//   ".rocket",
//   {
//     y: "100",
//     borderRadius: "300",
//   },
//   {
//     y: 0,
//     stagger: 1,
//     borderRadius: "10",
//   }
// );
