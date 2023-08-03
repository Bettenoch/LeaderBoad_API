const formField = document.getElementById('form-area');

const showMessage = (message) => {
  const msgContext = document.createElement('small');

  if (message.includes('provide')) {
    msgContext.className = 'errorMsg';
    msgContext.textContent = `${message}`;
    formField.append(msgContext);
  } else {
    msgContext.className = 'successMsg';
    msgContext.textContent = `${message}`;
    formField.append(msgContext);
  }

  setTimeout(() => {
    formField.removeChild(msgContext);
  }, 3500);
};

export default showMessage;