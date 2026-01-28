/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";


/* 
	lenis-smooth-scroll-activation
*/
const lenis = new Lenis({
	duration: 1, 
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
});
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
$('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 

	const target = $(this.getAttribute('href')); 

	if (target.length) {
		lenis.scrollTo(target[0], {
			duration: 1.2, 
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		});
	}
});


gsap.config({
	nullTargetWarn: false,
});

/* 
	sticky-header-function
*/

function waStickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.wa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('wa_sticky');
      } else {
        $header.removeClass('wa_sticky');
        $header.removeClass('wa_sticky_show');
      }

      if ($header.hasClass('wa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('wa_sticky_show');
        } else {
          $header.removeClass('wa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

waStickyHeader();

/* 
	header-3-sticky-function
*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 100){
	$('.as-header-3-area').addClass('has-sticky');
	}
	else{
	$('.as-header-3-area').removeClass('has-sticky');
	}
});



/* 
	offcanvas-function
*/

$('.offcanvas_toggle').on('click', function() {
    $('.wa-overly, .offcanvas_box_active').addClass('active');
});

$('.wa-overly, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});

$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active'); 
    $('.wa-overly').removeClass('active'); 
});


/* 
	mobile-dropdown-function
*/

jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


/* 
	search-popup-function
*/

$('.search_btn_toggle').on('click', function() {
    $('.wa-overly, .search_box_active').addClass('active');
});

$('.wa-overly, .search_box_close').on('click', function() {
    $('.search_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.search_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});




/* 
	windows-load-function
*/


window.addEventListener('load', function(){


	if (document.querySelectorAll(".sk-loader").length) {
		const loader = document.querySelector(".sk-loader");
		
		setTimeout(() => {
			loader.classList.add("loaded");
			afterPreloader();
		});
		setTimeout(function () {
			loader.remove();
		}, 1500);

	} else {
		afterPreloader();
	}

	afterPageLoad();

})


CustomEase.create("ease1", ".18,.82,.41,1");
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/* 
	after-preloader-start
*/
function afterPreloader() {


	/* 
		only-LTR-direction
	*/
	if (getComputedStyle(document.body).direction !== "rtl") {

		
		// section-title-animation-1
		document.querySelectorAll(".wa_title_spilt_1").forEach((atEl) => {
			const atSplit = new SplitText(atEl, {
				type: "words,chars",
				wordsClass: "word",
				charsClass: "char"
			});

			let atDuration = parseFloat(atEl.getAttribute("data-speed")) || .7;
			let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

			if (window.innerWidth <= 768) {
				atDuration = atDuration * 0.3; 
			}

			gsap.set(atSplit.words, {
				willChange: "transform",
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.set(atSplit.chars, {
				willChange: "transform",
				opacity: 0,
				rotateX: -80,
				transformOrigin: "center center -10px"
			});

			gsap.set(atEl, {
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.to(atSplit.chars, {
				scrollTrigger: {
					trigger: atEl,
					start: "top 80%",
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				rotateX: 0,
				duration: atDuration,
				delay: atDelay,
				ease: "ease1",
				stagger: {
					each: 0.05,
					from: "center",
					grid: "auto",
				},
			});
		});


		document.querySelectorAll(".wa_split_2").forEach((atEl) => {
			const atSplit = new SplitText(atEl, {
				type: "words,chars",
				wordsClass: "word",
				charsClass: "char"
			});

			let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 1;
			let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

			if (window.innerWidth <= 768) {
				atDuration = atDuration * 0.3; 
			}

			gsap.set(atSplit.words, {
				willChange: "transform",
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.set(atSplit.chars, {
				willChange: "transform",
				opacity: 0,
				yPercent: 100,
				transformOrigin: "center center -10px"
			});

			gsap.set(atEl, {
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.to(atSplit.chars, {
				scrollTrigger: {
					trigger: atEl,
					start: "top 80%",
				},
				opacity: 1,
				yPercent: 0,
				duration: atDuration,
				delay: atDelay,
				ease: "power3.out",
				stagger: {
					each: 0.05,
					from: "center",
					grid: "auto",
				},
			});
		});

		document.querySelectorAll(".wa_split_3").forEach((atEl) => {
			const atSplit3 = new SplitText(atEl, {
				type: "words,chars",
				wordsClass: "word",
				charsClass: "char"
			});

			let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 1;
			let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

			if (window.innerWidth <= 768) {
				atDuration = atDuration * 0.3; 
			}


			gsap.set(atSplit3.chars, {
				opacity: 0,
			});


			gsap.to(atSplit3.chars, {
				scrollTrigger: {
					trigger: atEl,
					start: "top 80%",
				},
				opacity: 1,
				duration: .3,
				delay: atDelay,
				ease: "power3.out",
				stagger: 0.05,
			});
		});

		if($('.wa_split_left').length) {
			var wa_split_left = $(".wa_split_left");

			if(wa_split_left.length == 0) return; gsap.registerPlugin(SplitText); wa_split_left.each(function(index, el) {
			
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
			
				if( $(el).hasClass('wa_split_left') ){
					gsap.set(el.split.chars, {
						x: -680,
					});
				}
			
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						toggleActions: 'play none none reverse',
						markers: false,
					},
			
					x: 0,
					opacity: 1,
					ease: "ease1",
					duration: .4,
					stagger: -0.1,
				});
			
			});
		}

		document.querySelectorAll(".wa_split_4").forEach((atEl) => {
			const atSplit3 = new SplitText(atEl, {
				type: "words,chars",
				wordsClass: "word",
				charsClass: "char"
			});

			let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 1;
			let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

			if (window.innerWidth <= 768) {
				atDuration = atDuration * 0.3; 
			}


			gsap.set(atSplit3.words, {
				opacity: 1,
				yPercent: 100,
			});


			gsap.to(atSplit3.words, {
				scrollTrigger: {
					trigger: atEl,
					start: "top 80%",
				},
				yPercent: 0,
				opacity: 1,
				duration: .3,
				delay: atDelay,
				ease: "power3.out",
				stagger: 0.1,
			});
		});


		const wa_bg_position = new SplitText(".wa_split_clr_1", { type: "lines" });
		wa_bg_position.lines.forEach((target) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				duration: 3,
				scrollTrigger: {
					trigger: target,
					scrub: false,
					start: 'top 85%',
					end: "bottom center"
				}
			});
		});

		const wa_bg_position2 = new SplitText(".wa_split_clr_2", { type: "lines" });
		wa_bg_position2.lines.forEach((target) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				duration: 3,
				scrollTrigger: {
					trigger: target,
					scrub: false,
					start: 'top 85%',
					end: "bottom center"
				}
			});
		});
	}	


	// hero-4-animation
	let skHero4tl = gsap.timeline();
		
	skHero4tl.from(".sk-hero-4-img-wrap .bg-illus-1 img", { delay: .5, rotation: -360, opacity: 0, duration: 1, ease: "ease1" });
	skHero4tl.from(".sk-hero-4-img", { scale: 0, duration: .5, ease: "ease1" },"<70%");
	skHero4tl.from(".sk-hero-4-img-shadow", { scale: 0, duration: .5, ease: "ease1" },"<50%");
	skHero4tl.from(".sk-hero-4-chat-popup:nth-of-type(2)", { y: 30, opacity: 0, duration: .5, ease: "ease1" },"<50%");
	skHero4tl.from(".sk-hero-4-chat-popup:nth-of-type(3)", { y: 30, opacity: 0, duration: .5, ease: "ease1" },"<50%");

	let skHero4tl2 = gsap.timeline();
	skHero4tl2.from(".sk-hero-4-rainbow svg .svg-line-4", { delay: .5, rotateX: 79, y: 20, opacity: 0, duration: .5, ease: "ease1", });
	skHero4tl2.from(".sk-hero-4-rainbow svg .svg-line-3", {  y: 40, rotateX: 79, opacity: 0, duration: .5, ease: "ease1", },"<40%");
	skHero4tl2.from(".sk-hero-4-rainbow svg .svg-line-2", {  y: 60, rotateX: 79, opacity: 0, duration: .5, ease: "ease1", },"<40%");
	skHero4tl2.from(".sk-hero-4-rainbow svg .svg-line-1", {  y: 80, rotateX: 79, opacity: 0, duration: .5, ease: "ease1", },"<40%");

	// hero-7-tl
	let skHero7tl = gsap.timeline();
	skHero7tl.from(".sk-hero-7-img", { rotate: -80, duration: 1, ease: "ease1", });

/* 
	after-preloader-end
*/
}






/* 
	after-page-load-start
*/
function afterPageLoad() {

	/* 
		add-active-class
	*/
	const waAddClass = gsap.utils.toArray('.wa_add_class');
	waAddClass.forEach(waAddClassItem => {
		gsap.to(waAddClassItem, {
			scrollTrigger: {
				trigger: waAddClassItem,
				start: "top 90%",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				toggleClass: "active",
				once: true,
				markers: false,
			}
		});
	});



	/* 
		wow-activation
	*/
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       50,
			mobile:       true,
			live:         true
		});
		wow.init();
	};

/* 
	after-page-load-start
*/
}


// wa-bg-parallax
gsap.utils.toArray(".wa_parallax_bg").forEach(element => {
	gsap.fromTo(
		element,
		{ backgroundPosition: "50% 0%" }, 
		{ 
			backgroundPosition: "50% 100%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: 1,    
				markers: false,  
			},
		}
	);
});

// wa-parallax-img
gsap.utils.toArray(".wa_parallax_img").forEach(element => {
	gsap.fromTo(
		element,
		{ objectPosition: "50% 110%" }, 
		{ 
			objectPosition: "50% 0%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: true,    
				markers: false,     
			},
		}
	);
});

// wa_zoomOut_img
gsap.utils.toArray(".wa_zoomOut_img").forEach(wa_zoomOut_img => {
	gsap.fromTo(
		wa_zoomOut_img,
		{ scale: 1.15 }, 
		{ 
			scale: 1, 
			ease: "power1.inOut",
			duration: .5,
			scrollTrigger: {
				trigger: wa_zoomOut_img,
				start: "top 70%",
				markers: false,     
			},
		}
	);
});






