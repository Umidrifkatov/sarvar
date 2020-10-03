$('#small a').click(function(e){
    e.preventDefault();
    $('#small a').removeClass('active');
    var link = $(this).addClass('active').attr('href');
    $('#big img').fadeOut(function(){
        $(this).attr('src', link).fadeIn();
        $('#small a').not('.active')
        
    });
});