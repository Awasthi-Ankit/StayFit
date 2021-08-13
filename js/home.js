// animation 
gsap.from(".welcome-image-wraper", {
    opacity: 0,
    duration: 1,
    x: -100,
    delay: 0.5
});
gsap.from(".welcome-text-wraper", {
    opacity: 0,
    duration: 1,
    y: -50,
    delay: 0,

});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".my-section"
    }

});
// animation