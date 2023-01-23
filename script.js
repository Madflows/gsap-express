gsap.defaults({ duration: .5, ease: "sine.in" });

// const animation = gsap.timeline({defaults: {scale: 0}});
const animation = gsap.timeline({});

animation
    .from(".slide-bg", {
        xPercent: 100
    })
    .to(".slide-bg", {
        xPercent: -100
    }, "+=1")
    .from(".image", {opacity: 0, yPercent: 100})
    .from(".slide-up", {
        opacity: 0,
        stagger: 0.1,
        yPercent: "-20"
    }, "<")

    GSDevTools.create();
