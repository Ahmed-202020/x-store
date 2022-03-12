$(function(){
    $(".delete").on("click" , function(){
        $(this).parentsUntil(".col-lg-7").fadeOut() ; 
    })
})