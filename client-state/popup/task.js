const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');
    function getCookie(name) {
    const pairs = document.cookie.split('; ');
  const cookie = pairs.find(p => p.startsWith(name + '='));
  return cookie ? cookie.substring(name.length + 1) : null;
}
if (getCookie('modal_closed') === 'true') {
  modal.classList.remove('modal_active');
} else {
  modal.classList.add('modal_active');
}
closeButton.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modal_closed=true; max-age=31536000; path=/';
}
);