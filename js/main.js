function openPopup(){
    document.getElementById("open").style.display = "block";
}

function closePopup(){
    document.getElementById("open").style.display = "none";
}

function showMenu(){
    document.getElementById("show-close-menu").style.display = "block";
}

function closeMenu(){
    if(document.getElementById("toggler") === false){
       document.getElementById("show-close-menu").style.display = "none";
    }
}

