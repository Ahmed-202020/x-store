$(function(){
    $(".min-nav .nav-item").on("click" , function(){
        $(".min-nav .nav-item").removeClass("min-active") ; 
        $(this).addClass("min-active") ; 
    })
    $(".sub-nav .nav-item").on("click" , function(){
        $(".sub-nav .nav-item").removeClass("sub-active") ; 
        $(this).addClass("sub-active") ; 
    })
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
});


    // Declare all variables
    let i, tabcontent  ;
    if(document.getElementsByClassName("products")){
        tabcontent = document.getElementsByClassName("products");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.querySelector(".default").style.display = "grid";
    }
    function openMenu( menuName) {
      // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("products");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
      // Show the current tab 
        document.getElementById(menuName).style.display = "grid";
    }