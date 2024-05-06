const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)



var tl = gsap.timeline()
gsap.from('.detail-img img', {
    opacity: 0,
    scale:0,
    duration: 0.5,
    stagger: 0.7,
    scrollTrigger: {
        trigger: ".detail",
        scroller: 'body',
        markers: true,
        start: 'top 20%',
        end: 'top -30%',
        scrub:2
    }
})
tl.from(" .nav-lft img , .nav-center a , .nav-rht a", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.1

});

tl.from('.top h2', {
    opacity: 0,
    duration: 1,
    stagger: 0.2
}, "once")
tl.from('.top p , .top a', {
    y: 10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    zIndex: 5
})
// tl.from('.bottom img', {
//     y: 100,
//     opacity: 0,
//     duration: 1.5,
//     zIndex: 2
// }, "once")

gsap.from('.hero .bottom img', {
    opacity: 0,
    scale:1.2,
    duration: 0.9,
    ease: "expo.out",
    stagger: 0.7,
    scrollTrigger: {
        trigger: ".hero .bottom",
        scroller: 'body',
        // markers: true,
        start: 'top 32%',
        end: 'top -10%',
        pin:'.hero .top',
        scrub:2
    }
})
