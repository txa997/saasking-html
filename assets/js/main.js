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
	duration: .3,
	easing: (t) => 1 - Math.pow(1 - t, 4),
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


	if (document.querySelectorAll("#pn-loader-wrapper").length) {
		const loader = document.querySelector("#pn-loader-wrapper");
		
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


	}	




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
































// gsap.set(".move-line21 , .move-line22, .move-line23, .move-line24", { opacity: 0 });
let srH2svg2 = gsap.timeline({



});

gsap.to(".move-line21", {
	duration: 10,
	repeat: -1,
	ease: "none",

	motionPath: {
		path: ".main-line21",
		align: ".main-line21",
		autoRotate: true,
		alignOrigin: [0.5, 0.5],
		start: 0,
		end: 1,

	},

});

/* 
	products-1-slider-function
*/
if ($('.pn_p1_slider').length) {
	var pn_p1_slider = new Swiper(".pn_p1_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 24,
		slidesPerView: "auto",

		// autoplay: {
		// 	delay: 5000,
		// },

		navigation: {
			nextEl: ".pn_p1_slider_next",
			prevEl: ".pn_p1_slider_prev",
		},
		scrollbar: {
			el: ".pn_p1_slider_scrollbar",
		},


	});

}

/* 
	products-2-slider-function
*/
if ($('.pn_p2_slider').length) {
	var pn_p2_slider = new Swiper(".pn_p2_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 24,
		slidesPerView: 4,

		// autoplay: {
		// 	delay: 5000,
		// },

		navigation: {
			nextEl: ".pn_p2_slider_next",
			prevEl: ".pn_p2_slider_prev",
		},
		scrollbar: {
			el: ".pn_p2_slider_scrollbar",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},

		},

	});

}

/* 
	testimonial-1-slider-function
*/
if ($('.pn_t1_slider').length) {
	var pn_t1_slider = new Swiper(".pn_t1_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 24,
		slidesPerView: 3,

		// autoplay: {
		// 	delay: 5000,
		// },

		navigation: {
			nextEl: ".pn_t1_slider_next",
			prevEl: ".pn_t1_slider_prev",
		},
		scrollbar: {
			el: ".pn_t1_slider_scrollbar",
		},


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},

		},


	});

}




// testimonial-2-start
if ($('.pn_t2_preview_slider').length) {

	let pn_t2_preview_slider = new Swiper('.pn_t2_preview_slider', {
		loop: true,
		speed: 400,

		effect: "creative",
		creativeEffect: {
		  prev: {
			shadow: false,
			translate: ["-125%", 0, -800],
			rotate: [0, 0, -90],
		  },
		  next: {
			shadow: false,
			translate: ["125%", 0, -800],
			rotate: [0, 0, 90],
		  },
		},

	});
  
	let pn_t2_main_slider = new Swiper('.pn_t2_main_slider', {
		loop: true,
		speed: 400,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},

		autoplay: {
			delay: 5000,
		},

		thumbs: {
			swiper: pn_t2_preview_slider,
		},

		navigation: {
			nextEl: ".pn_t2_slider_next",
			prevEl: ".pn_t2_slider_prev",
		},
		scrollbar: {
			el: ".pn_t2_slider_scrollbar",
		},

	});
  
}
 

// projects-3-start
if ($('.pn_p3_slider').length) {

	var pn_p3_slider = new Swiper('.pn_p3_slider', {
		loop: true,
		speed: 1000,

		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 3,
		coverflowEffect: {
			rotate: 0,
			stretch: 80,
			depth: 250,
			modifier: 1,
			slideShadows: false,
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.pn_p3_slider_next',
			prevEl: '.pn_p3_slider_prev',
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
	
		},
	
	})
  
}
 

/* 
	choose-3-slider-function
*/
if ($('.pn_choose_3_slider').length) {
	var pn_t1_slider = new Swiper(".pn_choose_3_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 24,
		slidesPerView: 3,
		
		autoplay: {
			delay: 5000,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 5,
			},

		},


	});

}


/* 
	home-1-all-svg-animation
*/
if($(".pn-about-1-bg-shape").length) {
	const svgPath = document.querySelector(".pn-about-1-bg-shape path");
    if (!svgPath) return;

    const length = svgPath.getTotalLength();

    gsap.set(svgPath, {
        strokeDasharray: length + " " + length,
        strokeDashoffset: length
    });
    const drawDuration = 2.2;   
    const eraseDuration = 2.2; 
    const holdAfterDraw = 0.25; 
    const holdAfterErase = 0.12;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to(svgPath, {
        strokeDashoffset: 0,
        duration: drawDuration,
        ease: "power2.out"
    });

    if (holdAfterDraw > 0) {
        tl.to({}, { duration: holdAfterDraw });
    }

    tl.to(svgPath, {
        strokeDashoffset: -length,
        duration: eraseDuration,
        ease: "power2.in"
    });

    if (holdAfterErase > 0) {
        tl.to({}, { duration: holdAfterErase });
    }
    tl.set(svgPath, { strokeDashoffset: length });
}

