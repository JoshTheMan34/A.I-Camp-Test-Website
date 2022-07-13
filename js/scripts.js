

        (function($) { "use strict";

        //Switch dark/light
        
        $(".switch").on('click', function () {
            if ($("body").hasClass("light")) {
                $("body").removeClass("light");
                $(".switch").removeClass("switched");
            }
            else {
                $("body").addClass("light");
                $(".switch").addClass("switched");
            }
        });
            
        $(document).ready(function(){"use strict";
        
            //Scroll back to top
            
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);	
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });				
            jQuery('.progress-wrap').on('click', function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
            
            
        });
        
    })(jQuery);





/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});



$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

//// Scroll Trigger ////

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
  });
  }

  function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
  }

  document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
  });
  });






  //// Scroll Trigger End ////

    gsap.registerPlugin(ScrollTrigger);

        const pageContainer = document.querySelector(".container1");

        /* SMOOTH SCROLL */
        const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true
        });

        scroller.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
            return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
            };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed"
        });

        ////////////////////////////////////
        ////////////////////////////////////
        window.addEventListener("load", function () {
        let pinBoxes = document.querySelectorAll(".pin-wrap > *");
        let pinWrap = document.querySelector(".pin-wrap");
        let pinWrapWidth = pinWrap.offsetWidth;
        let horizontalScrollLength = pinWrapWidth - window.innerWidth;

        // Pinning and horizontal scrolling

        gsap.to(".pin-wrap", {
            scrollTrigger: {
            scroller: pageContainer, //locomotive-scroll
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            // anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth
            },
            x: -horizontalScrollLength,
            ease: "none"
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

        ScrollTrigger.refresh();
        });








        

	
        

