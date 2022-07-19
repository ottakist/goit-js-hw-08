import throttle from 'lodash.throttle';

const button = document.querySelector('button');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');
const settings = {
  email: '',
  message: '',
};
try {
  const ourData = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(ourData);
  emailInput.value = parsedSettings.email;
  messageInput.textContent = parsedSettings.message;
} catch {}
const check = event => {
  event.preventDefault();
  const ourData = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(ourData);
  console.log(parsedSettings);
  form.reset();
};
const email = event => {
  settings.email = emailInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(settings));
};
const message = event => {
  settings.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(settings));
};
form.addEventListener('submit', check);
emailInput.addEventListener('input',throttle(email, 500))
// messageInput.addEventListener('input',throttle(message, 500))