// hero-1-dot-animation
gsap.fromTo(".sk-hero-1-bottom-dot path",
    {
        y: 100,
        opacity: 0
    },
    {
        y: -100,
        opacity: 0,
        duration: 5,
        ease: "power1.inOut",
        stagger: {
            each: 0.09,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);

// hero-1-scroll-img-animation
if (window.matchMedia("(min-width: 1200px)").matches) {  
	let skHero1img = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-hero-1-area",
			start: "top 0", 
			end: "bottom bottom",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});
	
	skHero1img.from(".sk-hero-1-db-img-single.img-1", { x: -530, y: -780, rotation: -21, });
	skHero1img.from(".sk-hero-1-db-img-single.img-4", { x: -960, y: -690, rotation: -15, },"<");
	skHero1img.from(".sk-hero-1-db-img-single.img-7", { x: -1080, y: -647, rotation: -12, },"<");
	skHero1img.from(".sk-hero-1-db-img-single.img-3", { x: 748, y: -830, rotation: 20, },"<");
	skHero1img.from(".sk-hero-1-db-img-single.img-6", { x: 370, y: -621, rotation: -11, },"<");
	skHero1img.from(".sk-hero-1-db-img-single.img-2", { x: 1050, y: -330, rotation: 29, },"<");
	skHero1img.from(".sk-hero-1-db-img-single.img-8", { x: 130, y: -650, rotation: -61, },"<");
	skHero1img.from(".sk-hero-1-db-img-single.img-5", { x: 70, y: -310, rotation: 9, },"<");
}

// hero-1-glow-1
let skHero1img = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-hero-1-bottom-glow-2",
		start: "top -20%", 
		end: "bottom bottom",
		toggleActions: "play none none reverse",
		scrub: true,
		markers: false,
	},
});

skHero1img.from(".sk-hero-1-bottom-glow-2", { opacity: 0, });

// features-1-svg-1
let skFeatures1svg1 = gsap.timeline({
	repeat: -1,
	repeatDelay: 3,

	scrollTrigger: {
		trigger: ".sk-features-1-item-svg-1",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

skFeatures1svg1.from(".sk-features-1-item-svg-1 .path-14", { opacity: 0, duration: .3, ease: "ease1" });
skFeatures1svg1.from(".sk-features-1-item-svg-1 .path-15", { opacity: 0, duration: .3, ease: "ease1" });
skFeatures1svg1.from(".sk-features-1-item-svg-1 .path-16", { opacity: 0, duration: .3, ease: "ease1" });
skFeatures1svg1.from(".sk-features-1-item-svg-1 .path-17", { opacity: 0, duration: .3, ease: "ease1" });
skFeatures1svg1.from(".sk-features-1-item-svg-1 .path-18", { opacity: 0, duration: .3, ease: "ease1" });
skFeatures1svg1.from(".sk-features-1-item-svg-1 .path-19", { opacity: 0, duration: .3, ease: "ease1" });
skFeatures1svg1.fromTo(".sk-features-1-item-svg-1 .path-13", { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1.5, ease: "ease1" },{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"});
skFeatures1svg1.fromTo(".sk-features-1-item-svg-1 .path-12", { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1.5, ease: "ease1" },{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"});
skFeatures1svg1.from(".sk-features-1-item-svg-1 .path-4", { scaleY: 0, duration: .5, ease: "ease1" });
skFeatures1svg1.from(".sk-features-1-item-svg-1 .path-21, .sk-features-1-item-svg-1 .path-22, .sk-features-1-item-svg-1 .path-20-glow, .sk-features-1-item-svg-1 .path-20-glow-2, .sk-features-1-item-svg-1 .path-20-glow-3, .sk-features-1-item-svg-1 .path-20-glow-4", { opacity: 0, duration: .5, ease: "ease1" });



// features-1-svg-dot
const paths = document.querySelectorAll('.sk-features-1-item-2 .dot-svg path');
	paths.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});

// features-1-svg-2
let skFeatures1svg2 = gsap.timeline({
	repeat: -1,
	repeatDelay: 3,

	scrollTrigger: {
		trigger: ".sk-features-1-item-3-img-1",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-1", { opacity: 0, duration: .5, ease: "ease1" });

skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-3", { opacity: 0, duration: .5, ease: "ease1" });
skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-4", { opacity: 0, duration: .5, ease: "ease1" });
skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-5", { opacity: 0, duration: .5, ease: "ease1" });
skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-6", { opacity: 0, duration: .5, ease: "ease1" });
skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-2", { opacity: 0, duration: .5, ease: "ease1" });
skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-7", { opacity: 0, duration: .5, ease: "ease1" });
skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-8", { opacity: 0, duration: .5, ease: "ease1" });
skFeatures1svg2.from(".sk-features-1-item-3-img-1 svg .path-9", { opacity: 0, duration: .5, ease: "ease1" });



// features-1-svg-3
let skFeatures1svg3 = gsap.timeline({
	repeat: -1,
	repeatDelay: 3,

	scrollTrigger: {
		trigger: ".sk-features-1-item-3-img-2",
		toggleActions: "play none none reverse",
		markers: false,
	},
});
skFeatures1svg3.from(".sk-features-1-item-3-img-2 svg .path-4", { opacity: 0, y: 10, duration: .5, ease: "ease1" });
skFeatures1svg3.from(".sk-features-1-item-3-img-2 svg .path-3", { opacity: 0, y: 10, duration: .5, ease: "ease1" });
skFeatures1svg3.from(".sk-features-1-item-3-img-2 svg .path-2", { opacity: 0, y: 10, duration: .5, ease: "ease1" });
skFeatures1svg3.from(".sk-features-1-item-3-img-2 svg .path-1", { opacity: 0, y: 10, duration: .5, ease: "ease1" });

skFeatures1svg3.from(".sk-features-1-item-3-img-2 svg .path-5", { opacity: 0, y: 10, duration: .5, ease: "ease1" });
skFeatures1svg3.from(".sk-features-1-item-3-img-2 svg .path-6", { opacity: 0, y: 10, duration: .5, ease: "ease1" });
skFeatures1svg3.from(".sk-features-1-item-3-img-2 svg .path-8", { opacity: 0, y: 10, duration: .5, ease: "ease1" });
skFeatures1svg3.from(".sk-features-1-item-3-img-2 svg .path-9", { opacity: 0, y: 10, duration: .5, ease: "ease1" });




// features-1-svg-dot-2
const paths2 = document.querySelectorAll('.sk-features-1-item-4-dot-svg path');
	paths2.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});




// features-1-bg-glow
let features1bgGlow = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-features-1-bg-clr",
		start: "top 40%", 
		end: "bottom bottom",
		toggleActions: "play none none reverse",
		scrub: true,
		markers: false,
	},
});
features1bgGlow.from(".sk-features-1-bg-clr img", { opacity: 0, });

// price-1-dot-svg
gsap.fromTo(".sk-price-1-animation-dot svg path",
    {
        y: 50,
        opacity: 0
    },
    {
        y: -130,
        opacity: 0,
        duration: 7,
        ease: "power1.inOut",
        stagger: {
            each: 0.2,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);


// price-1-bg-glow
let price1bgGlow = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-price-1-animation",
		start: "top 90%", 
		toggleActions: "play none none reverse",
		markers: false,
	},
});
price1bgGlow.from(".sk-price-1-animation .favicon-icon img", { scale: 0, });
price1bgGlow.to(".sk-price-1-animation .favicon-icon-wrap", {     boxShadow: "0px 0px 70px white" },"<");
price1bgGlow.from(".sk-price-1-bg-illus-1 img", { opacity: 0, });


// price-1-bg-glow2
let price1bgGlow2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-price-1-animation",
		start: "top 70%", 
		end: "top -20%",
		toggleActions: "play none none reverse",
		scrub: true,
		markers: false,
	},
});
price1bgGlow2.from(".sk-price-1-animation .vertical-line", {  scaleY: 0, });
price1bgGlow2.from(".sk-price-1-animation .triangle-shape", {  opacity: 0, });
price1bgGlow2.from(".sk-price-1-animation .clr-glow-1 img", {  opacity: 0, },"<50%");
price1bgGlow2.from(".sk-price-1-animation-dot svg", {  opacity: 0, },"<");

// price-1-bg-glow-3
if (window.matchMedia("(min-width: 1400px)").matches) { 
	let price1bgGlow3 = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-price-1-bg-illus-3",
			start: "top 40%", 
			end: "top top",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});
	price1bgGlow3.from(".sk-price-1-bg-illus-3 img", {  opacity: 0, });
}


/* 
	testimonial-1-dot-animation
*/

gsap.fromTo(".sk-testimonial-1-animation-dot-svg path",
    {
        y: 50,
        opacity: 0
    },
    {
        y: -100,
        opacity: 0,
        duration: 5,
        ease: "power1.inOut",
        stagger: {
            each: 0.09,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);


// testimonial-1-bg-glow
let testimonial1bgGlow3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-testimonial-1-animation-clr-glow",
		start: "top 40%", 
		end: "top top",
		toggleActions: "play none none reverse",
		markers: false,
	},
});
testimonial1bgGlow3.from(".sk-testimonial-1-animation-clr-glow img", {  yPercent: 50,  opacity: 0, });


/* 
	faqs-1-dot-animation
*/

gsap.fromTo(".sk-faqs-1-animation-dot-svg path",
    {
        y: -50,
        opacity: 0
    },
    {
        y: 100,
        opacity: 0,
        duration: 5,
        ease: "power1.inOut",
        stagger: {
            each: 0.09,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);


// faqs-1-bg-glow
let faqs1bgGlow3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-faqs-1-animation-clr-glow",
		start: "top 90%", 
		end: "top top",
		toggleActions: "play none none reverse",
		markers: false,
	},
});
faqs1bgGlow3.from(".sk-faqs-1-animation-clr-glow img", {  yPercent: -50,  opacity: 0, });
faqs1bgGlow3.from(".sk-faqs-1-animation-dot-svg", {  opacity: 0, },"<");


