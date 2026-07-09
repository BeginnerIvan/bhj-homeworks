const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
itemsContainer.innerHTML = '';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function() {
  if (xhr.status === 200) {
    loader.classList.remove('loader_active');
    const valutes = xhr.response.response.Valute;
    for (let key in valutes) {
      const currency = valutes[key];
      const itemHtml = `
        <div class="item">
          <div class="item__code">${currency.CharCode}</div>
          <div class="item__value">${currency.Value}</div>
          <div class="item__currency">руб.</div>
        </div>
      `;
      itemsContainer.insertAdjacentHTML('beforeend', itemHtml);
}
}
};
xhr.send();