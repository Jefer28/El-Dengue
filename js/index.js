window.addEventListener("scroll", function(){
    var header = document.querySelector(".header")
    if (window.scrollY>0) {
        header.style.backgroundColor="#1979e0";
    }else{
        header.style.backgroundColor="transparent";
    }
})