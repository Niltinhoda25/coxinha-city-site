function copyIP(){
  navigator.clipboard.writeText("play.coxinhacity.com");
  alert("IP copiado!");
}

function toggleMusic(){
  const audio = document.getElementById("bgm");

  if(audio.paused){
    audio.volume = 0.5; // volume 50%
    audio.play().then(() => {
      console.log("Música tocando");
    }).catch(err => {
      console.log("Erro ao tocar:", err);
    });
  } else {
    audio.pause();
  }
}

/* PARTÍCULAS */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*3,
speed:Math.random()*1
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.y-=p.speed;
if(p.y<0)p.y=canvas.height;

ctx.fillStyle="#00ff00";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();