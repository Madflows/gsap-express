gsap.defaults({ duration: 1, ease: "linear" });


gsap.to(".rocket", {
    repeat: -1,
    yoyo: true,
    y: "100",
    borderRadius: 30,
    stagger: {
        each: 0.2,
        from: "center"
    }
})


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
