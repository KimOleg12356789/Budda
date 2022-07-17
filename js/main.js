$(document).ready(function(){

    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.mt-mobile');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
        body.classList.toggle('body-open');
        burger.classList.toggle('burger-open');
        
    });


    $('.select').on('click','li',function(){
      $('#opened').click();
      var $t = $(this),
          $f = $('.field')
          text = $t.text(),
          icon = $t.find('i').attr('class');
      $f.find('label').text(text);
      $f.find('i').attr('class',icon)
    });
    $('.field').click(function(e){
      e.preventDefault();
      $('#opened').click();
    });
    

});