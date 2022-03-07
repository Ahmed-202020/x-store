$(function(){
    $('.owl-carousel').owlCarousel({
        // loop: true,
        rtl:true,
        slideSpeed : 300,
        paginationSpeed : 400,
        autoHeight : true,
        margin: 15,
        nav: true,
        
        responsive: {
            0: {
                items: 1 , 
            },
            600: {
                items: 2 , 
            },
            1000: {
                items: 6 , 
            },
        }
    }) ;
})