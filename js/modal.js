var modalclose=document.getElementsByClassName("modal-close")[0];
var modal=document.getElementsByClassName("modal")[0];

var closeModal=function(){
    modal.style.display="none";
}
var displayModal=function(){
    modal.style.display="block";
}

modalclose.onclick=closeModal;

window.onclick=closeModal;