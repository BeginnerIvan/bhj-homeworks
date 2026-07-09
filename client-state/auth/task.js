const signInBlock = document.getElementById('signin');
const signInForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
// вход привет)
    function showWelcome(userId) {
  signInBlock.classList.remove('signin_active');
  userIdSpan.textContent = userId;
  welcomeBlock.classList.add('welcome_active');
}
const savedUserId = localStorage.getItem('user_id');
if (savedUserId) {
  showWelcome(savedUserId);
} else {
  signInBlock.classList.add('signin_active');
}
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(signInForm);
  const url = signInForm.getAttribute('action');
  fetch(url, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('user_id', data.user_id);
        showWelcome(data.user_id);
        signInForm.reset();
      } else {
        alert('Неверный логин или пароль!');
        signInForm.reset();
      }
    })
     .catch(error => {
      console.error('Ошибка авторизации:', error);
      alert('Произошла ошибка при отправке запроса.');
    }
);
}
);