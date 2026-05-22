function initDropdown(dropdown) {
  const valueBlock = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  if (!valueBlock || !list) return;
  let valueTextSpan = valueBlock.querySelector('.dropdown__value-text');
  if (!valueTextSpan) {
    valueTextSpan = document.createElement('span');
    valueTextSpan.className = 'dropdown__value-text';
    const originalText = valueBlock.textContent.trim();
    valueTextSpan.textContent = originalText;
    valueBlock.innerHTML = '';
    valueBlock.appendChild(valueTextSpan);
  }
  valueBlock.addEventListener('click', (e) => {
    e.stopPropagation();
    list.classList.toggle('dropdown__list_active');
  });
  list.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown__item');
    if (item) {
      e.preventDefault();
      const link = item.querySelector('.dropdown__link');
      const selectedText = link ? link.textContent.trim() : item.textContent.trim()
      valueTextSpan.textContent = selectedText;
      list.classList.remove('dropdown__list_active');
    }
  });
}
document.querySelectorAll('.dropdown').forEach(initDropdown);
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const list = dropdown.querySelector('.dropdown__list');
    if (list && list.classList.contains('dropdown__list_active')) {
      list.classList.remove('dropdown__list_active');
    }
  });
});