// features-1-svg-line
if($(".sk-features-1-item-4-line-svg").length) {

	gsap.to(".f1-svg-line-1", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".f1-svg-path-1",
			align: ".f1-svg-path-1",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f1-svg-line-2", {
		duration: 5,
		repeat: -1,
		delay: .5,
		motionPath: {
			path: ".f1-svg-path-2",
			align: ".f1-svg-path-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f1-svg-line-3", {
		duration: 5,
		repeat: -1,
		delay: 1,
		motionPath: {
			path: ".f1-svg-path-3",
			align: ".f1-svg-path-3",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f1-svg-line-4", {
		duration: 5,
		repeat: -1,
		delay: 1.5,
		motionPath: {
			path: ".f1-svg-path-4",
			align: ".f1-svg-path-4",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f1-svg-line-1-2", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".f1-svg-path-1-2",
			align: ".f1-svg-path-1-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f1-svg-line-2-2", {
		duration: 5,
		repeat: -1,
		delay: .5,
		motionPath: {
			path: ".f1-svg-path-2-2",
			align: ".f1-svg-path-2-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f1-svg-line-3-2", {
		duration: 5,
		repeat: -1,
		delay: 1,
		motionPath: {
			path: ".f1-svg-path-3-2",
			align: ".f1-svg-path-3-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f1-svg-line-4-2", {
		duration: 5,
		repeat: -1,
		delay: 1.5,
		motionPath: {
			path: ".f1-svg-path-4-2",
			align: ".f1-svg-path-4-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});


}


// process-1-line-svg
if($(".sk-process-1-line-svg").length) {

	gsap.set(".svg-line-1 , .svg-line-1-2", { opacity: 0 });
	let skProcess1svgLine1 = gsap.timeline({
		repeat: -1,
		ease: "sine.inOut",
	});

	skProcess1svgLine1.to(".svg-line-1", {
		duration: 5,
		motionPath: {
			path: ".svg-path-1",
			align: ".svg-path-1",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
		onStart: () => gsap.to(".svg-line-1", { opacity: 1, duration: 0.3 }),
		onComplete: () => gsap.to(".svg-line-1", { opacity: 0, duration: 0.3 }),
	});

	skProcess1svgLine1.fromTo(".glow-1 circle", {
		scale: 0,
		transformOrigin: "center",
		fill: "#FA9145",
		duration: .5,
	},{
		scale: 1,
		transformOrigin: "center",

	},"<85%");

	skProcess1svgLine1.to(".circle-1", {
		fill: "#FA9145",
		duration: .5,
	},"<");
	skProcess1svgLine1.to(".glow-1 circle", {
		scale: 0,
		duration: 5,
	});
	skProcess1svgLine1.to(".svg-line-1-2", {
		duration: 5,
		motionPath: {
			path: ".svg-path-1",
			align: ".svg-path-1",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
		onStart: () => gsap.to(".svg-line-1-2", { opacity: 1, duration: 0.3 }),
		onComplete: () => gsap.to(".svg-line-1-2", { opacity: 0, duration: 0.3 }),
	},"<");

	skProcess1svgLine1.fromTo(".glow-1 circle", {
		scale: 0,
		transformOrigin: "center",
		fill: "#8532F9",
		duration: .5,
	},{
		scale: 1,
		transformOrigin: "center",
	},"<85%");

	skProcess1svgLine1.to(".circle-1", {
		fill: "#8532F9",
		duration: .5,
	},"<");
	skProcess1svgLine1.to(".glow-1 circle", {
		scale: 0,
		duration: 2,
	});


	
	gsap.set(".svg-line-2 , .svg-line-2-2", { opacity: 0 });
	let skProcess1svgLine2 = gsap.timeline({
		repeat: -1,
		ease: "sine.inOut",
	});

	skProcess1svgLine2.to(".svg-line-2", {
		duration: 5,
		motionPath: {
			path: ".svg-path-2",
			align: ".svg-path-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
		onStart: () => gsap.to(".svg-line-2", { opacity: 1, duration: 0.3 }),
		onComplete: () => gsap.to(".svg-line-2", { opacity: 0, duration: 0.3 }),
	});

	skProcess1svgLine2.fromTo(".glow-2 circle", {
		scale: 0,
		transformOrigin: "center",
		fill: "#FA9145",
		duration: .5,
	},{
		scale: 1,
		transformOrigin: "center",
	},"<85%");
	skProcess1svgLine2.to(".circle-2", {
		fill: "#FA9145",
		duration: .5,
	},"<");

	skProcess1svgLine2.to(".glow-2 circle", {
		scale: 0,
		duration: 5,
	});
	skProcess1svgLine2.to(".svg-line-2-2", {
		duration: 5,
		motionPath: {
			path: ".svg-path-2",
			align: ".svg-path-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
		onStart: () => gsap.to(".svg-line-2-2", { opacity: 1, duration: 0.3 }),
		onComplete: () => gsap.to(".svg-line-2-2", { opacity: 0, duration: 0.3 }),
	},"<");

	skProcess1svgLine2.fromTo(".glow-2 circle", {
		scale: 0,
		transformOrigin: "center",
		fill: "#8532F9",
		duration: .5,
	},{
		scale: 1,
		transformOrigin: "center",
	},"<85%");

	skProcess1svgLine2.to(".circle-2", {
		fill: "#8532F9",
		duration: .5,
	},"<");
	skProcess1svgLine2.to(".glow-2 circle", {
		scale: 0,
		duration: 2,
	});

}
// process-1-line-svg-2
if($(".sk-process-1-line-svg-2").length) {

	gsap.set(".svg-line-1-2 , .svg-line-1-2-2", { opacity: 0 });
	let skProcess1svgLine1 = gsap.timeline({
		repeat: -1,
		ease: "sine.inOut",
	});

	skProcess1svgLine1.to(".svg-line-1-2", {
		duration: 5,
		motionPath: {
			path: ".svg-path-1-2",
			align: ".svg-path-1-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
		onStart: () => gsap.to(".svg-line-1-2", { opacity: 1, duration: 0.3 }),
		onComplete: () => gsap.to(".svg-line-1-2", { opacity: 0, duration: 0.3 }),
	});

	skProcess1svgLine1.fromTo(".glow-1-2 circle", {
		scale: 0,
		transformOrigin: "center",
		fill: "#FA9145",
		duration: .5,
	},{
		scale: 1,
		transformOrigin: "center",

	},"<85%");

	skProcess1svgLine1.to(".circle-1-2", {
		fill: "#FA9145",
		duration: .5,
	},"<");
	skProcess1svgLine1.to(".glow-1-2 circle", {
		scale: 0,
		duration: 5,
	});
	skProcess1svgLine1.to(".svg-line-1-2-2", {
		duration: 5,
		motionPath: {
			path: ".svg-path-1-2",
			align: ".svg-path-1-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
		onStart: () => gsap.to(".svg-line-1-2-2", { opacity: 1, duration: 0.3 }),
		onComplete: () => gsap.to(".svg-line-1-2-2", { opacity: 0, duration: 0.3 }),
	},"<");

	skProcess1svgLine1.fromTo(".glow-1-2 circle", {
		scale: 0,
		transformOrigin: "center",
		fill: "#8532F9",
		duration: .5,
	},{
		scale: 1,
		transformOrigin: "center",
	},"<85%");

	skProcess1svgLine1.to(".circle-1-2", {
		fill: "#8532F9",
		duration: .5,
	},"<");
	skProcess1svgLine1.to(".glow-1-2 circle", {
		scale: 0,
		duration: 2,
	});


	
	gsap.set(".svg-line-2-2 , .svg-line-2-2-2", { opacity: 0 });
	let skProcess1svgLine2 = gsap.timeline({
		repeat: -1,
		ease: "sine.inOut",
	});

	skProcess1svgLine2.to(".svg-line-2-2", {
		duration: 5,
		motionPath: {
			path: ".svg-path-2-2",
			align: ".svg-path-2-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
		onStart: () => gsap.to(".svg-line-2-2", { opacity: 1, duration: 0.3 }),
		onComplete: () => gsap.to(".svg-line-2-2", { opacity: 0, duration: 0.3 }),
	});

	skProcess1svgLine2.fromTo(".glow-2-2 circle", {
		scale: 0,
		transformOrigin: "center",
		fill: "#FA9145",
		duration: .5,
	},{
		scale: 1,
		transformOrigin: "center",
	},"<85%");
	skProcess1svgLine2.to(".circle-2-2", {
		fill: "#FA9145",
		duration: .5,
	},"<");

	skProcess1svgLine2.to(".glow-2-2 circle", {
		scale: 0,
		duration: 5,
	});
	skProcess1svgLine2.to(".svg-line-2-2-2", {
		duration: 5,
		motionPath: {
			path: ".svg-path-2-2",
			align: ".svg-path-2-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
		onStart: () => gsap.to(".svg-line-2-2-2", { opacity: 1, duration: 0.3 }),
		onComplete: () => gsap.to(".svg-line-2-2-2", { opacity: 0, duration: 0.3 }),
	},"<");

	skProcess1svgLine2.fromTo(".glow-2-2 circle", {
		scale: 0,
		transformOrigin: "center",
		fill: "#8532F9",
		duration: .5,
	},{
		scale: 1,
		transformOrigin: "center",
	},"<85%");

	skProcess1svgLine2.to(".circle-2-2", {
		fill: "#8532F9",
		duration: .5,
	},"<");
	skProcess1svgLine2.to(".glow-2-2 circle", {
		scale: 0,
		duration: 2,
	});

}


// hero-2-img
let skHero2img = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-hero-2-area",
		start: "top top", 
		end: "bottom 80%", 
		toggleActions: "play none none reverse",
		scrub: true,
		markers: false,
	},
});
skHero2img.to(".sk-hero-2-img-box .img-1", {  rotateX: -90,   },);
skHero2img.to(".sk-hero-2-img-box .img-1", {  opacity: 0 , duration: .3 });
skHero2img.from(".sk-hero-2-img-box .img-2", {  rotateX: -90, opacity: 0 },"<");

// features-2-card-animation
if (window.matchMedia("(min-width: 1400px)").matches) { 
	let skF2cardAni = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-features-2-height",
			start: "top top", 
			end: "bottom bottom",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});
	skF2cardAni.from(".sk-features-2-item-1", {  yPercent: -50,  opacity: 0, });
	skF2cardAni.from(".sk-features-2-item-2", {  yPercent: -50,  opacity: 0, },"<30%");
	skF2cardAni.from(".sk-features-2-item-3", {  yPercent: 50,  opacity: 0, },"<30%");
	skF2cardAni.from(".sk-features-2-item-4", {  yPercent: 50,  opacity: 0, },"<30%");
	skF2cardAni.from(".sk-features-2-item-5", {  yPercent: 50,  opacity: 0, },"<30%");
	skF2cardAni.to(".sk-features-2-sec-title", {  scale: 0,  opacity: 0, },"=<");
}


// apps-2-animation
if (window.matchMedia("(min-width: 992px)").matches) { 
	let skApps2ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-apps-2-wrap",
			start: "top 40%", 
			end: "top top",
			toggleActions: "play none none reverse",
			markers: false,
		},
	});
	skApps2ani.from(".sk-apps-2-item.has-6", { scale: 0, opacity: 0, duration: .5, ease: "ease1" });
	skApps2ani.from(".sk-apps-2-item.has-5", { x: -120, y: -30, opacity: 0, duration: .5, ease: "ease1"  },"<20%");
	skApps2ani.from(".sk-apps-2-item.has-7", { x: 120, y: -30, opacity: 0, duration: .5, ease: "ease1"  },"<");
	skApps2ani.from(".sk-apps-2-item.has-4", { x: -120, y: -72, opacity: 0, duration: .5, ease: "ease1"  },"<20%");
	skApps2ani.from(".sk-apps-2-item.has-8", { x: 120, y: -72, opacity: 0, duration: .5, ease: "ease1"  },"<");
	skApps2ani.from(".sk-apps-2-item.has-3", { x: -80, y: -56, opacity: 0, duration: .5, ease: "ease1"  },"<20%");
	skApps2ani.from(".sk-apps-2-item.has-9", { x: 80, y: -56, opacity: 0, duration: .5, ease: "ease1"  },"<");
	skApps2ani.from(".sk-apps-2-item.has-2", { x: -70, y: -80, opacity: 0, duration: .5, ease: "ease1"  },"<20%");
	skApps2ani.from(".sk-apps-2-item.has-10", { x: 70, y: -80, opacity: 0, duration: .5, ease: "ease1"  },"<");
	skApps2ani.from(".sk-apps-2-item.has-1", { x: -38, y: -30, opacity: 0, duration: .5, ease: "ease1"  },"<20%");
	skApps2ani.from(".sk-apps-2-item.has-11", { x: 38, y: -30, opacity: 0, duration: .5, ease: "ease1"  },"<");
}


// features-2-line-svg-1
if($(".sk-features-2-item-2-svg-line").length) {

	gsap.to(".f2-svg-line-1", {
		duration: 5,
		repeat: -1,

		motionPath: {
			path: ".f2-svg-path-1",
			align: ".f2-svg-path-1",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f2-svg-line-2", {
		duration: 5,
		repeat: -1,
		delay: 1,
		motionPath: {
			path: ".f2-svg-path-2",
			align: ".f2-svg-path-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f2-svg-line-3", {
		duration: 5,
		repeat: -1,
		delay: 1,
		motionPath: {
			path: ".f2-svg-path-3",
			align: ".f2-svg-path-3",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f2-svg-line-1-2", {
		duration: 5,
		repeat: -1,

		motionPath: {
			path: ".f2-svg-path-1-2",
			align: ".f2-svg-path-1-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f2-svg-line-2-2", {
		duration: 5,
		repeat: -1,
		delay: 1,
		motionPath: {
			path: ".f2-svg-path-2-2",
			align: ".f2-svg-path-2-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".f2-svg-line-3-2", {
		duration: 5,
		repeat: -1,
		delay: 1,
		motionPath: {
			path: ".f2-svg-path-3-2",
			align: ".f2-svg-path-3-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});


}



// apps-2-animation
if (window.matchMedia("(min-width: 992px)").matches) { 
	let skApp2bgShape = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-services-2-bg-shape",
			start: "top 50%", 
			end: "top top",
			toggleActions: "play none none reverse",
			markers: false,
		},
	});
	skApp2bgShape.from(".sk-services-2-bg-shape svg .glow-1", { opacity: .5, transformOrigin: "center center", scale: .5, duration: .5,  });
}



/* 
	process-2-animation
*/
if (window.matchMedia("(min-width: 1200px)").matches) {
	if($(".sk-process-2-height").length) {


		ScrollTrigger.create({
			trigger: ".sk-process-2-height",
			start: "top 0%",
			end: "bottom bottom",
			scrub: true,
			markers: false,
		
			onUpdate: (self) => {
				const progress = self.progress;
		
				const items = document.querySelectorAll(".sk-process-2-tabs-btn-single");
		
				items.forEach(item => item.classList.remove("active"));
		
				if (progress < 0.25) {
					items[0].classList.add("active");
				} 
				else if (progress < 0.50) {
					items[1].classList.add("active");
				} 
				else if (progress < 0.75) {
					items[2].classList.add("active");
				} 
				else {
					items[3].classList.add("active");
				}
			}
		});

		ScrollTrigger.create({
			trigger: ".sk-process-2-height",
			start: "top 0%",
			end: "bottom bottom",
			scrub: true,
			markers: false,
		
			onUpdate: (self) => {
				const progress = self.progress;
		
				const items = document.querySelectorAll(".sk-process-2-tabs-pane .tab-pane");
		
				items.forEach(item => item.classList.remove("show"));
				items.forEach(item => item.classList.remove("active"));
		
				if (progress < 0.25) {
					items[0].classList.add("show");
					items[0].classList.add("active");
				} 
				else if (progress < 0.50) {
					items[1].classList.add("show");
					items[1].classList.add("active");
				} 
				else if (progress < 0.75) {
					items[2].classList.add("show");
					items[2].classList.add("active");
				} 
				else {
					items[3].classList.add("show");
					items[3].classList.add("active");
				}
			}
		});

	}
}


// features-2-animation-1
let skFeatures2ani1 = gsap.timeline({
	repeat: -1,
	repeatDelay: 3,

	scrollTrigger: {
		trigger: ".sk-features-2-item-3",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

skFeatures2ani1.from(".sk-features-2-item-3 .author-img", { opacity: 0, duration: .3, ease: "ease1" });
skFeatures2ani1.from(".sk-features-2-item-3 .author-title", { opacity: 0, y: 20, duration: .3, ease: "ease1" });
skFeatures2ani1.from(".sk-features-2-item-3 .author-inner", { opacity: 0, y: 20, duration: .3, ease: "ease1" });
skFeatures2ani1.from(".sk-features-2-item-3 .author-inner-text ", { opacity: 0, y: 20, duration: .3, ease: "ease1" });
skFeatures2ani1.from(".sk-features-2-item-3 .author-inner-svg rect", { opacity: 0, x: 10, stagger: .2, duration: .3, ease: "ease1" });
skFeatures2ani1.from(".sk-features-2-item-3 .author-inner-icon", { opacity: 0, scale: 1.3, duration: .3, ease: "ease1" });

// features-2-animation-2
let skFeatures2ani2 = gsap.timeline({
	repeat: -1,
	repeatDelay: 3,

	scrollTrigger: {
		trigger: ".sk-features-2-item-4",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

skFeatures2ani2.from(".sk-features-2-item-4 .item-svg-1 .f2-svg-4-text", { opacity: 0, x: 10, duration: 1, ease: "ease1" });
skFeatures2ani2.from(".sk-features-2-item-4 .item-svg-1 .f2-svg-4-line", { opacity: 0, x: 10, duration: .5, ease: "ease1" });
skFeatures2ani2.from(".sk-features-2-item-4 .item-svg-1 .f2-svg-4-bar", { opacity: 0, y: 10, stagger: .1, duration: .3, ease: "ease1" });
skFeatures2ani2.fromTo(".sk-features-2-item-4 .item-svg-3", { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",  duration: 1, ease: "ease1" },{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration: 1, ease: "ease1" });
skFeatures2ani2.from(".sk-features-2-item-4 .item-svg-2 .f2-svg-5-box", { opacity: 0, y: 10, duration: .3, ease: "ease1" });
skFeatures2ani2.fromTo(".sk-features-2-item-4 .item-svg-2 .f2-svg-5-line", { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",  duration: 1, ease: "ease1" },{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",  duration: 1, ease: "ease1" });
skFeatures2ani2.from(".sk-features-2-item-4 .item-favicon", { opacity: 0, x: 10, duration: .5, ease: "ease1" },"<");

// features-2-animation-3
let skFeatures2ani3 = gsap.timeline({
	repeat: -1,
	repeatDelay: 3,

	scrollTrigger: {
		trigger: ".sk-features-2-item-4",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

skFeatures2ani3.from(".sk-features-2-item-5 .item-svg .f2-svg-6-icon", { opacity: 0, duration: 1, ease: "ease1" });
skFeatures2ani3.fromTo(".sk-features-2-item-5 .item-svg .f2-svg-6-line", { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",  duration: 1, ease: "ease1" },{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration: 1, ease: "ease1" });
skFeatures2ani3.from(".sk-features-2-item-5 .item-svg .f2-svg-6-logo", { opacity: 0, duration: 1, ease: "ease1" },"<50%");
skFeatures2ani3.from(".sk-features-2-item-5 .item-svg rect", { opacity: 0, y: 10, stagger: .1, duration: 1, ease: "ease1" },"<50%");
skFeatures2ani3.from(".sk-features-2-item-5 .item-svg .f2-svg-6-text", { opacity: 0, y: 10, stagger: .1, duration: 1, ease: "ease1" },"<50%");


if ($(".sk-price-1-right").length) {

	const YEARLY_PERCENT = 1200; // set yearly base price
  
	$(".sk-price-1-right").each(function () {
  
	  const $wrap = $(this);
	  const $priceEl = $wrap.find(".price");
	  const $periodEl = $wrap.find(".monthly");
	  const $toggle = $wrap.find(".sk-price-1-yearly-toggle");
	  const $items = $wrap.find(".count-item");
  
	  // base price from HTML
	  const BASE_PRICE = parseFloat($priceEl.text());
  
	  let currentItem = 1;
	  let isYearly = false;
  
	  function updatePrice() {
		let price = BASE_PRICE * currentItem;
  
		if (isYearly) {
		  price = currentItem * YEARLY_PERCENT;
		  $periodEl.text("/ Per Yearly");
		} else {
		  $periodEl.text("/ Per Monthly");
		}
  
		$priceEl.text(Math.round(price));
	  }
  
	  $items.on("click", function () {
		$items.removeClass("active");
		$(this).addClass("active");
  
		currentItem = parseInt($(this).find(".number").text(), 10);
		updatePrice();
	  });
  
	  $toggle.on("click", function () {
		$(this).toggleClass("active");
		isYearly = $(this).hasClass("active");
		updatePrice();
	  });
  
	  updatePrice();
  
	});
  
  }


// hero-3-logo-animation
gsap.fromTo(".sk-hero-3-apps-single",
    {
        y: 50,
        opacity: 0,
		scale: .7,
    },
    {
        y: -250,
		scale: 1,
        opacity: 0,
        duration: 5,
        ease: "power1.inOut",
        stagger: {
            each: 1,
			from: "random",
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);


// partner-3
let skPartner3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-partner-3-wrap",
		start: "top 80%",
		end: "top 30%",
		toggleActions: "play none none reverse",
		// scrub: true,
		markers: false,
	},
});

skPartner3.from(".sk-partner-3-left-padding", { x: 80, duration: .5});
skPartner3.from(".sk-partner-3-right-padding", { x: -80, duration: .5},"<");

// section-dot-svg
const h3sectionDotSvg = document.querySelectorAll('.sk-sec-ani-1-dot path');
h3sectionDotSvg.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});


// features-3-line-svg-1
if($(".sk-features-3-box-1-svg-1").length) {

	gsap.to(".sk-features-3-box-1-svg-1 .svg-bar", {
		duration: 5,
		repeat: -1,

		motionPath: {
			path: ".sk-features-3-box-1-svg-1 .svg-path",
			align: ".sk-features-3-box-1-svg-1 .svg-path",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".sk-features-3-box-1-svg-2 .svg-bar", {
		duration: 5,
		repeat: -1,

		motionPath: {
			path: ".sk-features-3-box-1-svg-2 .svg-path",
			align: ".sk-features-3-box-1-svg-2 .svg-path",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".sk-features-3-box-1-svg-3 .svg-bar", {
		duration: 5,
		repeat: -1,

		motionPath: {
			path: ".sk-features-3-box-1-svg-3 .svg-path",
			align: ".sk-features-3-box-1-svg-3 .svg-path",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});

	gsap.to(".sk-features-3-box-1-svg-4 .svg-bar", {
		duration: 5,
		repeat: -1,

		motionPath: {
			path: ".sk-features-3-box-1-svg-4 .svg-path",
			align: ".sk-features-3-box-1-svg-4 .svg-path",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 1,
			end: 0,
		},
	});



}


// features-3-box-2-svg-1
let skFeatures3box2svg = gsap.timeline({
	repeat: -1,
	repeatDelay: 3,

	scrollTrigger: {
		trigger: ".sk-features-3-box-2-svg",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

skFeatures3box2svg.from(".sk-features-3-box-2-svg rect", { scaleY: 0, transformOrigin: "bottom", duration: .5, ease: "ease1" ,        stagger: {
	each: .05,
	from: "random",
},});


// apps-3-animation
if (window.matchMedia("(min-width: 1200px)").matches) {  
	let skApps3ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-apps-3-height",
			start: "top 0", 
			end: "bottom bottom",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});
	
	skApps3ani.from(".sk-apps-3-logo", {  rotation: -90 , scale: .5, opacity: 0, });
	skApps3ani.to(".sk-apps-3-sec-title", { scale: .5, opacity: 0, },"<");
	skApps3ani.from(".sk-apps-3-video", {  rotation: -90 , scale: .5, opacity: 0, },"<50%");


	
	if($(".sk-apps-3-logo").length) {
		const container = document.querySelector('.sk-apps-3-logo');
		const items = container.querySelectorAll('.sk-apps-3-logo .single-logo');
		
		const radius = container.offsetWidth / 2 + 10;
		const centerX = container.offsetWidth / 2;
		const centerY = container.offsetHeight / 2;
		const total = items.length;
		
		items.forEach((item, index) => {
			const angle = (index / total) * (Math.PI * 2);
		
			const x = centerX + radius * Math.cos(angle);
			const y = centerY + radius * Math.sin(angle);
		
			item.style.left = `${x}px`;
			item.style.top = `${y}px`;
		});
	}
}


// price-3-title
let skPrice3title = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-price-3-big-title",
		start: "top 90%", 
		end: "top 40%",
		toggleActions: "play none none reverse",
		scrub: true,
		markers: false,
	},
});
skPrice3title.from(".sk-price-3-big-title", { y: 100 });

// choose-4-dashboard-animation
if($(".sk-choose-4-dashboard").length) {

	const typingEl = document.querySelector(".sk-choose-4-dashboard .input-typing-text");
	const typingText = "Ask Any Things ...";
	
	
	let dashboardTL = gsap.timeline({
		repeat: -1,
		repeatDelay: 1
	});
	

	function typingTimeline() {
	
		if (typingEl.split) {
			typingEl.split.revert();
		}
	
		typingEl.textContent = typingText;
	
		let split = new SplitText(typingEl, {
			type: "chars"
		});
		typingEl.split = split;
	
		gsap.set(split.chars, { opacity: 0 });
	
		let tl = gsap.timeline();
		tl.to(split.chars, {
			opacity: 1,
			duration: 0.05,
			stagger: 0.06,
			ease: "none"
		});
	
		return tl;
	}
	

	dashboardTL
		.set(typingEl, { opacity: 0 })
	
		.to(".sk-choose-4-dashboard .has-search-btn", { background: "#fff", scale: 0.9, duration: 0.3 })
		.to(".sk-choose-4-dashboard .has-search-btn", { background: "#F1F5FD", scale: 1, duration: 0.3 })
	
		.to(typingEl, { opacity: 1, duration: 0.2 })
	
		.add(typingTimeline())
	
		.to({}, { duration: 0.3 })
	
		.to(".sk-choose-4-dashboard .has-submit-btn", { background: "#000", scale: 0.85, duration: 0.3 })
		.to(".sk-choose-4-dashboard .has-submit-btn", { background: "#fff", scale: 1, duration: 0.3 })
	
		// hide text
		.to(typingEl, { opacity: 0, duration: 0.3 });
	
}




// services-4-bg
let skServices4svg = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-features-4-bg-shape",
		start: "top 50%",
		toggleActions: "play none none reverse",
		markers: false,
	},
});
skServices4svg.from(".sk-features-4-bg-shape svg g g", { opacity: 0, duration: .5, ease: "ease1", stagger: {
	each: 0.1,
	from: "right",
}, });


// price-4-card
if (window.matchMedia("(min-width: 1200px)").matches) {   
	let skPrice4card = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-price-4-wrap",
			start: "top 30%", 
			toggleActions: "play none none reverse",
			markers: false,
		},
	});
	skPrice4card.from(".sk-price-4-card:nth-of-type(1)", { x: 45, rotation: -15, duration: .5, ease: "ease1", });
	skPrice4card.from(".sk-price-4-card:nth-of-type(3)", { x: -45, rotation: 15, duration: .5, ease: "ease1", },"<");
}

// apps-4-animation
if (window.matchMedia("(min-width: 1200px)").matches) {  
	if($(".sk-apps-4-logo").length) {
		const container = document.querySelector('.sk-apps-4-logo');
		const items = container.querySelectorAll('.sk-apps-4-logo .single-logo');
		
		const radius = container.offsetWidth / 2 + 10;
		const centerX = container.offsetWidth / 2;
		const centerY = container.offsetHeight / 2;
		const total = items.length;
		
		items.forEach((item, index) => {
			const angle = (index / total) * (Math.PI * 2);
		
			const x = centerX + radius * Math.cos(angle);
			const y = centerY + radius * Math.sin(angle);
		
			item.style.left = `${x}px`;
			item.style.top = `${y}px`;
		});
	}
}



// process-4-animation
if (window.matchMedia("(min-width: 1200px)").matches) {  
	let skProcess4ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-process-4-wrap",
			start: "top 40%", 
			end: "bottom bottom",
			toggleActions: "play none none none",
			scrub: false,
			markers: false,
		},
	});
	
	skProcess4ani.from(".sk-process-4-bg-circle-img img", {  scale: 0, ease: "ease1" , duration: .5, });
	skProcess4ani.from(".sk-process-4-bg-glow-1 img", {  scale: 0, y: 200, ease: "ease1" , duration: .5, },"<70%");
	skProcess4ani.from(".sk-process-4-robot-img img", {  scale: 0, y: 200, ease: "ease1" , duration: .5, },"<70%");
	skProcess4ani.from(".sk-process-4-svg-meteor", {  opacity: 0, ease: "ease1" , duration: .5, },"<");
	skProcess4ani.fromTo(".sk-process-4-svg-line .svg-path-1", {  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", ease: "ease1" , duration: .5, },{  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", ease: "ease1" , duration: 1, },"<70%");
	skProcess4ani.fromTo(".sk-process-4-svg-line .svg-path-2", {  clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", ease: "ease1" , duration: .5, },{  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "ease1" , duration: 1, },"<");
	skProcess4ani.from(".sk-process-4-svg-line .svg-dot-2", {  opacity: 0, ease: "ease1" , duration: .5, },"<80%");
	skProcess4ani.from(".sk-process-4-svg-line .svg-dot-1", {  opacity: 0, ease: "ease1" , duration: .5, },"<");
	skProcess4ani.from(".sk-process-4-card", {  opacity: 0, ease: "ease1" , duration: .5, },"<70%");

}

if($(".sk-process-4-svg-meteor").length) {

	const groups = [
		".sk-process-4-svg-meteor .svg-ani-1",
		".sk-process-4-svg-meteor .svg-ani-2",
		".sk-process-4-svg-meteor .svg-ani-3",
		".sk-process-4-svg-meteor .svg-ani-4",
		".sk-process-4-svg-meteor .svg-ani-5",
		".sk-process-4-svg-meteor .svg-ani-6"
	  ];
	  
	  groups.forEach((group) => {
	  
		const tl = gsap.timeline({
		  repeat: -1,
		  delay: gsap.utils.random(0, 3),
		  repeatDelay: gsap.utils.random(0.5, 2)
		});
	  
		tl.fromTo(group,
		  {
			opacity: 0,
			y: 0
		  },
		  {
			opacity: 1,
			y: -150,
			duration: gsap.utils.random(1.5, 3),
			ease: "power1.inOut"
		  }
		).to(group, {
		  opacity: 0,
		  duration: 0.1
		});
	  
	});
	
}



// footer-4-robot
let skFooter4robot = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-footer-4-big-title-wrap",
		// start: "top 90%", 
		toggleActions: "play none none none",
		scrub: false,
		markers: false,
	},
});
skFooter4robot.from(".sk-footer-4-big-title-robot img", { y: -100, opacity: 0, duration: 1, ease: "bounce.out", delay: .3,  });


// hero-5-dot-animation
gsap.fromTo(".sk-hero-5-dot-shape-svg ellipse , .sk-hero-5-dot-shape-svg circle",
    {
        x: 200,
        opacity: 0
    },
    {
        x: -50,
        opacity: 0,
        duration: 6,
        ease: "power1.inOut",
        stagger: {
            each: .2,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);
gsap.fromTo(".sk-hero-5-dot-shape-svg-2 ellipse , .sk-hero-5-dot-shape-svg-2 circle",
    {
        x: 200,
        opacity: 0
    },
    {
        x: -50,
        opacity: 0,
        duration: 8,
        ease: "power1.inOut",
        stagger: {
            each: .4,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);

// hero-5-img
let skHero5img = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-hero-5-img",
		start: "top 70%", 
		end: "top 20%", 
		toggleActions: "play none none none",
		scrub: true,
		markers: false,
	},
});
skHero5img.from(".sk-hero-5-img", { rotateX: -40, y: -40  });

// price-5-card-dot
const skp5dot = document.querySelectorAll('.sk-price-5-card-dot-svg circle , .sk-price-5-card-dot-svg ellipse');

	skp5dot.forEach((path) => {
		function animatePath() {
			gsap.to(path, {
			opacity: Math.random() > 0.5 ? 1 : 0,
			duration: Math.random() * 0.6 + 0.2, 
			delay: Math.random() * 0.2, 
			onComplete: animatePath, 
			ease: "power1.inOut"
		});
	}
  	animatePath(); 
});


// features-5-sticky-card
if (window.matchMedia("(min-width: 1200px)").matches) { 
	const sk_features_5_card_sticky = document.querySelectorAll('.sk-features-5-card-sticky');

	sk_features_5_card_sticky.forEach((single_elm, index) => {
		let scaleValue = 0.9 + (index * 0.03);
		if (scaleValue > 1) scaleValue = 1;
	
		let sk_features_5_card_tl = gsap.timeline({
			scrollTrigger: {
			trigger: single_elm,
			toggleActions: "play none none none",
			scrub: true,
			markers: false,
			},
		});
	
		sk_features_5_card_tl.to(single_elm, {
			scale: scaleValue,
		});
	
	});
}




// footer-5-logo
let skFooter5logo = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-footer-5-big-logo",
		start: "top 90%", 
		end: "top 50%", 
		toggleActions: "play none none none",
		scrub: true,
		markers: false,
	},
});
skFooter5logo.from(".sk-footer-5-big-logo .logo-elm", { rotateX: -60, });


if (window.matchMedia("(min-width: 1200px)").matches) { 

	// apps-6-logo-circle
	if($(".sk-apps-6-logo-1").length) {
		const container = document.querySelector('.sk-apps-6-logo-1');
		const items = container.querySelectorAll('.sk-apps-6-logo-1 .single-logo');
		
		const radius = container.offsetWidth / 2 + 10;
		const centerX = container.offsetWidth / 2;
		const centerY = container.offsetHeight / 2;
		const total = items.length;
		
		items.forEach((item, index) => {
			const angle = (index / total) * (Math.PI * 2);
		
			const x = centerX + radius * Math.cos(angle);
			const y = centerY + radius * Math.sin(angle);
		
			item.style.left = `${x}px`;
			item.style.top = `${y}px`;
		});
	}


	// apps-6-logo-circle
	if($(".sk-apps-6-logo-2").length) {
		const container = document.querySelector('.sk-apps-6-logo-2');
		const items = container.querySelectorAll('.sk-apps-6-logo-2 .single-logo');
		
		const radius = container.offsetWidth / 2 + 10;
		const centerX = container.offsetWidth / 2;
		const centerY = container.offsetHeight / 2;
		const total = items.length;
		
		items.forEach((item, index) => {
			const angle = (index / total) * (Math.PI * 2);
		
			const x = centerX + radius * Math.cos(angle);
			const y = centerY + radius * Math.sin(angle);
		
			item.style.left = `${x}px`;
			item.style.top = `${y}px`;
		});
	}


}



// hero-6-img
let skHero6img = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-hero-6-dashboard",
		start: "top 60%", 
		end: "top 10%", 
		toggleActions: "play none none none",
		scrub: true,
		markers: false,
	},
});
skHero6img.from(".sk-hero-6-dashboard", { rotateX: 40, y: -180  });



// hero-6-dashboard-svg
let skHero6svg = gsap.timeline({
	// scrollTrigger: {
	// 	trigger: ".sk-hero-6-dashboard-img-svg",
	// 	toggleActions: "play none none reverse",
	// 	markers: false,
	// },
});

skHero6svg.from(".sk-hero-6-dashboard-img-svg path", { scaleY: 0, transformOrigin: "bottom", duration: .5, delay: .5, ease: "ease1" ,   stagger: {
	each: .05,
	from: "random",
},});


// benefits-6-dot-animation
gsap.fromTo(".sk-benefits-6-right-shape .shape-dot svg path",
    {
        y: 100,
        opacity: 0
    },
    {
        y: 0,
        opacity: 0,
        duration: 4,
        ease: "power1.inOut",
        stagger: {
            each: .5,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);


// features-6-svg-dot
const skFeatures6dot = document.querySelectorAll('.skF6dotSvg ellipse');
	skFeatures6dot.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});


// features-6-dashboard-svg

let skFeatures6svg = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-features-6-card-img-3",
		start: "top 70%",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

skFeatures6svg.from(".sk-features-6-card-img-3 svg path", { scaleY: 0, transformOrigin: "bottom", duration: .5, delay: .5, ease: "ease1" ,   stagger: {
	each: .05,
	from: "random",
},});



gsap.fromTo(".sk-features-6-bottom-dot ellipse",
    {
        y: 150,
        opacity: 0
    },
    {
        y: -100,
        opacity: 0,
        duration: 7,
        ease: "power1.inOut",
        stagger: {
            each: 0.09,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);



let skFeatures6bgGlow = gsap.timeline({
	scrollTrigger: {
		trigger: ".sk-features-6-bottom-glow",
		start: "top 80%", 
		end: "top top",
		toggleActions: "play none none reverse",
		markers: false,
	},
});
skFeatures6bgGlow.from(".sk-features-6-bottom-glow", { opacity: 0, });
skFeatures6bgGlow.from(".sk-features-6-bottom-dot", { opacity: 0, });



// footer-6-dot-animation
gsap.fromTo(".sk-footer-6-dot-svg ellipse , .sk-footer-6-dot-svg circle",
    {
        x: -50,
        opacity: 0
    },
    {
        x: 250,
        opacity: 0,
        duration: 6,
        ease: "power1.inOut",
        stagger: {
            each: .2,
            repeat: -1
        },
        keyframes: [
            { opacity: 1, duration: 1 },
            { opacity: 0, duration: 1 }
        ]
    }
);


// hero-7-dot-1
const skHeroDot1 = document.querySelectorAll('.sk-hero-7-bg-dot circle');
	skHeroDot1.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});


// features-7-svg-line
if($(".sk-features-7-item-2-logo-bg-line-1").length) {

	gsap.to(".line-bar-1", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".line-path-1",
			align: ".line-path-1",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});

	gsap.to(".line-bar-2", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".line-path-2",
			align: ".line-path-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});

	gsap.to(".line-bar-3", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".line-path-3",
			align: ".line-path-3",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});


}
if($(".sk-features-7-item-2-logo-bg-line-2").length) {

	gsap.to(".line-bar-1-2", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".line-path-1-2",
			align: ".line-path-1-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});

	gsap.to(".line-bar-2-2", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".line-path-2-2",
			align: ".line-path-2-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});

	gsap.to(".line-bar-3-2", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".line-path-3-2",
			align: ".line-path-3-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});


}


// choose-7-animation
if($(".sk-choose-7-scrollbar").length) {
	if (window.matchMedia("(min-width: 1200px)").matches) { 
		const skChooseScrollbar = gsap.utils.toArray('.sk-choose-7-scrollbar .single-scrollbar-line');

		const skC7tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.sk-choose-7-height',
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			}
		});
		
		skC7tl.to(skChooseScrollbar[0], {
			width: '100%',
			ease: 'none',
			duration: 1
		})
		.from('.skC7item_2_left', {
			xPercent: -100,
			duration: 2,
			ease: 'power2.out'
		})
		.from('.skC7item_2_right', {
			xPercent: 100,
			duration: 2,
			ease: 'power2.out'
		},"<")
		.to(skChooseScrollbar[1], {
			width: '100%',
			ease: 'none',
			duration: 1
		})
		.from('.skC7item_3_left', {
			xPercent: -100,
			duration: 2,
			ease: 'power2.out'
		})
		.from('.skC7item_3_right', {
			xPercent: 100,
			duration: 2,
			ease: 'power2.out'
		},"<")
		.to(skChooseScrollbar[2], {
			width: '100%',
			ease: 'none',
			duration: 1
		})
	}
	
	
}


// process-7-animation
if($(".sk-process-7-ani-shape").length) {
	if (window.matchMedia("(min-width: 1200px)").matches) { 

		const skPr7tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.sk-process-7-height',
				start: 'top top',
				// end: 'bottom bottom',
				end: 'bottom-=25% top',
				scrub: true,
				markers: false,
			}
		});

		const skPr7line = document.querySelector(".sk-process-7-ani-shape svg .line");
		const skPr7lineLength = skPr7line.getTotalLength();

		gsap.set(skPr7line, {
			strokeDasharray: skPr7lineLength,
			strokeDashoffset: -skPr7lineLength,
		});

		skPr7tl.to(skPr7line, {
			strokeDashoffset: 0,
			ease: "none",
		})

		const skPr7tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: '.sk-process-7-height',
				start: 'top -80%',
				end: 'bottom bottom',
				// end: 'bottom-=25% top',
				scrub: true,
				markers: false,
			}
		})

		skPr7tl2.from(".sk-process-7-ani-shape  .glow",{
			opacity: 0,
			duration: 2,
		})
		


		const skPr7cards = gsap.utils.toArray(".sk-process-7-card-single");

		const skPr7tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: ".sk-process-7-height",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
				markers: false,
			}
		});

		gsap.set(skPr7cards[0], { opacity: 1, y: 0 });


		const skPr7cardsFirstInnerEls = skPr7cards[0].querySelectorAll(
			".icon, .line, .title, .disc"
		);
		
		gsap.set(skPr7cardsFirstInnerEls, {
			opacity: 1,
			y: 0,
		});

		skPr7cards.forEach((card, index) => {

			const innerEls = card.querySelectorAll(
				".icon, .line, .title, .disc"
			);


			if (index !== 0) {
				skPr7tl3.to(skPr7cards[index - 1], {
					opacity: 0,
					y: 40,
					duration: 0.5,
				});
			}

			skPr7tl3.to(card, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				onStart: () => {
					card.classList.add("active");
				}
			});

			skPr7tl3.from(innerEls, {
				opacity: 0,
				y: 20,
				stagger: 0.1,
				duration: 0.4,
				delay: 0.2,
			}, "<");
		});



	}
	
	
}


// apps-7-svg
if (window.matchMedia("(min-width: 1200px)").matches) {
	if($(".sk-apps-7-bg-svg-1").length) {

		gsap.set(".sk-apps-7-bg-svg-1 .svg-1-line-1, .sk-apps-7-bg-svg-1 .svg-1-line-2, .sk-apps-7-bg-svg-1 .svg-1-line-3, .sk-apps-7-bg-svg-1 .svg-1-line-4", { opacity: 0 });

		let skApps7svgTl = gsap.timeline({
			repeat: -1,
			ease: "ease1",

			scrollTrigger: {
				trigger: ".sk-apps-7-content .favicon-elm",
				markers: false,
			},
		});


		skApps7svgTl.to(".svg-1-line-1", {
			duration: 10,
			motionPath: {
				path: ".svg-1-path-1",
				align: ".svg-1-path-1",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0,
				end: 1,
			},
			onStart: () => gsap.to(".sk-apps-7-bg-svg-1 .svg-1-line-1", { opacity: 1, duration: 0.3 }),
			onComplete: () => gsap.to(".sk-apps-7-bg-svg-1 .svg-1-line-1", { opacity: 0, duration: 0.3 }),
		});

		skApps7svgTl.to(".svg-1-line-2", {
			duration: 10,
			motionPath: {
				path: ".svg-1-path-2",
				align: ".svg-1-path-2",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0,
				end: 1,
			},
			onStart: () => gsap.to(".sk-apps-7-bg-svg-1 .svg-1-line-2", { opacity: 1, duration: 0.3 }),
			onComplete: () => gsap.to(".sk-apps-7-bg-svg-1 .svg-1-line-2", { opacity: 0, duration: 0.3 }),
		},.6);

		skApps7svgTl.to(".svg-1-line-3", {
			duration: 10,
			motionPath: {
				path: ".svg-1-path-3",
				align: ".svg-1-path-3",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0,
				end: 1,
			},
			onStart: () => gsap.to(".sk-apps-7-bg-svg-1 .svg-1-line-3", { opacity: 1, duration: 0.3 }),
			onComplete: () => gsap.to(".sk-apps-7-bg-svg-1 .svg-1-line-3", { opacity: 0, duration: 0.3 }),
		},1.9);

		skApps7svgTl.to(".svg-1-line-4", {
			duration: 10,
			motionPath: {
				path: ".svg-1-path-4",
				align: ".svg-1-path-4",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0,
				end: 1,
			},
			onStart: () => gsap.to(".sk-apps-7-bg-svg-1 .svg-1-line-4", { opacity: 1, duration: 0.3 }),
			onComplete: () => gsap.to(".sk-apps-7-bg-svg-1 .svg-1-line-4", { opacity: 0, duration: 0.3 }),
		},2.6);
	}
	if($(".sk-apps-7-bg-svg-2").length) {

		gsap.set(".sk-apps-7-bg-svg-2 .svg-2-line-1, .sk-apps-7-bg-svg-2 .svg-2-line-2, .sk-apps-7-bg-svg-2 .svg-2-line-3, .sk-apps-7-bg-svg-2 .svg-2-line-4", { opacity: 0 });

		let skApps7svgTl = gsap.timeline({
			repeat: -1,
			ease: "ease1",

			scrollTrigger: {
				trigger: ".sk-apps-7-content .favicon-elm",
				markers: false,
			},
		});


		skApps7svgTl.to(".svg-2-line-1", {
			duration: 10,
			motionPath: {
				path: ".svg-2-path-1",
				align: ".svg-2-path-1",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0,
				end: 1,
			},
			onStart: () => gsap.to(".sk-apps-7-bg-svg-2 .svg-2-line-1", { opacity: 1, duration: 0.3 }),
			onComplete: () => gsap.to(".sk-apps-7-bg-svg-2 .svg-2-line-1", { opacity: 0, duration: 0.3 }),
		});

		skApps7svgTl.to(".svg-2-line-2", {
			duration: 10,
			motionPath: {
				path: ".svg-2-path-2",
				align: ".svg-2-path-2",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0,
				end: 1,
			},
			onStart: () => gsap.to(".sk-apps-7-bg-svg-2 .svg-2-line-2", { opacity: 1, duration: 0.3 }),
			onComplete: () => gsap.to(".sk-apps-7-bg-svg-2 .svg-2-line-2", { opacity: 0, duration: 0.3 }),
		},.6);

		skApps7svgTl.to(".svg-2-line-3", {
			duration: 10,
			motionPath: {
				path: ".svg-2-path-3",
				align: ".svg-2-path-3",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0,
				end: 1,
			},
			onStart: () => gsap.to(".sk-apps-7-bg-svg-2 .svg-2-line-3", { opacity: 1, duration: 0.3 }),
			onComplete: () => gsap.to(".sk-apps-7-bg-svg-2 .svg-2-line-3", { opacity: 0, duration: 0.3 }),
		},1.9);

		skApps7svgTl.to(".svg-2-line-4", {
			duration: 10,
			motionPath: {
				path: ".svg-2-path-4",
				align: ".svg-2-path-4",
				autoRotate: true,
				alignOrigin: [0.5, 0.5],
				start: 0,
				end: 1,
			},
			onStart: () => gsap.to(".sk-apps-7-bg-svg-2 .svg-2-line-4", { opacity: 1, duration: 0.3 }),
			onComplete: () => gsap.to(".sk-apps-7-bg-svg-2 .svg-2-line-4", { opacity: 0, duration: 0.3 }),
		},2.6);
	}
}


// apps-7-dot
const skApps7dot = document.querySelectorAll('.sk-apps-7-bg-dot-svg circle');
	skApps7dot.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});


// overview-7-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	let overview7tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".sk-overview-7-bottom",
			start: "top 60%", 
			toggleActions: "play none none reverse",
			markers: false,
		},
	});
	overview7tl.from(".sk-overview-7-bottom .bg-glow", { opacity: 0, yPercent: 50, duration: .5, ease: "power1.out", });
	overview7tl.from(".sk-overview-7-img", { yPercent: 100, duration: .5, ease: "power1.out", },"<50%");
	overview7tl.to(".sk-overview-7-img-3", { rotate: 20, x: 170, y: 150, duration: 2.5, ease: "elastic.out(1,0.5)", });
	overview7tl.to(".sk-overview-7-img-1", { rotate: -20, x: -170, y: 150, duration: 2.5, ease: "elastic.out(1,0.5)", },"<");
}


