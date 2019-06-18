$('.card-header').click(function () {
    
    $('.card-body, .card-footer').hide();
    $(this).siblings().show();
})

