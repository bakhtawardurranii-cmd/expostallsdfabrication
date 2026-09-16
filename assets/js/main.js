(function(){
  "use strict";

  /* Mobile menu toggle */
  var menuBtn = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");
  if(menuBtn && mobileNav){
    menuBtn.addEventListener("click", function(){
      var open = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded","false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Hero image crossfade slider */
  var slides = document.querySelectorAll("#heroSlider .slide");
  var dots = document.querySelectorAll(".hero-dots button");
  var current = 0;
  var heroTimer;

  function showSlide(i){
    slides.forEach(function(s,idx){ s.classList.toggle("active", idx === i); });
    dots.forEach(function(d,idx){
      var isActive = idx === i;
      d.classList.toggle("active", isActive);
      if(isActive){ d.setAttribute("aria-current","true"); } else { d.removeAttribute("aria-current"); }
    });
    current = i;
  }
  function nextSlide(){ showSlide((current + 1) % slides.length); }

  if(slides.length){
    heroTimer = setInterval(nextSlide, 5000);
    dots.forEach(function(d, idx){
      d.addEventListener("click", function(){
        showSlide(idx);
        clearInterval(heroTimer);
        heroTimer = setInterval(nextSlide, 5000);
      });
    });
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
})();
