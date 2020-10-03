

document.querySelector('.filter__group').addEventListener('click', function(){
    document.querySelector('.filter__option').classList.toggle('show');

});

$(document).ready(function () {
    $('.test').slice(0, 8).slideDown();
    $('.load').click(function(e){
        var count = $('.test').length - 1;
        e.preventDefault();
        $('.test:hidden').slice(0, 8).slideDown().addClass('show');
        if($('.test').eq(count).hasClass('show')){
            $('.unload').css('display', 'block');
        }
    });
    $('.unload').click(function(e){
        e.preventDefault();
        $('.show').slideUp().removeClass('show');
        $('.unload').hide();
        $('.load').css('display', 'block')
    })
});

$(document).ready(function () {
    function filterProducts(card){
        $('.card').filter(card).slideDown();
        $('.card').not(card).slideUp();
    }
    
    $('.option').click(function(){
         filterProducts('.' + $(this).attr('data-products'));
    })
    
    
});

let btn = document.querySelector('.btnToTop');
let timerToTop;
btn.addEventListener('click', toTop);


function toTop(){
scrolled = window.pageYOffset;

if(scrolled > 0){
    scrolled -= 50;
    scrollTo(0, scrolled);
    timerToTop = setTimeout(toTop, 10);
}
}

window.addEventListener('scroll', function(){
if(pageYOffset > 600){
    btn.style.display = 'block';
}
else{
    btn.style.display = 'none';
}
});

$(document).ready(function () {
    
    $('.card img').click(function(){
       $('.overlay').show(); 
       $('.popup').addClass('popup-active');
       var text = $(this).text();
       $('.phone').text(text);
    });
    
    $('.close-btn, .overlay').click(function(){
       $('.overlay').hide();
       $('.popup').removeClass('popup-active'); 
       $('.form-control').val('');
    });
    
    $('form').submit(function(e){
        $('.form-control').each(function(){
            if($(this).val() == ''){
                e.preventDefault();
            };
   
        });
    });
    
  
    
});
    
    
