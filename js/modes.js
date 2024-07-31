const luna = document.getElementById("luna");

luna.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
        luna.src = "img/icons8-sun-24.svg" ;
    }else{
        luna.src ="img/untitled.svg";
    }

    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'true');
    }else{
        localStorage.setItem('darkMode', 'false');
    }
}

if(localStorage.getItem('darkMode') === 'true'){
    document.body.classList.add('dark-mode');
}else{
    document.body.classList.remove('dark-mode');
}