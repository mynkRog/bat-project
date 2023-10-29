function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()
var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+10+"px"
    crsr.style.top = dets.y+10+"px"
})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 17%",
        end:"top 0",
        scrub: 3
    }
})

tl.to(".page1 h1",{
    x:-100,
    color:"#7A1015",
},"a")

tl.to(".page1 h2",{
    x:100,
    color:"#7A1015",
},"a")

tl.to(".page1 video",{
    width:"95%"
},"a")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -90%",
        end:"top -50%",
        scrub: 3
    }
})
tl2.to(".main",{
    backgroundColor:"#fff"
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -180%",
        end:"top -180%",
        scrub: 3
    }
})
tl3.to(".main",{
    backgroundColor: "#0F0D0D",
})

var boxconts = document.querySelectorAll(".boxcont")
boxconts.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            var att = elem.getAttribute("data-image")
            crsr.style.width = "300px"
            crsr.style.height = "300px"
            crsr.style.borderRadius = "0"
            crsr.style.backgroundImage = `url(${att})`
        })
        elem.addEventListener("mouseleave",function(){
            crsr.style.width = "20px"
            crsr.style.height = "20px"
            crsr.style.borderRadius = "50%"
            crsr.style.backgroundImage = `none`
        })
})
var h4 = document.querySelectorAll(".nav h4")
var pur = document.querySelector(".pur")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        pur.style.display="block"
        pur.style.opacity="1"
    })
    elem.addEventListener("mouseleave",function(){
        pur.style.display="none"
        pur.style.opacity="0"
    })
})
