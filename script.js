gsap.defaults({ duration: 1, ease: "linear" });


gsap.from(".left", {
    opacity: 0,
    borderRadius: 30,
    stagger: {
        amount: 0.3,
        from: "end"
    }
})