// overview-7-dot-1
const skOverview7dot1 = document.querySelectorAll('.sk-overview-7-bg-dot-1 svg circle');
	skOverview7dot1.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});

// overview-7-dot-2
const skOverview7dot2 = document.querySelectorAll('.sk-overview-7-bg-dot-2 svg circle');
	skOverview7dot2.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});

// cta-7-dot-1
const skCta7dot1 = document.querySelectorAll('.sk-cta-7-bg-dot-1 svg ellipse');
	skCta7dot1.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});

// cta-7-dot-2
const skCta7dot2 = document.querySelectorAll('.sk-cta-7-bg-dot-2 svg ellipse');
	skCta7dot2.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});


// breadcrumb-svg
if($(".sk-breadcrumb-shape").length) {

	gsap.to(".b-svg-line-1", {
		duration: 5,
		repeat: -1,
		motionPath: {
			path: ".b-svg-path-1",
			align: ".b-svg-path-1",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});

	gsap.to(".b-svg-line-2", {
		duration: 5,
		repeat: -1,
		delay: 1,
		motionPath: {
			path: ".b-svg-path-2",
			align: ".b-svg-path-2",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});

	gsap.to(".b-svg-line-3", {
		duration: 5,
		repeat: -1,
		delay: 1.5,
		motionPath: {
			path: ".b-svg-path-3",
			align: ".b-svg-path-3",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});

	gsap.to(".b-svg-line-4", {
		duration: 5,
		repeat: -1,
		delay: .5,
		motionPath: {
			path: ".b-svg-path-4",
			align: ".b-svg-path-4",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			start: 0,
			end: 1,
		},
	});

	gsap.fromTo(".sk-breadcrumb-dot-shape-1 ellipse",
		{
			x: 50,
			opacity: 0
		},
		{
			x: -200,
			opacity: 0,
			duration: 7,
			ease: "power1.inOut",
			stagger: {
				each: 0.09,
				repeat: -1
			},
			keyframes: [
				{ opacity: 1, duration: 1 },
				{ opacity: 0, duration: 1 }
			]
		}
	);

	gsap.fromTo(".sk-breadcrumb-dot-shape-2 ellipse",
		{
			x: 50,
			opacity: 0
		},
		{
			x: -200,
			opacity: 0,
			duration: 7,
			ease: "power1.inOut",
			stagger: {
				each: 0.09,
				repeat: -1
			},
			keyframes: [
				{ opacity: 1, duration: 1 },
				{ opacity: 0, duration: 1 }
			]
		}
	);
}

/* 
	price-3-toggle-class
*/
if($(".sk-price-3-toggle-btn").length) {
	$('.sk-price-3-toggle-btn').on('click', function () {
		$(".sk-price-3-toggle").toggleClass('active');
		$(".sk-price-3-toggle-btn").toggleClass('active');
		$('.sk-price-3-card .price-box').toggleClass('active');
		$('.sk-price-4-card .price-box').toggleClass('active');
	});
}

/* 
	price-5-toggle-class
*/
if($(".sk-price-5-toggle-btn").length) {
	$('.sk-price-5-toggle-btn').on('click', function () {
		$(".sk-price-5-toggle-btn").toggleClass('active');
		$(".sk-price-5-card .price-wrap").toggleClass('active');
	});
}


/* 
	price-6-toggle-class
*/
if($(".sk-price-6-toggle-btn").length) {
	$('.sk-price-6-toggle-btn').on('click', function () {
		$(".sk-price-6-toggle-btn").toggleClass('active');
		$(".sk-price-6-card .price-wrap").toggleClass('active');
	});
}

/* 
	price-7-toggle-class
*/
if($(".skP7c1button").length) {
	$('.skP7c1button').on('click', function () {
		$(".skP7c1button").toggleClass('active');
		$(".skP7c1price").toggleClass('active');
	});
}
if($(".skP7c2button").length) {
	$('.skP7c2button').on('click', function () {
		$(".skP7c2button").toggleClass('active');
		$(".skP7c2price").toggleClass('active');
	});
}
if($(".skP7c3button").length) {
	$('.skP7c3button').on('click', function () {
		$(".skP7c3button").toggleClass('active');
		$(".skP7c3price").toggleClass('active');
	});
}

// price-3-heart-shape
gsap.utils.toArray(".sk-price-3-card-ani .smoke").forEach((smoke, i) => {
    gsap.fromTo(smoke,
        {
            y: 15,
            opacity: 1,
            scale: 1
        },
        {
            y: -75,
            opacity: 0,
            scale: 8,
            duration: 5,
            repeat: -1,
            delay: i * 0.8,
            ease: "power1.out"
        }
    );
});


/* 
	testimonial-7-slider-function
*/
if ($('.sk_t7_slider').length) {
	var sk_t7_slider = new Swiper(".sk_t7_slider", {
		loop: true,
		speed: 600,
		autoplay: {
			delay: 4000,
		},

	});

}

setTimeout(() => {
	if ($('.sk_t7_slider_2').length) {
		var sk_t7_slider_2 = new Swiper(".sk_t7_slider_2", {
			loop: true,
			speed: 600,
			direction: 'vertical',
			autoplay: {
				delay: 4000,
			},
	
		});
	
	}
}, 2000);


// choose-8-slider-function
if ($('.sk_c8_slider').length) {
	var sk_c8_slider = new Swiper(".sk_c8_slider", {
		loop: true,
		speed: 600,
		autoplay: {
			delay: 4000,
		},

		pagination: {
			el: '.sk_c8_slider_pagi',
			clickable: true, 
		},
	});

}


/* 
    marquee-right
*/

$('.wa_marquee_right').marquee({
	speed: 50,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: true,
})

/* 
    marquee-left
*/

$('.wa_marquee_left').marquee({
	speed: 50,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
})

$('.wa_marquee_right_v2').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: true,
})

/* 
    marquee-left
*/

$('.wa_marquee_left_v2').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
})

