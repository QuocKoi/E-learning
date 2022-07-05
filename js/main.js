
//truncateCardTitle
window.addEventListener("load",function(){
    truncateCardTitle();
});
function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-title")
    for(var i=0;i< cardList.length;i++){
       var text = cardList[i].innerHTML;
       var newText=truncateString(text,30);
       cardList[i].innerHTML= newText;
    }
}
function truncateString(str,num){
    if(str.length>num){
        return str.slice(0,num) + "...";
    } else{
        return str;
    }
}
//SlideBarMini
var toggBtn = document.querySelector('.sideBarMini__button');
var sildeBarMini = document.querySelector('.sideBarMini');
var joyStick = document.querySelector('#checkbox');
toggBtn.addEventListener('click',function(){
    sildeBarMini.classList.toggle('is-open');

});
joyStick.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode');

});
