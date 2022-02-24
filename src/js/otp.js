$(function(){
    $(".form-control.one").keyup(function(e){
        if ( (e.which == 96 ) || (e.which == 97 ) || (e.which == 98 ) || (e.which == 99 ) || (e.which == 100 ) 
        || (e.which ==101 ) || (e.which == 102 ) || (e.which == 103 ) || (e.which == 104 ) || (e.which == 105 )){
            $(".form-control.two").focus();
        }else{
            e.preventDefault();
        }
    });
    $(".form-control.two").keyup(function(e){
        if ( (e.which == 96 ) || (e.which == 97 ) || (e.which == 98 ) || (e.which == 99 ) || (e.which == 100 ) 
        || (e.which ==101 ) || (e.which == 102 ) || (e.which == 103 ) || (e.which == 104 ) || (e.which == 105 )){
            $(".form-control.three").focus();
        }else{
            e.preventDefault();
        }
    });
    $(".form-control.three").keyup(function(e){
        if ( (e.which == 96 ) || (e.which == 97 ) || (e.which == 98 ) || (e.which == 99 ) || (e.which == 100 ) 
        || (e.which ==101 ) || (e.which == 102 ) || (e.which == 103 ) || (e.which == 104 ) || (e.which == 105 )){
            $(".form-control.four").focus();
        }else{
            e.preventDefault();
        }
    });
})