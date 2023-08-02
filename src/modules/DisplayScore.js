import 'boxicons';

const showScores = ({ user, score }) => {
  const li = document.createElement('li');
  li.classList.add('user-score');
  li.innerHTML = `
        <article>
            <box-icon type='solid' name='user-pin'></box-icon>
            <span class="user">${user}</span>
            <span class="score">${score}</span> 
        </article>
    `;
  return li;
};

export default showScores;