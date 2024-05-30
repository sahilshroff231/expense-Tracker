var openpopup =document.querySelector('.openpopup');
var closepopup =document.querySelector('.close');

openpopup.addEventListener("click",function(){
     document.body.classList.add('popup-active');

})

closepopup.addEventListener("click",function(){
    document.body.classList.remove('popup-active');
})