if($(".pn-process-1-bg-illus-2").length) {
	const svgP2 = document.querySelector('.pn-process-1-bg-illus-2 path');

	svgP2.style.stroke = "#3A5BA0";
	svgP2.style.strokeWidth = "2";
	svgP2.style.fill = "transparent";

	const lenP2 = svgP2.getTotalLength();

	svgP2.style.strokeDasharray = lenP2;
	svgP2.style.strokeDashoffset = lenP2;

	const tlP2 = gsap.timeline({ repeat: -1, repeatDelay: 0 });

	tlP2
	.to(svgP2, {
		strokeDashoffset: 0,
		duration: 2,
		ease: "power2.inOut"
	})
	.to(svgP2, {
		fill: "#3A5BA0",
		duration: 1,
		ease: "power2.inOut"
	}, "-=1")
	.to(svgP2, {
		strokeDashoffset: -lenP2,
		duration: 2,
		ease: "power2.inOut"
	})
	.to(svgP2, {
		fill: "transparent",
		duration: 0.8,
		ease: "power1.inOut"
	}, "-=1.2");

	
}

if ($(".pn-categories-1-bg-shape").length) {

	const svgs = document.querySelectorAll('.pn-categories-1-bg-shape path');

	svgs.forEach((svg) => {

		svg.style.stroke = "#34823D";
		svg.style.strokeWidth = "2";
		svg.style.fill = "transparent";

		const length = svg.getTotalLength();
		svg.style.strokeDasharray = length;
		svg.style.strokeDashoffset = length;

		const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

		tl.to(svg, {
			strokeDashoffset: 0,
			duration: 2.2,
			ease: "power2.inOut"
		})

		.to(svg, {
			fill: "#34823D",
			duration: 1,
			ease: "power2.inOut"
		}, "-=1.2")

		.to(svg, {
			strokeDashoffset: -length,
			duration: 2.2,
			ease: "power2.inOut"
		})

		.to(svg, {
			fill: "transparent",
			duration: 0.8,
			ease: "power1.inOut"
		}, "-=1.5");

	});
}



if($(".pn-process-1-bg-illus-3").length) {
	const svgP3 = document.querySelector('.pn-process-1-bg-illus-3 path');

	svgP3.style.stroke = "#E61E5B";
	svgP3.style.strokeWidth = "2";
	svgP3.style.fill = "transparent";

	const lenP3 = svgP3.getTotalLength();

	svgP3.style.strokeDasharray = lenP3;
	svgP3.style.strokeDashoffset = lenP3;

	const tlP3 = gsap.timeline({ repeat: -1, repeatDelay: 0 });

	tlP3
	.to(svgP3, {
		strokeDashoffset: 0,
		duration: 2.5,
		ease: "power2.inOut"
	})
	.to(svgP3, {
		fill: "#E61E5B",
		duration: 1.2,
		ease: "power2.inOut"
	}, "-=1.2")
	.to(svgP3, {
		strokeDashoffset: -lenP3,
		duration: 2.5,
		ease: "power2.inOut"
	})
	.to(svgP3, {
		fill: "transparent",
		duration: 1,
		ease: "power1.inOut"
	}, "-=1.5");

	
}

if($(".pn-choose-1-bg-shape").length) { 


    const svgPath = document.querySelector(".pn-choose-1-bg-shape path");
    if (!svgPath) return;

    const length = svgPath.getTotalLength();

    gsap.set(svgPath, {
        strokeDasharray: `${length} ${length}`,
        strokeDashoffset: length,
        stroke: "#E61E5B",
        strokeWidth: 2,
        fill: "#E61E5B",
        fillOpacity: 0
    });

    const drawDuration = 2.3;
    const eraseDuration = 2.3;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(svgPath, {
        strokeDashoffset: 0,
        duration: drawDuration,
        ease: "power2.out"
    });

    tl.to(svgPath, {
        fillOpacity: 1,
        duration: 0.8,
        ease: "power1.out"
    });

    tl.to({}, { duration: .25 });

    tl.to(svgPath, {
        strokeDashoffset: -length,
        duration: eraseDuration,
        ease: "power2.in"
    });

    tl.to(svgPath, {
        fillOpacity: 0,
        duration: 0.8,
        ease: "power1.in"
    });

    tl.to({}, { duration: .2 });

    tl.set(svgPath, { strokeDashoffset: length });

}

