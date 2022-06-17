let adjustIcons = document.querySelectorAll('.adjust-icon');
const score_1 = document.querySelector('#score-1');
const score_2 = document.querySelector('#score-2');
let scoreAdjustments = {
  player_1: [],
  player_2: []
};

adjustIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    let [ userAction, playerNumber ] = icon.id.split('-');
    let scoreToUpdate = document.querySelector(`#score-${playerNumber}`);
    let scoreToUndo;
    switch (userAction) {
      case 'refresh':
        scoreToUpdate.innerText = 0;
        break;
      case 'undo':
        if (scoreAdjustments[`player_${playerNumber}`].length > 0) {
          scoreToUndo = scoreAdjustments[`player_${playerNumber}`].pop();
          scoreToUpdate.innerText = parseInt(scoreToUpdate.innerText) - scoreToUndo;
        };
        break;
      case 'bag_in':
        scoreToUpdate.innerText = parseInt(scoreToUpdate.innerText) + 3;
        scoreAdjustments[`player_${playerNumber}`].push(3);
        break;
      case 'bag_on':
        scoreToUpdate.innerText = parseInt(scoreToUpdate.innerText) + 1;
        scoreAdjustments[`player_${playerNumber}`].push(1);
        break;
    };
  });
});
