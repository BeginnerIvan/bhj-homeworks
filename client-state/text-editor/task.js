const editor = document.getElementById('editor');
const savedText = localStorage.getItem('editor_text');
if (savedText) {
  editor.value = savedText;
}
editor.addEventListener('input', () => {
  localStorage.setItem('editor_text',editor.value);
});
    const clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
clearButton.className = 'btn-clear';
const card = document.querySelector('.card');
card.appendChild(clearButton);

clearButton.addEventListener('click', () => {
  editor.value = ''; 
  localStorage.removeItem('editor_text'); 
});