const botaoLogin = document.querySelector("#button_entry");
const section = document.querySelector(".body_login");
const divLogin = document.querySelector(".login");


botaoLogin.addEventListener("click",function(){

  if(section.style.display === "block" || divLogin.style.display ==="block"){
     
    section.style.display = "none" ;
    divLogin.style.display = "none";


  }else{
    section.style.display = "block" ;
    divLogin.style.display = "block";

    section.style.transition = all
    divLogin.style.transition = all
    
  }

});