const botaoMenu = document.querySelector("#button_menu");
const navMenu = document.querySelector("#menu_hamburguer");
const bodyMenu =document.querySelector(".body_menu_hamburguer")

botaoMenu.addEventListener("click",function(){
  
   if(bodyMenu.style.display === "block" || navMenu.style.display === "block"){
       
      bodyMenu.style.display = "none";
      navMenu.style.display = "none";

   }else{
      bodyMenu.style.display = "block"; 
      navMenu.style.display = "block";
   }

})