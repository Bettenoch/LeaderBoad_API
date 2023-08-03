import './styles/index.scss';

import { retrieveScores, addScore } from './modules/FetchScore.js';

const formField = document.getElementById('form-area');
const refresh = document.getElementById('refresh-btn');

formField.addEventListener('submit', (e) => {
  e.preventDefault();
  const userText = document.getElementById('input-text');
  const scoreText = document.getElementById('input-number');

  const updateScore = {
    user: userText.value,
    score: Number(scoreText.value),
  };

  addScore(updateScore);

  userText.value = '';
  scoreText.value = '';
});

refresh.addEventListener('click', retrieveScores);

// window.onload = () => {
//   retrieveScores();
// };