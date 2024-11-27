let tl = gsap.timeline()
tl.from('.hero__title', {
  opacity: 0,
  y: 150,
  duration: 1,
});
tl.from('.hero__btn', {
  opacity: 0,
  y: 100,
  duration: 1,
}, "-=1");
tl.from(".hero__descr", {
  opacity: 0,
  duration: 0.5,
});
tl.from(".photos-big", {
  opacity: 0,
  scale: 0.8,
  duration: 0.25,
}, "-=0.25");

tl.from(".photos-small_up", {
  opacity: 0,
  scale: 0.8,
  duration: 0.25
});

tl.from(".photos-small_bottom", {
  opacity: 0,
  scale: 0.8,
  duration: 0.25
});

tl.from(".photos__author", {
  opacity: 0,
  duration: 3,
}, "-=0.25" );
