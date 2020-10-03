document.querySelector('.btn-left').onclick = left;
document.querySelector('.btn-right').onclick = right;
let images = document.querySelectorAll('.slider__inner img');
let inner = document.querySelector('.slider__inner');
let li = document.querySelectorAll('.indicators li');
let i = 0;
let timer;
autoplay();

function autoplay() {
    timer = setTimeout(right, 2000);
};



function left() {
    images[i].style.opacity = 0;
    li[i].classList.remove('active');
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.opacity = 1;
    li[i].classList.add('active');
    clearTimeout(timer);
    autoplayLeft();
};

function right() {
    images[i].style.opacity = 0;
    li[i].classList.remove('active');
    i++;
    if (i >= images.length) {
        i = 0
    }
    images[i].style.opacity = 1;
    li[i].classList.add('active');
    clearTimeout(timer);
    autoplay();
};

inner.addEventListener('mouseover', function () {
    clearTimeout(timer);
});

inner.addEventListener('mouseout', function () {
    autoplay();
});

for (let j = 0; j < li.length; j++) {

    li[j].addEventListener('click', function () {
        clearTimeout(timer);
        document.querySelector('.indicators .active').classList.remove('active');
        this.classList.add('active');
        let attr = this.getAttribute('data-slide-to');
        i = attr;
        for (let g = 0; g < images.length; g++) {
            images[g].style.opacity = 0;
        }
        images[attr].style.opacity = 1;
        autoplay();
    })

}
    $('.nav__menu li a').click(function(e){
        e.preventDefault();
        $('.nav__menu li a').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.nav__menu').innerHeight()
         }, 1000);  
    });
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        $('.nav__menu li a').each(function(){
            if(scroll >=  $($(this).attr('href')).offset().top){
                $('.nav__menu li a').removeClass('active');
                $(this).addClass('active');
            }
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

