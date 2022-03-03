$(function(){
    
    var counter =  $(".value-content").text() ; 
    var min = counter ; 
    var hiddenTag = $(".hidden-tag").text() ; 

    $(".add").on("click" , function(){
        counter = +counter+ +hiddenTag ; 
        $(".value-content").text(counter) ; 
    });

    $(".subtract").on("click" , function(){
        if(counter > min){
            counter = +counter- +hiddenTag ; 
            $(".value-content").text(counter);
        }
    }) ;    
})