const modal = document.getElementById("modal")
const modalBtn = document.getElementById("div-btn")
const open =  document.getElementById("open")
const close = document.getElementById("close")


modalBtn.addEventListener("click", function(){
   open.classList.toggle("notDispay")
   open.classList.toggle("active")
   close.classList.toggle("notDispay")
   close.classList.toggle("active")
   modal.classList.toggle("notDispayheader")
   document.querySelectorAll("[data-nav]").forEach(x => x.classList.add("notDispay"))
   document.querySelectorAll(".rotate").forEach(x => x.classList.remove("rotate"))
})


document.addEventListener("click", function(e){
    if(e.target.closest("#modal")) {
        if(e.target.matches("[data-nav-btn]")){
        e.target.closest("div").querySelector("nav").classList.toggle("notDispay")  
        e.target.closest("div").querySelector("svg").classList.toggle("rotate")  
        }
    }

    if(e.target.closest("#modal") || e.target.closest(".modal-btn")) return

    modal.classList.add("notDispayheader")
    open.classList.remove("notDispay")
    open.classList.add("active")
    close.classList.add("notDispay")
    close.classList.remove("active")
    document.querySelectorAll("[data-nav]").forEach(x => x.classList.add("notDispay"))
    document.querySelectorAll(".rotate").forEach(x => x.classList.remove("rotate"))
})