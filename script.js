let dk = document.getElementById('bcs')
let body = document.querySelector('body')
let header = document.querySelector('header')
let txtdark = document.getElementById('txt-dark')
let txtbright = document.getElementById('txt-bright')
let efeitodark = document.getElementById('escuro2')
let efeitobright = document.getElementById('claro2')
let desap = document.getElementById('desap')
let h1inicio = document.getElementById('h1inicio')
let hrinicio = document.getElementById('linhainicio')
let h5inicio = document.getElementById('h5inicio')
let icondark = document.querySelector('.icondark')
let iconclaro = document.querySelector('.iconclaro')
let icondark2 = document.querySelector('.icondark2')
let iconclaro2 = document.querySelector('.iconclaro2')
let icondark3 = document.querySelector('.icondark3')
let iconclaro3 = document.querySelector('.iconclaro3')
let icondark4 = document.querySelector('.icondark4')
let iconclaro4 = document.querySelector('.iconclaro4')
let descaumenta = document.getElementById('descaumenta')

descaumenta.addEventListener('click', ()=>{
  descaumenta.classList.toggle('aumentado')
})
dk.addEventListener('click', ()=>{
    body.classList.toggle('modo-claro')
    txtdark.classList.toggle('ativado')
    txtbright.classList.toggle('ativado')
    efeitodark.classList.toggle('ativado')
    efeitobright.classList.toggle('ativado')
    icondark.classList.toggle('ativado')
    iconclaro.classList.toggle('ativado')
    icondark2.classList.toggle('ativado')
    iconclaro2.classList.toggle('ativado')
    icondark3.classList.toggle('ativado')
    iconclaro3.classList.toggle('ativado')
    icondark4.classList.toggle('ativado')
    iconclaro4.classList.toggle('ativado')
})
window.addEventListener('scroll', ()=>{
    desap.classList.toggle('scroll', window.scrollY > 20)
    h1inicio.classList.toggle('scroll', window.scrollY > 200)
    hrinicio.classList.toggle('scroll', window.scrollY > 200)
    h5inicio.classList.toggle('scroll', window.scrollY > 200)

    var fadein = document.querySelectorAll('.fadein')

    for(var i = 0; i < fadein.length; i++){
        var windowheigt = window.innerHeight;
        var fadetop = fadein[i].getBoundingClientRect().top; 
        var fadepoint = 150;

        if(fadetop < windowheigt - fadepoint){
            fadein[i].classList.add('active');
        }
        else{
            fadein[i].classList.remove('active');
        }
    }
})
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}