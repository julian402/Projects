var luna = document.getElementById("luna");

luna.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
        luna.src = "img/icons8-sun-24.svg" ;
    }else{
        luna.src ="img/untitled.svg";
    }
}