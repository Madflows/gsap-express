gsap.registerPlugin(TextPlugin)
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