/* 
    marquee-left-nopause
*/
$('.wa_marquee_left_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: false,
})


/* 
    marquee-right-nopause
*/
$('.wa_marquee_right_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: false,
})

/* 
	marquee-down-top 
*/
if ($(".wa_marquee_down_top").length) {
  document.querySelectorAll(".wa_marquee_down_top").forEach((waMarqueeTop) => {
    const waMarqueeClone = waMarqueeTop.cloneNode(true);
    waMarqueeTop.parentNode.appendChild(waMarqueeClone);

    const waMarqueeTotalHeight = waMarqueeTop.offsetHeight;

    gsap.to([waMarqueeTop, waMarqueeClone], {
      y: `-${waMarqueeTotalHeight}px`,
      ease: "none",
      duration: 20,
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((waY) => parseFloat(waY) % waMarqueeTotalHeight),
      },
    });
  });
}


/* 
	marquee-top-down 
*/
if ($(".wa_marquee_top_down").length) { 
	const waMarqueeTopDown = document.querySelector('.wa_marquee_top_down');
	const waMarqueeTopDownClone = waMarqueeTopDown.cloneNode(true);
	waMarqueeTopDown.parentNode.appendChild(waMarqueeTopDownClone);
	
	const waMarqueeTopDownHeight = waMarqueeTopDown.offsetHeight;
	
	gsap.to(".wa_marquee_top_down", {
	  y: `${waMarqueeTopDownHeight}px`, 
	  ease: "none",
	  duration: 20,
	  repeat: -1,
	  modifiers: {
		y: gsap.utils.unitize(waY => parseFloat(waY) % waMarqueeTopDownHeight)
	  }
	});
}


