/*==loder js==*/
$(window).load(function() {
    $(".loader").delay("400") .fadeOut("400");
});



//scroll to top 
$(window).scroll(function(){
  if($(this).scrollTop()>150){
    $('.scrollup').fadeIn();
  }else{
    $('.scrollup').fadeOut();
    }
  });
$('.scrollup').click(function(){
  $("html, body").animate({scrollTop:0}, 600)
  return false;
  });
  
/*==humberger menu js==*/
(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('.bar-collapse'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded2');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  //hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
/*==humberger menu js==*/

/*==banner slider js==*/
  $('#owldemo1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed: 950,
    slideSpeed : 400,
    paginationSpeed : 800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*==testimonials slider js==*/
  $('#owldemo3').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed: 950,
    slideSpeed : 400,
    paginationSpeed : 800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        }
    }
})



/*==blog slider js==*/
  $('#owldemo4').owlCarousel({
    loop:true,
    margin:10,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed: 950,
    slideSpeed : 400,
    paginationSpeed : 800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1000:{
            items:4
        }
    }
})





//Date Picker
 $('#datetimepicker1').datetimepicker({
  lang:'ch',
  timepicker:false,
  format:'d/m/Y',
  formatDate:'Y/m/d',
    }); 