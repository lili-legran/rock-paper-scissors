let buttonPlay = document.querySelector('.game__control-panel_play');
let buttons = document.querySelectorAll('.game__button');
const rockButton = document.querySelector('.game__control-panel_rock');
const paperButton = document.querySelector('.game__control-panel_paper');
const scissorsButton = document.querySelector('.game__control-panel_scissors');
let gamerImage = document.querySelector('.game__gamer_rock');
let computerImage = document.querySelector('.game__computer_rock');
let rock = './acess/rock.png';
let scissors = './acess/scissors.png';
let paper = './acess/paper.png';
const items = [rock, scissors, paper];
let choiceGamer;
let choiseComputer;

const enableButtonPlay = () => {
  buttonPlay.classList.add('game__button_enabled');
};

const reverseImage = () => {
  gamerImage.style.transform = 'scale(-1, 1)';
}

const showRockImage = () => {
  gamerImage.style.backgroundImage = 'url(' + rock + ')';
  reverseImage();
}

const showScissorsImage = () => {
  gamerImage.style.backgroundImage = 'url(' + scissors + ')';
  reverseImage();
}

const showPaperImage = () => {
  gamerImage.style.backgroundImage = 'url(' + paper + ')';
  reverseImage();
}

const startPlay = () => {
  dissabledButtons();
  // shakerAnimation(); ??? добавить анимацию
  showChoiceComputers();
};

const dissabledButtons = () => {
  buttons.forEach(el => {
    el.classList.add('game__button_disable');
    el.disabled = true;
  });
}

const showChoiceComputers = () => {
  choiseComputer = items[Math.floor(Math.random() * 3)];   
  computerImage.style.backgroundImage = 'url(' + choiseComputer + ')';
}

buttons.forEach(element => {
  return element.addEventListener('click', enableButtonPlay);
});

// rockButton.addEventListener('click', showRockImage);
// scissorsButton.addEventListener('click', showScissorsImage);
// paperButton.addEventListener('click', showPaperImage);
buttonPlay.addEventListener('click', startPlay);



