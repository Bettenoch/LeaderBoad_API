import showScores from './DisplayScore.js';
import showMessage from './ValidateForm.js';

const myScores = document.getElementById('scores-display');
const MY_ID = 'MCFVpRFD1Przw09OSrOE';

export const retrieveScores = async () => {
  try {
    const final = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${MY_ID}/scores/`);
    const outcome = await final.json();

    if (!final.ok) {
      return outcome;
    }

    const points = outcome.result;
    myScores.innerHTML = '';
    points.forEach((point) => {
      myScores.append(showScores(point));
    });

    return points;
  } catch (err) {
    return err;
  }
};

export const addScore = async (updatedScore) => {
  try {
    const final = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${MY_ID}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedScore),
    });
    const outcome = await final.json();

    if (!final.ok) {
      showMessage(outcome.message);
      return outcome;
    }

    retrieveScores();
    showMessage(outcome.result);
    return outcome;
  } catch (err) {
    return err;
  }
};