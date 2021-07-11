const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const toDoForm = document.getElementById('todo-form');
const loginBox = document.querySelector('.login-box');

const FLEX_CLASSNAME = 'flex';
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.add(FLEX_CLASSNAME);
  loginBox.classList.remove(FLEX_CLASSNAME);
  loginBox.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
  loginBox.classList.add(FLEX_CLASSNAME);
} else {
  paintGreeting(saveUsername);
}
