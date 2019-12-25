let buttonPlay = document.querySelector('.game__control-panel_play');
let buttons = document.querySelectorAll('.game__button');
const rockButton = document.querySelector('.game__control-panel_rock');
const paperButton = document.querySelector('.game__control-panel_paper');
const scissorsButton = document.querySelector('.game__control-panel_scissors');
let gamerImage = document.querySelector('.game__gamer_rock');

const enableButtonPlay = () => {
  buttonPlay.classList.add('game__button_enabled');
};
const disableButtons = () => {
  // дисаблить остальные кнопки при клике на play 
};

const showRockImage = () => {
  gamerImage.style.backgroundImage = 'url("./acess/rock-right.png")';
}

const showScissorsImage = () => {
  gamerImage.style.backgroundImage = 'url("./acess/scissors-right.png")';
}

const showPaperImage = () => {
  gamerImage.style.backgroundImage = 'url("./acess/paper-right.png")';
}

buttons.forEach(element => {
  return element.addEventListener('click', enableButtonPlay);
});

rockButton.addEventListener('click', showRockImage);
scissorsButton.addEventListener('click', showScissorsImage);
paperButton.addEventListener('click', showPaperImage);