/* 
	wa_parallax_elm
*/ 
if($(".wa_parallax_elm").length) {
	document.addEventListener("mousemove", wa_parallax_handler);
	function wa_parallax_handler(e) {
		const items = document.querySelectorAll(".wa_parallax_elm");
	
		items.forEach((el) => {
			const speed = parseFloat(el.getAttribute("data-value")) || 0;
			const x = (e.clientX * speed) / 250;
			const y = (e.clientY * speed) / 250;
	
			el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
		});
	}
}




/* 
	faqs-active-class
*/
$(document).on('click', '.wa_accordion_item', function () {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active').siblings().removeClass('active');
	}

});


// placeholder-typing
document.querySelectorAll(".wa_placeholder").forEach(waPlaceholderInput => {
	const waPlaceholderText = waPlaceholderInput.placeholder; 
	const waStartDelay = waPlaceholderInput.dataset.startDelay ? parseInt(waPlaceholderInput.dataset.startDelay) : 0; 
	let waPlaceholderIndex = 0;
	waPlaceholderInput.placeholder = "";

	const waPlaceholderObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				waPlaceholderType();
				waPlaceholderObserver.unobserve(waPlaceholderInput);
			}
		});
	}, { threshold: 0.5 });

	setTimeout(() => {
		waPlaceholderObserver.observe(waPlaceholderInput);
	}, waStartDelay);

	function waPlaceholderType() {
		if (waPlaceholderIndex < waPlaceholderText.length) {
			waPlaceholderInput.placeholder += waPlaceholderText.charAt(waPlaceholderIndex);
			waPlaceholderIndex++;
			setTimeout(waPlaceholderType, 70); 
		}
	}
});

