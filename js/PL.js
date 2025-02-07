const right = document.querySelectorAll('.right');
const left = document.querySelectorAll('.left');
const desc = document.querySelectorAll('.desc');

const tl = new TimelineMax(); 

tl.fromTo(right, 1, {marginRight: "700px"}, {marginRight: "0px", ease: Power2.easeInOut})
.fromTo(left, 1, {marginLeft: "700px"}, {marginLeft: "0xp", ease: Power2.easeInOut}, "-=1")
.fromTo(desc, 1, {opacity: "0"}, {opacity: 1, ease: Power2.easeInOut});