if($(".pn-choose-1-bg-shape-2").length) { 
		
	const svgC2 = document.querySelector('.pn-choose-1-bg-shape-2 path');

	svgC2.style.stroke = "#34823D";
	svgC2.style.strokeWidth = "3";
	svgC2.style.fill = "transparent";

	const lenC2 = svgC2.getTotalLength();

	svgC2.style.strokeDasharray = lenC2;
	svgC2.style.strokeDashoffset = lenC2;

	const tlC2 = gsap.timeline({ repeat: -1, repeatDelay: 0 });

	tlC2
	.to(svgC2, {
		strokeDashoffset: 0,
		duration: 2.2,
		ease: "power2.inOut"
	})
	.to(svgC2, {
		fill: "#34823D",
		duration: 1.2,
		ease: "power2.inOut"
	}, "-=1.2")
	.to(svgC2, {
		strokeDashoffset: -lenC2,
		duration: 2.2,
		ease: "power2.inOut"
	})
	.to(svgC2, {
		fill: "transparent",
		duration: 1,
		ease: "power1.inOut"
	}, "-=1.5");
}

if($(".pn-testimonial-1-bg-svg").length) { 
	const svgT1 = document.querySelector('.pn-testimonial-1-bg-svg path');

	svgT1.style.stroke = "#E61E5B";
	svgT1.style.strokeWidth = "3";
	svgT1.style.fill = "transparent";
	
	const lenT1 = svgT1.getTotalLength();
	svgT1.style.strokeDasharray = lenT1;
	svgT1.style.strokeDashoffset = lenT1;
	
	const tlT1 = gsap.timeline({ repeat: -1, repeatDelay: 0 });
	
	tlT1
	.to(svgT1, {
		strokeDashoffset: 0,
		duration: 2.4,
		ease: "power2.inOut"
	})
	.to(svgT1, {
		fill: "#E61E5B",
		duration: 1.3,
		ease: "power2.inOut"
	}, "-=1.2")
	.to(svgT1, {
		strokeDashoffset: -lenT1,
		duration: 2.4,
		ease: "power2.inOut"
	})
	.to(svgT1, {
		fill: "transparent",
		duration: 1,
		ease: "power1.inOut"
	}, "-=1.5");
	
}

if($(".pn-blog-1-bg-svg").length) { 
	const svgBlog = document.querySelector('.pn-blog-1-bg-svg path');

	svgBlog.style.stroke = "#34823D";
	svgBlog.style.strokeWidth = "3";
	svgBlog.style.fill = "transparent";

	const lenBlog = svgBlog.getTotalLength();
	svgBlog.style.strokeDasharray = lenBlog;
	svgBlog.style.strokeDashoffset = lenBlog;

	const tlBlog = gsap.timeline({ repeat: -1, repeatDelay: 0 });

	tlBlog
	.to(svgBlog, {
		strokeDashoffset: 0,
		duration: 2.4,
		ease: "power2.inOut"
	})
	.to(svgBlog, {
		fill: "#34823D",
		duration: 1.3,
		ease: "power2.inOut"
	}, "-=1.2")
	.to(svgBlog, {
		strokeDashoffset: -lenBlog,
		duration: 2.4,
		ease: "power2.inOut"
	})
	.to(svgBlog, {
		fill: "transparent",
		duration: 1,
		ease: "power1.inOut"
	}, "-=1.5");

}






if($(".pn-video-1-item").length) {
	document.querySelectorAll('.pn-video-1-item').forEach(function(wrapper) {
		const video = wrapper.querySelector('.pn-video-1-item video');
		const playBtn = wrapper.querySelector('.pn-video-1-item .pn-play-btn-2');
	
		playBtn.addEventListener('click', function (e) {
			e.preventDefault();
	
			wrapper.classList.add('active');
			video.play();
		});
	
		video.addEventListener('ended', function () {
			wrapper.classList.remove('active');
		});
	
	});
	
}

if($(".pn-services-2-item").length) {
	const serviceItems = document.querySelectorAll('.pn-services-2-item');
	serviceItems.forEach(item => {
		item.addEventListener('mouseenter', function() {
			serviceItems.forEach(el => {
				el.classList.remove('active');
			});
			this.classList.add('active');
		});
	
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
      duration: 30,
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((waY) => parseFloat(waY) % waMarqueeTotalHeight),
      },
    });
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
$(document).on('click', '.wa_accordion_item', function(){
	$(this).addClass('active').siblings().removeClass('active')
})


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