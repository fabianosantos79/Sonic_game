const sonic = document.querySelector('.sonic')
const eggman = document.querySelector('.eggman')
const tela = document.querySelector('.gameplay')

const jumpSonic = () => {
    sonic.classList.add('jump')
    sonic.src = './Arquivos/Sonic-Jump.gif'

    setTimeout(() => {
      sonic.classList.remove('jump')
      sonic.src = './Arquivos/Sonic.gif'
    }, 800);
}

document.addEventListener('keypress', jumpSonic)

const loop = setInterval(() => {
  const positionEggman = eggman.offsetLeft;
  const positionSonic = sonic.offsetTop;

if(positionEggman > 0 && positionEggman < 150 && positionSonic > 200){
  eggman.style.animation = 'none'
  eggman.style.left = `${positionEggman}px`
  sonic.style.top = `${positionSonic}px`
  sonic.src = './Arquivos/Sonic-Loss.gif'
  sonic.style.width = '250px'
  tela.classList.add('fundoBack')
}

  }, 10);
