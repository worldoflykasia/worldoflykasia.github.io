var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 300);

//    $('body').animate({
//      left: "350px"
//    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-350px"
    }, 300);

//    $('body').animate({
//      left: "0px"
//    }, 200);
  });

$('.icon-menu2').click(function() {
    $('.notes').animate({
      left: "0px"
    }, 300);

//    $('body').animate({
//      left: "350px"
//    }, 200);
  });

  /* Then push them back */
  $('.icon-close2').click(function() {
    $('.notes').animate({
      left: "-350px"
    }, 300);

//    $('body').animate({
//      left: "0px"
//    }, 200);
  });


$(document).ready(function(){
$('.reps').hide();
$('.noted').hide();

    $('input[name="togglereprenpro"]').click(function(){
        $('.reps').toggle();
    });
	$('input[name="togglenotes"]').click(function(){
        	$('.noted').toggle();
	});
});


};


$(document).ready(main);