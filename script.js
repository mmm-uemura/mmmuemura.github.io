$(function(){

$('#modal-btn').click(function(){
  $('.login-modal-wrapper').fadeIn();
})
$('.submit-btn').click(function(){
  $('.login-modal-wrapper').fadeOut();
})



$('#cart-btn').click(function(){
  $('.cart-modal-wrapper').fadeIn();
})



$('.submit-btn').click(function(){
  $('.cart-modal-wrapper').fadeOut();
})

$('.copy').ready(function(){
  $('h1').fadeIn(2000);
});

$(window).scroll(function() {
  $('.fadein').each(function() {
    let scroll = $(window).scrollTop();
    let target = $(this).offset().top;
    let windowHeight = $(window).height();
    if (scroll > target - windowHeight +2) {
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    }
  });
});




});
