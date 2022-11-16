
// SELECIONANDO AS FIGURAS
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


// EFEITO DE PULAR 
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');
    }, 500)
}

// FAZER FIGURA CANO INFINITA
const loop = setInterval(() =>{

    console.log('loop')

    //VERIFICAÇÃO DE POSIÇÃO DAS FIGURAS NO JOGO  -- SE MARIO BATE NO CANO 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' ,'');

    console.log(marioPosition);

    // FIGURA CANO EM MOVIMENTO OU PARADO
     if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animaion = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animaion = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
     }

}, 10);
    

// PARA PRESSIONAR TECLA E MARIO PULAR 
document.addEventListener('keydown', jump);