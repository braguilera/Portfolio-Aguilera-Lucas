(function(){
    window.addEventListener("scroll",()=>{
        var header = document.querySelector("nav");
        header.classList.toggle("abajo",window.scrollY>0)
    })
})();