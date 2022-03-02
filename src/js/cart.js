$(function(){
    $(".delete").on("click" , function(){
        $(this).parentsUntil(".col-md-7").fadeOut() ; 
    })
})