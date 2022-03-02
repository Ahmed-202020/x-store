$(function(){
    $(".title-curr ").on("click" , function(){
        $(this).siblings().removeClass("active-title") ; 
        $(this).addClass("active-title") ; 
        $(".current-orders").css({"display" : "block"}) ; 
        $(".current-orders.finished-orders").css({"display" : "none"}) ; 
    });
    $(".title-finish").on("click" , function(){
        $(this).siblings().removeClass("active-title") ; 
        $(this).addClass("active-title") ; 
        $(".current-orders").css({"display" : "none"}) ; 
        $(".current-orders.finished-orders").css({"display" : "block"}) ; 
    })
})