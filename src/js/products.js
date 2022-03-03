$(function(){
    $(".min-nav .nav-item").on("click" , function(){
        $(".min-nav .nav-item").removeClass("min-active") ; 
        $(this).addClass("min-active") ; 
    })
    $(".sub-nav .nav-item").on("click" , function(){
        $(".sub-nav .nav-item").removeClass("sub-active") ; 
        $(this).addClass("sub-active") ; 
    })
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



    // Declare all variables
    let x , y , z , subTabcontent  ;
    if(document.getElementsByClassName("product-details")){
        subTabcontent = document.getElementsByClassName("product-details");
        for (x = 0; x <  subTabcontent.length; x++) {
            subTabcontent[x].style.display = "none";
        }
        // document.getElementsByClassName("default").style.display = "block";
        subDefault = document.querySelectorAll(".sub-default") ; 
        for (y = 0; y <  subDefault.length; y++) {
            subDefault[y].style.display = "block";
        }
    }
    function openSubMenu( subMenuName) {
      // Get all elements with class="subTabcontent " and hide them
        subTabcontent = document.getElementsByClassName("product-details");
        for (x = 0; x < subTabcontent.length; x++) {
            subTabcontent[x].style.display = "none";
        }
      // Show the current tab 
        let showTab =  document.querySelectorAll(`.${subMenuName}`) ;
        for (z = 0; z <  showTab.length; z++) {
            showTab[z].style.display = "block";
        }
    }
