// Menu burger
const burger = document.querySelector(".hamburger");
const navi = document.querySelector("nav")
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navi.classList.toggle('active');
})

function addBg() {
    const scrollHeight = window.scrollY;
    const sectionDistance = document.querySelector('header').offsetTop
    const sectionHeight = document.querySelector('header').clientHeight
    if (scrollHeight > sectionDistance + sectionHeight - 100) {
        navi.classList.add('grey')
    } else {
        navi.classList.remove('grey')
    }
}
window.addEventListener('scroll', addBg)

const preloaderEl = document.querySelector('#preloader')

setTimeout(function () {
    preloaderEl.classList.add('preloader-hiding');
    preloaderEl.addEventListener('transitionend', function () {
        this.classList.add('preloader-hidden');
        this.classList.remove('preloader-hiding');
    });
}, 2500);

//Safari
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
   document.getElementsByTagName("header")[0].className += " safari";
}