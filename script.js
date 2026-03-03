function copyIP(){
navigator.clipboard.writeText("play.coxinhacity.com");
alert("IP Copiado!");
}

function toggleMusic(){
let music = document.getElementById("bgm");
if(music.paused){
music.play();
}else{
music.pause();
}
}

function searchMods(){
let input = document.getElementById("searchMod").value.toLowerCase();
let items = document.querySelectorAll(".modlist li");

items.forEach(function(item){
let text = item.textContent.toLowerCase();
if(text.includes(input)){
item.style.display = "block";
}else{
item.style.display = "none";
}
});
}