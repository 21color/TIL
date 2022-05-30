window.onload = () => {
  'use strict'
    const CARROT_SIZE = 80;
    let CARROTS_NUM = 5;
    let BUGS_NUM = 5;
    const GAME_DULATION = 5;
    const gamesettime = document.querySelector('.gamesettime');
    const gamescore = document.querySelector('.gamescore');
    const gamefield = document.querySelector('.gamefield');
    const gamestopbtn = document.querySelector('.gamestop');
    const modal = document.querySelector('.gamemodal')
    const fieldRect = gamefield.getBoundingClientRect();

    const init = () => {
  gamefield.innerHTML = '';
  gamescore.innerText = CARROTS_NUM;
  addItem('carrots', CARROTS_NUM, '../img/carrot.png');
  addItem('bugs', BUGS_NUM, '../img/bug.png');
  }

  const addItem = (className, count, imgPath) => {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for(let i = 0; i <count; i ++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath)
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      gamefield.appendChild(item)
    }
  }

  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  } 
  const clickbugs = () => {
    const bugs = document.querySelectorAll('.bugs');
    bugs.forEach(bug => {
    bug.addEventListener('click', (e)=>{
      modal.classList.remove('hide');
      modal.innerHTML = `<button class="modal_replay">REPLAY</button>
      <p class="yourscore">YOU LOSE!</p>`
    })})
  }
  const removeItem = () => {
    const carrot = document.querySelectorAll('.carrots');
    carrot.forEach( value => {
      value.addEventListener('click', (e)=>{
       value.remove();
       gamescore.innerText = --CARROTS_NUM;
    })
    })
    
  }
  
  const starttimer = () => {
  const sec = 5; 
  for( let i = 0; i < sec; i++ ) {
  const getimer = setTimeout(()=> {
      gamesettime.innerHTML = `0 : ${5 - i}`;
     }, i * 1000
     );
     
     gamestopbtn.addEventListener('click', e => {
      clearTimeout(getimer);
    })
    }
    
  }
  const gameTimerAndScore = () => {
    gamesettime.style.visibility = 'visible';
    gamescore.style.visibility = 'visible';
  }

  const gameplay = ( ) => {
    const gamestopbtn = document.querySelector('.gamestop');
    const gameplay = document.querySelector('.gameplay');
    gameplay.addEventListener('click', e => {
    gameplay.classList.toggle('hide')
    gamestopbtn.classList.toggle('hide')
    init()
    gameTimerAndScore()
    starttimer()
    removeItem();
    clickbugs();
    }
    )
  }


  gameplay(); 

}