const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');


gsap.defaults({ duration: 1, ease: "linear" });


// ===== Timelines =====



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
