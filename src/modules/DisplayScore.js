import 'boxicons';

const showScores = ({ user, score }) => {
  const li = document.createElement('li');
  li.classList.add('user-score');
  li.innerHTML = `
        <article class='list-display'>
            <box-icon type='solid' name='user-pin'></box-icon>
            <div>
              <span class="user">${user}:</span>
              <span class="score">${score}</span> 
            </div>
        </article>
    `;
  return li;
};

export default showScores;