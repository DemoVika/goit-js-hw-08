import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener(
  'input',
  throttle(() => {
    const feedback = {
      email: formEl.elements.email.value,
      message: formEl.elements.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
  }, 500)
);

function load() {
  const value = localStorage.getItem('feedback-form-state');

  if (value !== null) {
    const parseValue = JSON.parse(value);
    formEl.elements.email.value = parseValue.email;
    formEl.elements.message.value = parseValue.message;
  }
}

load();

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const feedback = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };

  if (feedback.email !== '' && feedback.message !== '') {
    localStorage.clear();
    event.target.reset();
    console.log(feedback);
  }
}