/* 
	bootstrap-tooltip-activation
*/
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* 
	back-to-top-button-function
*/
if ($('.wa_backToTop').length) {
    var scrollTopbtn = document.querySelector('.wa_backToTop');
    var offset = 500; 
    var duration = 1000; 

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $(scrollTopbtn).addClass('active');
        } else {
            $(scrollTopbtn).removeClass('active');
        }
    });

    $(scrollTopbtn).on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration, 'swing');
    });
}

/* 
	popup-video-activation
*/
if($('.popup_video').length) {
	$('.popup_video').magnificPopup({
		type: 'iframe'
	});
}

/* 
	popup-image-activation
*/
if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}


/* 
	nice-selector-activation
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}


/* 
	background-image-function
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

/* 
	counter-activation
*/


if($(".counter").length) {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    let elements = document.querySelectorAll(".wa-counter");

    elements.forEach(element => {
        let innerWidth = element.clientWidth;
        element.style.width = innerWidth + "px";
    });
}

/*
    odomater-activation
*/

$('.odometer').appear(function () {
    var $this = $(this); 
    var countNumber = $this.attr("data-count");
    $this.html(countNumber);
});


/* 
	current-year-function
*/
if ($('.copyright-year').length) {
    const currentYear = new Date().getFullYear();
    $('.copyright-year').text(currentYear);
}





})(jQuery);