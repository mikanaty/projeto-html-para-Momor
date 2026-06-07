function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
heart.style.left = Math.random() * 100 + "Vw"
heart.style.animationDuration = Math.random() * 2 + 3 + "s";    

document.body.appendChild(heart);
setTimeout(() => {    heart.remove();
}, 5000);


function sendlove(){
    let name = getQueryParam("name") || "Alguém Especial";
    let message = document.getElementById("message");
    message.innerHTML = `Você está comigo pra sempre, Mikaela ${name}!`;
    setTimeout(() => {
    message.style.opacity = 1;
    }, 100);
}

   createHeart();
   createHeart();
   createHeart();
}


sendlove();