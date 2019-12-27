let buttonPlay = document.querySelector('.game__control-panel_play');
let allButtons = document.querySelectorAll('.game__button');
let controlButtons = document.querySelectorAll('.game__control-panel_choice');
const rockButton = document.querySelector('.game__control-panel_rock');
const paperButton = document.querySelector('.game__control-panel_paper');
const scissorsButton = document.querySelector('.game__control-panel_scissors');
let gamerImage = document.querySelector('.game__gamer_rock');
let computerImage = document.querySelector('.game__computer_rock');
let rock = './acess/rock.png';
let scissors = './acess/scissors.png';
let paper = './acess/paper.png';
const items = [rock, scissors, paper];
let gamerChoice;
let computerChoice;

const enableButtonPlay = () => {
  buttonPlay.classList.add('game__button_enabled');
};

const reverseImage = () => {
  gamerImage.style.transform = 'scale(-1, 1)';
}

const showRockImage = () => {
  gamerChoice = rock;
  removeButtonShadow();
  rockButton.classList.add('game__button-shadow');
}

const showScissorsImage = () => {
  gamerChoice = scissors;
  removeButtonShadow();
  scissorsButton.classList.add('game__button-shadow');
}

const showPaperImage = () => {
  gamerChoice = paper;
  removeButtonShadow();
  paperButton.classList.add('game__button-shadow');
}

const animationStart = () => {
  gamerImage.classList.add('game__hands-animation');
  computerImage.classList.add('game__hands-animation');
}

const animationEnd = () => {
  gamerImage.classList.remove('game__hands-animation');
  computerImage.classList.remove('game__hands-animation');
}

const dissabledButtons = () => {
  allButtons.forEach(el => {
    el.classList.add('game__button_disable');
    el.disabled = true;
  });
}

const showComputerChoice = () => {
  computerChoice = items[Math.floor(Math.random() * 3)];   
  computerImage.style.backgroundImage = 'url(' + computerChoice + ')';
}

const showGamerChoice = () => {
  gamerImage.style.backgroundImage = 'url(' + gamerChoice + ')';
  reverseImage(); 
}

const removeButtonShadow = () => {
  controlButtons.forEach(elem => {
    elem.classList.remove('game__button-shadow');
  });
}
const enableButtons = () => {
  allButtons.forEach(element => {
    return element.addEventListener('click', enableButtonPlay);
  });
}

const showResult = () => {
  animationEnd();
  showComputerChoice();
  showGamerChoice();
  removeButtonShadow();
}

const startPlay = () => {
  dissabledButtons();
  animationStart();
  setTimeout(showResult, 2000);  
};

rockButton.addEventListener('click', showRockImage);
scissorsButton.addEventListener('click', showScissorsImage);
paperButton.addEventListener('click', showPaperImage);
buttonPlay.addEventListener('click', startPlay);
enableButtons();



