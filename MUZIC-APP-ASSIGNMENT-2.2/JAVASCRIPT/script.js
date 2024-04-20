var click = document.getElementsByClassName(button_1);
var delet = document.getElementsByClassName(playbtn);
let songs = document.querySelectorAll(newSong)
click.addEventListener('click',send)
function send(){
    console.log("sucessfully send");
}
delet.addEventListener('click', del)
function del(){
   
    document.getElementsByClassName('newSongs').remove();

}
