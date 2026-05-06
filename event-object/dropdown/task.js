const item = document.querySelector('.dropdown__item')
const dropDown = document.querySelector('.dropdown__value');
const listItem = document.querySelector('.dropdown__list');
dropDown.addEventListener('click', () => {
    listItem.classList.add('dropdown__list_active')
})

listItem.addEventListener('click', (event) => {
    const item = event.target.closest('li');
    if(item) {
        dropDown.textContent = item.textContent.trim()
        listItem.classList.remove('dropdown__list_active')
        event.preventDefault();
    }
})