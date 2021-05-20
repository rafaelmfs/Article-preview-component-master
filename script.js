var tooltip = document.querySelector(".tooltip");
var width = window.innerWidth;

console.log(width);
tooltip.addEventListener("click", () =>{
    width = window.innerWidth;
     if(width<=700){
        tooltip.classList.toggle("on");
        document.querySelector(".tooltip-mobile").classList.toggle("on");
        document.querySelector(".profile").classList.toggle("off");
     }else{ 
        tooltip.classList.toggle("on")
        
    }
})