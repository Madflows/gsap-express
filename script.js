gsap.defaults({ duration: .3, ease: "easeInOut" });

ScrollSmoother.create({
  smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

const cardTL = gsap.timeline({
  defaults: {
    ease: "power",
  },
  // repeat: -1,
  // yoyo: true,
  onComplete: () => {
    console.log("completed");
  },
  onStart: () => {
    console.log("start");
  },
  
});

cardTL
  .from(".card", {
    autoAlpha: 0,
    opacity: 0,
    y: "20",
    stagger: {
      each: 0.8,
    },
  })
  .from(
    ".card p",
    {
      autoAlpha: 0,
      scale: 0.5,
      rotate: 360,
      ease: "power",
      stagger: {
        each: 0.4,
      },
      scrollTrigger: {
        trigger: ".card p",
        markers: true,
        scrub: true,
      },
    },
    "-=.3"
  );

// select all h2's
let headings = document.querySelectorAll("h2");

headings.forEach((heading) => {
  gsap.to(heading, {
    y: 0,
    ease: "power",
    duration: 1,
    scrollTrigger: {
      trigger: heading,
      markers: true,
      scrub: true,
      // Trigger scoller
      start: "top 80%"
    },
  })
})
