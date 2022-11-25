let bg1 = document.querySelector(".bg")
let text = document.querySelector(".loading-text")

let cargando = 0;
let int = setInterval(blurr, 50);

function blurr(){
    cargando++;
    text.innerText = `${cargando}%`;
    
    if (cargando === 100){
        clearInterval(int);
    }
    text.style.opacity = scale(cargando, 1, 100, 50, 0)
    bg1.style.filter = `blur(${scale(cargando, 0, 100, 30, 0)}px)`
    
}

const scale = (numero, in_min, in_max, out_min, out_max) => {
    return (numero - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }